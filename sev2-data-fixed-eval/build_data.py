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
P0_BASELINE_SEGMENTS = [
    ("mj-ms-2026061717-zow4d", range(100, 501, 100)),
    ("mj-ms-2026061801-zpjaj", range(600, 1001, 100)),
]
P0_THINKING_DISABLED_BENCHMARKS = {
    "EmbSpatialBench",
    "CVBench",
    "Perception-geometry-mc-circular-v1",
}


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


def rclone_json(uri):
    proc = subprocess.run(
        ["rclone", "cat", uri],
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    if proc.returncode != 0:
        sys.stderr.write(proc.stderr)
        raise RuntimeError(f"failed to read {uri}")
    return json.loads(proc.stdout)


def p0_uri(job_id, step, suffix):
    return (
        "webdav_m0:mnt/moonfs/kimiv-m0/tensorboard/results/"
        f"{job_id}/kimiv-sft-{job_id}-{step:07d}_t0.0_mt16384_{suffix}/"
        "all_benchmark_scores.json"
    )


def read_p0_baseline():
    local = os.path.join(OUT_DIR, "baseline_p0_lijia_line_curve.json")
    if os.path.exists(local):
        return read_json(local)

    points = []
    for job_id, steps in P0_BASELINE_SEGMENTS:
        for step in steps:
            thinking = rclone_json(p0_uri(job_id, step, "no-think_thinking.type-disabled"))
            prefill = rclone_json(p0_uri(job_id, step, "no-think-prefill"))
            scores = {}
            sources = {}
            for benchmark in BENCHMARK_ORDER:
                if benchmark in P0_THINKING_DISABLED_BENCHMARKS:
                    scores[benchmark] = thinking[benchmark]
                    sources[benchmark] = "p0:webdav_m0:no-think_thinking.type-disabled"
                else:
                    scores[benchmark] = prefill[benchmark]
                    sources[benchmark] = "p0:webdav_m0:no-think-prefill"
            points.append(
                {
                    "job_id": job_id,
                    "step": step,
                    "scores": scores,
                    "sources": sources,
                }
            )
    with open(local, "w", encoding="utf-8") as f:
        json.dump(points, f, ensure_ascii=False, indent=2, sort_keys=True)
    return points


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
    baseline_points = read_p0_baseline()
    if len(baseline_points) != 10:
        raise RuntimeError(f"p0 baseline expected 10 points, got {len(baseline_points)}")
    for point in baseline_points:
        missing_baseline = [b for b in BENCHMARK_ORDER if b not in point["scores"]]
        if missing_baseline:
            raise RuntimeError(
                f"p0 baseline step {point['step']} missing benchmarks: {missing_baseline}"
            )

    datasets = collect_scores()
    payload = {
        "meta": {
            "title": "SEv2 data_fixed SFT Eval",
            "collection_id": COLLECTION_ID,
            "eval_suffix": "data-fixed-full-fix2",
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "baseline": {
                "label": "p0 baseline",
                "job_name": "sn6v-instruct-sft-baseline-32k",
                "segments": [
                    {"job_id": job_id, "steps": list(steps)}
                    for job_id, steps in P0_BASELINE_SEGMENTS
                ],
                "score_policy": {
                    "no-think_thinking.type-disabled": sorted(P0_THINKING_DISABLED_BENCHMARKS),
                    "no-think-prefill": [
                        b for b in BENCHMARK_ORDER if b not in P0_THINKING_DISABLED_BENCHMARKS
                    ],
                },
                "note": "Lijia-line p0 baseline: zow4d(100-500)+zpjaj(600-1000). Spatial benchmarks use no-think_thinking.type-disabled; the other 11 benchmarks use no-think-prefill, matching the historical corrected p0 composite.",
            },
            "core_32k_reference": {
                "label": "core-32k, not p0 baseline",
                "job_id": BASELINE_JOB,
                "note": "mj-ms-2026062414-314zfq was the core-32k job in the ratio sweep, not the pure p0 baseline.",
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
        "baseline": {"steps": baseline_points},
        "baseline_scores": {b: baseline_points[-1]["scores"][b] for b in BENCHMARK_ORDER},
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
