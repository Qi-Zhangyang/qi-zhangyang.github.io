#!/usr/bin/env python3
import glob
import json
import os
import re
import subprocess
import sys
from datetime import datetime, timezone


ROOT = "/home/qizhangyang/vlm-evalkit/data/autoeval/results"
OUT_DIR = "/home/qizhangyang/data_fixed_eval_viz"
OUT_JS = os.path.join(OUT_DIR, "data.js")
OUT_JSON = os.path.join(OUT_DIR, "data.json")
COLLECTION_ID = "mc-vb-2026062715-m948c"
BASELINE_JOB = "mj-ms-2026062414-314zfq"
BASELINE_REMOTE = (
    "webdav_m0:mnt/moonfs/kimiv-m0/tensorboard/results/"
    "mj-ms-2026062414-314zfq/"
    "kimiv-sft-mj-ms-2026062414-314zfq-0001000-smoke2_t0.0_mt16384_"
    "no-think_thinking.type-disabled/all_benchmark_scores.json"
)


DATASETS = [
    ("osd", "mj-ms-2026062702-319tdh"),
    ("gpt4scene", "mj-ms-2026062702-319tdj"),
    ("vsi", "mj-ms-2026062702-319tdm"),
    ("vica", "mj-ms-2026062702-319tdn"),
    ("spacer", "mj-ms-2026062702-319tdp"),
    ("robointer-vqa", "mj-ms-2026062702-319tdq"),
    ("spar7m", "mj-ms-2026062702-319tdt"),
    ("robovqa", "mj-ms-2026062702-319tdu"),
    ("mindcube", "mj-ms-2026062702-319tdw"),
    ("embspatial", "mj-ms-2026062702-319tdx"),
    ("sat", "mj-ms-2026062702-319tdy"),
    ("vst", "mj-ms-2026062702-319te1"),
    ("robo2vlm", "mj-ms-2026062702-319te4"),
]


BENCHMARK_ORDER = [
    "RealWorldQA",
    "EmbSpatialBench",
    "Perception-geometry-mc-circular-v1",
    "CVBench",
    "NaturalPerceptionCircularV3",
    "MathVision",
    "MathVista_MINI",
    "OCRBench",
    "SimpleVQA",
    "REFCOCO_PLUS_VAL",
    "MMMU_PRETRAIN",
    "Math_Baby",
    "BabyVision_x3_fix",
    "MMStar",
]


def read_json(path):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def read_baseline():
    local = os.path.join(OUT_DIR, "baseline_314zfq_step1000.json")
    if os.path.exists(local):
        return read_json(local)

    proc = subprocess.run(
        ["rclone", "cat", BASELINE_REMOTE],
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    if proc.returncode != 0:
        sys.stderr.write(proc.stderr)
        raise RuntimeError("failed to read baseline with rclone")
    data = json.loads(proc.stdout)
    with open(local, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2, sort_keys=True)
    return data


def collect_scores():
    by_job = {job_id: {"name": name, "points": {}} for name, job_id in DATASETS}
    pattern = os.path.join(ROOT, "*", "*data-fixed-full-fix2*", "all_benchmark_scores.json")
    for path in glob.glob(pattern):
        parts = path.split(os.sep)
        job_id = parts[-3]
        task_dir = parts[-2]
        if job_id not in by_job:
            continue
        match = re.search(r"-(\d{7})-data-fixed-full-fix2", task_dir)
        if not match:
            raise RuntimeError(f"cannot parse step from {path}")
        step = int(match.group(1))
        scores = read_json(path)
        by_job[job_id]["points"][step] = scores

    expected_steps = list(range(100, 1001, 100))
    datasets = []
    for name, job_id in DATASETS:
        points = by_job[job_id]["points"]
        missing = [s for s in expected_steps if s not in points]
        if missing:
            raise RuntimeError(f"{name} missing steps: {missing}")
        for step, scores in points.items():
            missing_bench = [b for b in BENCHMARK_ORDER if b not in scores]
            if missing_bench:
                raise RuntimeError(f"{name} step {step} missing benchmarks: {missing_bench}")
        datasets.append(
            {
                "name": name,
                "job_id": job_id,
                "steps": [
                    {"step": step, "scores": {b: points[step][b] for b in BENCHMARK_ORDER}}
                    for step in expected_steps
                ],
            }
        )
    return datasets


def main():
    baseline = read_baseline()
    missing_baseline = [b for b in BENCHMARK_ORDER if b not in baseline]
    if missing_baseline:
        raise RuntimeError(f"baseline missing benchmarks: {missing_baseline}")

    datasets = collect_scores()
    payload = {
        "meta": {
            "title": "SEv2 data_fixed SFT Eval",
            "collection_id": COLLECTION_ID,
            "eval_suffix": "data-fixed-full-fix2",
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "baseline": {
                "label": "baseline 314zfq step1000",
                "job_id": BASELINE_JOB,
                "step": 1000,
                "source": BASELINE_REMOTE,
                "note": "Strict same no-think_thinking.type-disabled core baseline; available as a step1000 reference line.",
            },
            "counts": {
                "datasets": len(DATASETS),
                "benchmarks": len(BENCHMARK_ORDER),
                "steps_per_dataset": 10,
                "charts": len(DATASETS) * len(BENCHMARK_ORDER),
            },
        },
        "benchmarks": BENCHMARK_ORDER,
        "datasets": datasets,
        "baseline_scores": {b: baseline[b] for b in BENCHMARK_ORDER},
    }

    with open(OUT_JSON, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)
    with open(OUT_JS, "w", encoding="utf-8") as f:
        f.write("window.EVAL_DATA = ")
        json.dump(payload, f, ensure_ascii=False, separators=(",", ":"))
        f.write(";\n")

    print(f"wrote {OUT_JS}")
    print(
        f"{payload['meta']['counts']['datasets']} datasets x "
        f"{payload['meta']['counts']['benchmarks']} benchmarks = "
        f"{payload['meta']['counts']['charts']} charts"
    )


if __name__ == "__main__":
    main()
