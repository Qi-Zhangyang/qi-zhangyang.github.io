---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am Zhangyang Qi (Nickname: Alex Chi, Chinese name: **戚张扬**). I received my _Ph.D. in [computer science from The University of Hong Kong (HKU)](https://www.cs.hku.hk/)_, advised by Prof. [Hengshuang Zhao](https://hszhao.github.io/) and Prof. [Yizhou Yu](https://scholar.google.com/citations?user=e38fTZQAAAAJ&hl=en).

I am currently a _Research Intern at [Kimi (Moonshot AI)](https://www.kimi.com/)_, working on multimodal large language models, where I contributed to [**Kimi K3**](https://github.com/MoonshotAI/Kimi-K3) and [**PerceptionBench**](https://github.com/MoonshotAI/PerceptionBench). Previously, I was a _Research Intern at [Shanghai AI Laboratory](https://www.shlab.org.cn/)_, supervised by [Jiaqi Wang](https://myownskyw7.github.io/) and [Tong Wu](https://wutong16.github.io/).

My research interest includes **multimodal language models for 3D scene understanding and interactions**.
- Multimodal large language models
- Visual perception and evaluation
- 3D scene understanding
- Video language models
- 3D point language models

I welcome any inquiries to reach out to me via <span style="color:red;">**WeChat: qi-zhangyang**</span> or [LinkedIn](https://hk.linkedin.com/in/alexzyqi). Attached are my [English Resume](images/Zhangyang_Qi_Eng_Resume_20250310.pdf) and [Chinese Resume](images/Qi_Zhangyang_CHN_CV_20250310.pdf) for your reference.

# 🔥 News
- *2026.07*: &nbsp;🎉🎉 [PerceptionBench](https://github.com/MoonshotAI/PerceptionBench) is released, a benchmark for atomic visual perception in MLLMs.
- *2026.07*: &nbsp;🎉🎉 [Kimi K3](https://github.com/MoonshotAI/Kimi-K3) is released, with open weights available for download.
- *2026.02*: &nbsp;🎉🎉 Joined [Kimi (Moonshot AI)](https://www.kimi.com/) as a Research Intern.
- *2026.07*: &nbsp;🎉🎉 The [VLMEvalKit](https://arxiv.org/abs/2407.11691) technical report is updated on arXiv, now covering 450+ models and 330+ benchmarks.
- *2026.01*: &nbsp;🎉🎉 GPT4Scene has been accepted by [ICLR 2026](https://iclr.cc/).
- *2025.12*: &nbsp;🎉🎉 GGBench has been accepted by [AAAI 2026](https://aaai.org/conference/aaai/aaai-26/). <!-- TODO: 月份按 camera-ready 提交时间推的，录用通知月份自己核一下 -->
- *2025*: &nbsp;🎉🎉 GPT4Point++ has been accepted by *IEEE TPAMI*. <!-- TODO: 补上具体月份，改成 *2025.0X* -->
- *2025.06*: &nbsp;🎉🎉 [VLN-R1](https://vlnr1.github.io/) is released on arXiv.
- *2024.03*: &nbsp;🎉🎉 GPT4Point has been accept by [CVPR 2024](https://cvpr.thecvf.com/Conferences/2024/AcceptedPapers). 
- *2023.10*: &nbsp;🎉🎉 OCBEV has been accept by [3DV 2024](https://3dvconf.github.io/2024/).
- *2022.09*: &nbsp;🎉🎉 Join HKU as a Ph.D. student.
- *2022.07*: &nbsp;🎉🎉 Got bachelor's degree from HIT with *Top Ten Outstanding Students* and *Outstanding Graduate*.

# 📖 Educations
- *2022.09 - 2026.08*, Ph.D. in Computer Science, The University of Hong Kong (HKU). 
- *2018.08 - 2022.07*, Bachelor in Information Engineering, Harbin Institute of Technology (HIT).

# 📄 Tech Reports

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Moonshot AI 2026</div><img src='images/KimiK3.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Kimi K3: Open Frontier Intelligence](https://github.com/MoonshotAI/Kimi-K3)

Kimi Team &nbsp;(**Zhangyang Qi**, Contributor)

- An open-weight, natively multimodal agentic model: 2.8T total parameters (104B activated) in a Mixture-of-Experts architecture, a 1M-token context window, and native vision via MoonViT-V2.
- Released in July 2026 with full open weights, the largest open-weight model released to date.

[**[Blog]**](https://www.kimi.com/blog/kimi-k3)&nbsp;
[**[Tech Report]**](https://github.com/MoonshotAI/Kimi-K3/blob/main/k3_tech_report.pdf)&nbsp;
[**[Code]**](https://github.com/MoonshotAI/Kimi-K3)&nbsp;
[**[Model]**](https://huggingface.co/moonshotai/Kimi-K3)&nbsp;

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Moonshot AI 2026</div><img src='images/PerceptionBench.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[PerceptionBench: Evaluating Atomic Visual Perception in Multimodal Large Language Models](https://github.com/MoonshotAI/PerceptionBench)

Kimi Team &nbsp;(**Zhangyang Qi**, Contributor)

- A benchmark that separates perception from reasoning: 3,000 verified questions covering ten atomic perceptual capabilities, distilled from real model failures across 42 existing benchmarks.
- The ten capabilities are visual relation, counting, attribute, depth & 3D, localization, comparison, fine-grained recognition, context integration, OCR, and hallucination.
- Across frontier MLLMs, no model reaches 60% accuracy, and perception-related hallucination is the weakest capability on average.

[**[Blog]**](https://www.kimi.com/blog/perception-bench)&nbsp;
[**[Tech Report]**](https://github.com/MoonshotAI/PerceptionBench/blob/master/paper/PerceptionBench.pdf)&nbsp;
[**[Code]**](https://github.com/MoonshotAI/PerceptionBench)&nbsp;
[**[Data]**](https://huggingface.co/datasets/moonshotai/PerceptionBench)&nbsp;

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv 2026</div><img src='images/VLMEvalKit.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[VLMEvalKit: An Open-Source Toolkit for Evaluating Large Multi-Modality Models](https://arxiv.org/abs/2407.11691)

Haodong Duan, Xinyu Fang, Junming Yang, Xiangyu Zhao, Zerun Ma, Yuxuan Qiao, Mo Li, Tianhao Liang, Lin Zhu, Amit Agarwal, Xiaozhe Li, Shengyuan Ding, Jiazi Bu, Ziyu Liu, **Zhangyang Qi**, *et al.*, Pan Zhang, Jiaqi Wang, Dahua Lin, Kai Chen

- The open-source evaluation toolkit behind OpenCompass, supporting 450+ multi-modality models and 330+ benchmarks behind a single unified interface.
- I contributed the spatial-grounding evaluations, including DA-2K, ERQA, and RefSpatialBench.

[**[Paper]**](https://arxiv.org/abs/2407.11691)&nbsp;
[**[Code]**](https://github.com/open-compass/VLMEvalKit)&nbsp;

</div>
</div>

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/GPT4Scene.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GPT4Scene: Understand 3D Scenes from Videos with Vision-Language Models](https://gpt4scene.github.io/)

**Zhangyang Qi**, Zhixiong Zhang, Ye Fang, Jiaqi Wang, Hengshuang Zhao

- The first to utilize a video-based large language model for indoor scene understanding.

[**[Project]**](https://gpt4scene.github.io/)&nbsp;
[**[Paper]**](https://arxiv.org/abs/2501.01428)&nbsp;
[**[Code]**](https://github.com/Qi-Zhangyang/GPT4Scene-and-VLN-R1)&nbsp;

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2026</div><img src='images/GGBench.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Game Ground Bench: Probing the Limits of LVLMs in Complex Semantic Grounding Across Game Universes](https://ojs.aaai.org/index.php/AAAI/article/view/37800)

**Zhangyang Qi**, Jinsong Li, Hongjian Wu, Jiaqi Wang, Hengshuang Zhao

- GGBench, a large-scale cross-genre benchmark for visual grounding in interactive game environments: 10 genres from card games to first-person shooters and RPGs, 1,335 test images requiring reasoning over game mechanics and UI rather than direct noun-to-object matching.
- We further propose **Game-R1**, a Grounded Reinforcement Policy Optimization (GRPO) method that reaches strong few-shot generalization and outperforms both open- and closed-source LVLMs on GGBench.

[**[Paper]**](https://ojs.aaai.org/index.php/AAAI/article/view/37800)&nbsp;

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2024 Highlight</div><img src='images/GPT4Point.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GPT4Point: A Unified Framework for Point-Language Understanding and Generation](https://gpt4point.github.io/)

**Zhangyang Qi**, Ye Fang, Zeyi Sun, Xiaoyang Wu, Tong Wu, Jiaqi Wang, Dahua Lin, Hengshuang Zhao

- The first object-level 3D point cloud multimodal large language model, unifying both point cloud understanding and generation tasks.
- Extended to **GPT4Point++**, published in *IEEE TPAMI 2025*.

[**[Project]**](https://gpt4point.github.io/)&nbsp;
[**[Paper]**](https://arxiv.org/abs/2312.02980)&nbsp;
[**[Code]**](https://github.com/Pointcept/GPT4Point)&nbsp;
[**[TPAMI Extension]**](https://ieeexplore.ieee.org/document/11122591)&nbsp;

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv 2025</div><img src='images/Tailor3D.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Tailor3D: Customized 3D Assets Editing and Generation with Dual-Side Images](https://tailor3d-2024.github.io/)

**Zhangyang Qi**, Yunhan Yang, Mengchen Zhang, Long Xing, Xiaoyang Wu, Tong Wu, Dahua Lin, Xihui Liu, Jiaqi Wang, Hengshuang Zhao

- Our work introduces a novel framework for 3D object generation and editing, leveraging dual-view image manipulation.

[**[Project]**](https://tailor3d-2024.github.io/)&nbsp;
[**[Paper]**](https://arxiv.org/abs/2407.06191)&nbsp;
[**[Code]**](https://github.com/Qi-Zhangyang/Tailor3D)&nbsp;

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">3DV 2024</div><img src='images/OCBEV.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[OCBEV: Object-Centric BEV Transformer for Multi-View 3D Object Detection](https://arxiv.org/abs/2306.01738)

**Zhangyang Qi**, Jiaqi Wang, Xiaoyang Wu, Hengshuang Zhao

- An object-centric BEV (Bird's Eye View) autonomous driving 3D object detection framework, achieving performance improvements on the nuScenes dataset with half the training data.

[**[Paper]**](https://arxiv.org/abs/2306.01738)&nbsp;

</div>
</div>

### Other Publications

- [**GPT4Point++: Advancing Unified Point-Language Understanding and Generation**](https://ieeexplore.ieee.org/document/11122591), *IEEE TPAMI 2025*.  
  **Zhangyang Qi**, Ye Fang, Zeyi Sun, Xiaoyang Wu, Tong Wu, Jiaqi Wang, Dahua Lin, Hengshuang Zhao.  
  The journal extension of GPT4Point, replacing the two-stage pipeline with a unified end-to-end training scheme.

- [**VLN-R1: Vision-Language Navigation via Reinforcement Fine-Tuning**](https://vlnr1.github.io/), *Arxiv 2025*. &nbsp;[**[Paper]**](https://arxiv.org/abs/2506.17221)&nbsp;[**[Code]**](https://github.com/Qi-Zhangyang/GPT4Scene-and-VLN-R1)  
  **Zhangyang Qi**, Zhixiong Zhang, Yizhou Yu, Jiaqi Wang, Hengshuang Zhao.  
  An end-to-end framework turning egocentric video streams into continuous navigation actions via GRPO-based reinforcement fine-tuning with a time-decayed reward.

# 🌐 Experiences

**Kimi (Moonshot AI)**, Beijing, China  
*2026.02 – Present*  
- ​**Research Intern**
- Research on multimodal large language models, contributing to Kimi K3 and PerceptionBench.

**Shanghai AI Laboratory**, Shanghai, China  
*2022.07 – 2026.01*  
- ​**Research Intern, Supervisors**: [Jiaqi Wang](https://myownskyw7.github.io/), [Tong Wu](https://wutong16.github.io/) 
- Research on 3D and video language models, developing the GPT4Point, GPT4Point++, and GPT4Scene.
- Curated training data for [InternLM-XComposer](https://github.com/InternLM/InternLM-XComposer) series and [V3Det](https://v3det.openxlab.org.cn) dataset.
  
**Tencent PCG**, Shenzhen, China  
*2021.12 – 2022.05*  
- ​**Research Intern**
- Built CLIP-based cross-modal alignment via contrastive learning for image-text matching.
- Designed joint training paradigms enhancing embedding alignment in multimodal retrieval.


# 🎖 Awards
- Hong Kong PhD Fellowship Scheme (HKPFS), 2022.
- HKU Presidential Scholarship (HKUPS), 2022.
- Top Ten Students of Harbin Institute of Technology, 2021.
- National Scholarship, 2020.

# 💻 Professional Services
- **Conference reviewer**: CVPR’24,25,  ICCV'25.
- **Teaching assistant**: _DASC7606: Deep Learning_ (Graduate course @ HKU), 2023 Spring, 2024 Spring, 2024 Fall.
