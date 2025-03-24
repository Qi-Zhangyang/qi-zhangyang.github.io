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

I am Zhangyang Qi (Nicky name: Alex Chi, Chinese name: **戚张扬**), a third-year _Ph.D. student in [computer science at The University of Hong Kong (HKU)](https://www.cs.hku.hk/)_ since Sep 2022, advised by Prof. [Hengshuang Zhao](https://hszhao.github.io/) and Prof. [Yizhou Yu](https://scholar.google.com/citations?user=e38fTZQAAAAJ&hl=en). I also work as _a Research Intern at [Shanghai AI Laboratory](https://www.shlab.org.cn/)_, supervised by [Jiaqi Wang](https://myownskyw7.github.io/) and [Tong Wu](https://wutong16.github.io/).

My research interest includes **multimodal language models for 3D scene understanding and interactions**.
- Video language models
- 3D point language models
- Large language models
- 3D scene understanding

I am set to graduate in August 2026 and am actively exploring opportunities in my career. I welcome any inquiries to reach out to me via **_WeChat: openainvidia_**. Attached are my [English](https://arxiv.org/abs/2306.01738) and [Chinese](https://arxiv.org/abs/2306.01738) resumes for your reference.

# 🔥 News
- *2024.03*: &nbsp;🎉🎉 GPT4Point has been accept by [CVPR 2024](https://cvpr.thecvf.com/Conferences/2024/AcceptedPapers). 
- *2023.10*: &nbsp;🎉🎉 OCBEV has been accept by [3DV 2024](https://3dvconf.github.io/2024/).
- *2022.09*: &nbsp;🎉🎉 Join HKU as a Ph.D. student.
- *2022.07*: &nbsp;🎉🎉 Got bachelor's degree from HIT with *Top Ten Outstanding Students* and *Outstanding Graduate*.

# 📖 Educations
- *2022.09 - present*, Ph.D. in Computer Science, The University of Hong Kong (HKU). 
- *2018.08 - 2022.07*, Bachelor in Information Engineering, Harbin Institute of Technology (HIT).

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2024 Highlight</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GPT4Point: A Unified Framework for Point-Language Understanding and Generation](https://gpt4point.github.io/)

**Zhangyang Qi**, Ye Fang, Zeyi Sun, Xiaoyang Wu, Tong Wu, Jiaqi Wang, Dahua Lin, Hengshuang Zhao

- The first object-level 3D point cloud multimodal large language model, unifying both point cloud understanding and generation tasks.

[**[Project]**](https://gpt4point.github.io/)&nbsp;
[**[Paper]**](https://arxiv.org/abs/2312.02980)&nbsp;
[**[Code]**](https://github.com/Pointcept/GPT4Point)&nbsp;

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">3DV 2024</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[OCBEV: Object-Centric BEV Transformer for Multi-View 3D Object Detection](https://arxiv.org/abs/2306.01738)

**Zhangyang Qi**, Jiaqi Wang, Xiaoyang Wu, Hengshuang Zhao

- An object-centric BEV (Bird's Eye View) autonomous driving 3D object detection framework, achieving performance improvements on the nuScenes dataset with half the training data.

[**[Paper]**](https://arxiv.org/abs/2306.01738)&nbsp;

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv 2025</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GPT4Scene: Understand 3D Scenes from Videos with Vision-Language Models](https://gpt4scene.github.io/)

**Zhangyang Qi**, Zhixiong Zhang, Ye Fang, Jiaqi Wang, Hengshuang Zhao

- The first to utilize a video-based large language model for indoor scene understanding.

[**[Project]**](https://gpt4scene.github.io/)&nbsp;
[**[Paper]**](https://arxiv.org/abs/2501.01428)&nbsp;
[**[Code]**](https://github.com/Pointcept/GPT4Point)&nbsp;

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv 2025</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Tailor3D: Customized 3D Assets Editing and Generation with Dual-Side Images](https://tailor3d-2024.github.io/)

**Zhangyang Qi**, Yunhan Yang, Mengchen Zhang, Long Xing, Xiaoyang Wu, Tong Wu, Dahua Lin, Xihui Liu, Jiaqi Wang, Hengshuang Zhao

- Our work introduces a novel framework for 3D object generation and editing, leveraging dual-view image manipulation.

[**[Project]**](https://tailor3d-2024.github.io/)&nbsp;
[**[Paper]**](https://arxiv.org/abs/2407.06191)&nbsp;
[**[Code]**](https://github.com/Qi-Zhangyang/Tailor3D)&nbsp;

</div>
</div>


# 🌐 Experience
  
**Shanghai AI Laboratory**, Shanghai, China  
*2022.07 – Present*  
- ​**Research Intern, Supervisors**: [Jiaqi Wang](https://myownskyw7.github.io/), [Tong Wu](https://wutong16.github.io/) 
- Research on 3D & video language models, developing the GPT4Point, GPT4Point++, and GPT4Scene.
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
