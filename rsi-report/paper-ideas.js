(() => {
  "use strict";

  const clusterInfo = [
    ["基础定义与测量", "把 RSI 的系统边界、递归深度、能力与可演化性变成可重复测量，而不是继续争论术语。"],
    ["因果归因与改进器", "回答提升到底来自任务系统、修改器、选择器、记忆还是它们的谱系共适应。"],
    ["评估器、目标与完整性", "研究多代自适应搜索中的 evaluator drift、反馈泄漏、目标变化与评分投机。"],
    ["记忆、经验、技能与课程", "从保存—检索—使用—更新的完整路径研究持久经验何时产生真实累积。"],
    ["结构、拓扑与档案生态", "把节点、连接、执行顺序、模块边界与种群档案本身放进演化空间。"],
    ["跨层更新对象", "比较提示词、程序、工具、测试、数据、权重和优化器，并研究跨层协同与内化。"],
    ["动力学、理论、规模与经济性", "研究递归提升的曲线、平台期、方差、计算分配、预测与经济边界。"],
    ["安全、治理与跨代攻击", "把安全从一次运行的过滤器提升为可继承、可审计、可恢复的代际属性。"],
    ["种群、多智能体与人机系统", "研究群体结构、角色分化、通信、多样性、人类方向控制与身份连续性。"],
    ["科学与真实世界迁移", "用算法、软件、机器学习、定理、机器人和科学发现检验 evolvability 是否真正迁移。"]
  ];

  const I = (id, cluster, type, priority, scale, difficulty, title, question, gap, experiment, gate, anchors, relation = "可独立立项") => ({
    id, cluster, type, priority, scale, difficulty, title, question, gap, experiment, gate, anchors, relation
  });

  const ideas = [
    I("P001", "基础定义与测量", "测量", "A", "M", 3, "RSI 边界判别器：反思、适应、自动开发与递归改进的实证分界", "能否不用作者自称，而从持久更新、后继接管和环外迁移判定一个系统处于哪一级？", "S5/S6/S19 给出分类，但尚缺在同一批系统上校准、能预测迁移结果的操作性判别协议。", "收集 30+ 个代表系统，统一重跑并对持久性、接管、可见反馈和迁移做盲标注；比较多种边界定义对系统排名和 OOD 增益的预测力。", "必须得到高标注一致性并证明新边界能预测独立任务上的累积；只有术语表或主观分级不成刊。", "S5·S6·S19", "是 P004/P005/P007 的定义底座"),
    I("P002", "基础定义与测量", "测量", "A", "M", 3, "系统边界敏感性：同一实验为何会被叫作 RSI 或外部搜索", "把 harness、grader、archive 或人工选择纳入/移出系统边界时，RSI 结论是否改变？", "当前工作常用不同边界报告自改进，导致横向比较把外部能力记到被测系统名下。", "对 DGM/ADAS/HGM/MAC-style 实现做边界重标记和可执行干预；逐层移出选择、存储、评分、交接功能，重算 autonomy 与 gain。", "要给出边界不变量或敏感性曲线，并实际改变至少一项现有结论；只画概念框图不够。", "S1·S10·S16·S25", "可与 P001 合并成长文"),
    I("P003", "基础定义与测量", "基准", "B", "L", 4, "行为等价、实现不同：RSI 角色图的跨框架一致性", "十类功能行为能否在单体代码、模块流、多智能体和 archive 系统中被同一套测试识别？", "S19/S25/S27 的表示粒度不同，尚无证据说明角色级测量不会偏向某一种实现风格。", "为 J/C/A/E/D/M/Q/K/G/H 各建黑盒 probe，在四类框架中做人工映射与自动识别，测试同功能异实现和同实现多角色。", "跨实现评分需有测量不变性；若 probe 只识别文件名或代码形态，论文主张失败。", "S19·S25·S27", "依赖 P001 的边界定义"),
    I("P004", "基础定义与测量", "测量", "A", "L", 4, "能力不等于可演化性：双剖面 RSI Benchmark", "当前任务能力 c(F) 与产生更好后继的可演化性 μ(F) 会不会系统性错位？", "HGM 研究后代生产力，Full-Stack 近邻尚未把每个功能角色的当前能力与可修改性分开测。", "构造高 c/低 μ、低 c/高 μ 等受控系统；跨 5 代测角色能力、成功修改率、后代增益和排名翻转。", "新剖面必须比单次 task score 更好预测后代质量，并对多框架成立；只重命名 CMP 不够。", "S16·S19·S20", "旗舰候选；连接 P005/P007/P011"),
    I("P005", "基础定义与测量", "测量", "A", "M", 3, "闭环深度：RSI 应测几代才算递归", "一次成功修改、连续多代成功和可无限外推之间，应该怎样定义可比较的递归深度？", "多数工作报告最终分数或固定轮数，没有把后继接管失败、停滞和退化统一成生存过程。", "把每条 lineage 视为带 competing risks 的生存过程，报告 takeover、improvement、regression、integrity failure 的 hazard；在多种代数预算复核。", "指标必须对截断运行稳健、能区分同终分不同轨迹；若只是代数计数则不足。", "S1·S16·S20", "可作为 P004 的独立测量论文"),
    I("P006", "基础定义与测量", "基准", "A", "M", 4, "Zero-Scaffold RSI：只有自身与盲标量能否启动改进制度", "内部框架 F0=∅、演化阶段只见 Self_t 和标量分数时，模型能否自举出可接管的 F1、F2？", "现有自改系统通常预装 propose-score-select 或 archive；零脚手架启动能力几乎没有被隔离。", "2–3 个模型、程序化任务、严格密封反馈；比较 F0、最小固定环和人工完整框架的 bootstrap rate、time、depth 与成本。", "必须验证零泄漏、独立重放和真正 successor takeover；只让模型在对话里写计划不算。", "S1·S4·S20·S22", "旗舰实验；P007 的 Z0 基线"),
    I("P007", "基础定义与测量", "因果", "A", "XL", 5, "递归改进的最小充分角色集", "J/C/A/E/D/M/Q/K/G/H 中哪些角色及交互对持续改进必要或充分？", "现有工作各自固定大部分 pipeline，尚无覆盖完整角色集的加入、冻结、删除和组合干预。", "先做 fractional factorial 筛选，再对关键交互做随机化全因子确认；64+ 独立 lineage，跨模型与任务复现。", "至少一个组件因果关系需跨实现稳定，且发现比 task score 更能解释递归成败；单一框架消融不够。", "S1·S19·S20·S22·S25", "Full-Stack RSI 旗舰主论文"),
    I("P008", "基础定义与测量", "因果", "B", "L", 4, "角色冗余与替代：缺失模块何时能被其他模块涌现补偿", "显式 D、Q 或 K 被删除后，A/M 是否会在代码或提示中隐式重新实现其功能？", "模块消融常把文件删除当成功能删除，忽略功能迁移到其他组件造成的假阴性。", "删除显式角色并使用行为 probe、信息流与代码分析追踪功能重现；比较禁止重现与允许涌现两种条件。", "必须区分结构冗余、功能冗余和测量泄漏，并改变对至少一个消融结果的解释。", "S19·S22·S27", "依赖 P003 的角色 probe"),
    I("P009", "基础定义与测量", "测量", "B", "L", 4, "结构创新不是大 diff：Topology Novelty Metric", "怎样判断一次框架修改真的改变了计算结构，而不是变量改名或代码膨胀？", "ADAS/AFlow/AgentSquare 能搜索结构，但跨表示比较拓扑新颖性仍缺少语义不变量。", "建立控制流、数据流、角色图三层 canonicalization；对语义等价改写和真实结构改变做对抗数据集，再预测迁移收益。", "指标须抵抗代码混淆、重构和节点拆分作弊，并与人工结构判断及行为差异相关。", "S25·S26·S27", "为 P041–P050 提供公共测量"),
    I("P010", "基础定义与测量", "数据集", "B", "L", 3, "Evolution Failure Atlas：成功、停滞与退化谱系图谱", "RSI 失败是否存在跨框架可复用的机制类别，而不只是低分日志？", "已有论文偏重最好后代，跨代失败分支、恢复过程和完整性事件缺少统一数据资产。", "从 5+ 框架收集全谱系，双人盲标注退化、共适应、遗忘、投机、预算失控等机制；训练诊断器并做跨框架留出。", "图谱要能支持可复用预测或干预，且公开失败分支；只做案例汇编不足。", "S1·S16·S18·S23", "可独立数据集/negative-results 稿"),

    I("P011", "因果归因与改进器", "基准", "A", "L", 4, "TransplantBench：后继修改器能否改好未见父代", "Mt 相比 M0 的提升能否脱离自家谱系，跨父代、模型、领域和框架保持？", "DGM/HGM/Hyperagents 已触及元改进，但没有大规模、预算配平的祖先—后继修改器随机移植矩阵。", "对分层未见父代执行 576+ 配对 trials，锁定 evidence、预算、工具与 seed；报告 TMA、CAG 和 hidden/shadow 结果。", "正 TMA 必须跨至少两个模型、领域和框架；只在自家谱系提升只证明共适应。", "S1·S16·S20", "原 A 的完整独立版本"),
    I("P012", "因果归因与改进器", "因果", "B", "XL", 5, "Full-Role Transplant：不只移植 M，还移植 D/Q/K/E", "改进能力究竟存在哪个角色或角色组合中？", "仅交换修改器会把诊断、选择和记忆的贡献固定掉，无法识别 bundle 级改进能力。", "用可组合角色接口做单角色、二阶组合和整包移植；采用 sparse factorial 与 hierarchical model 估计角色主效应和交互。", "必须显示角色级归因可跨实现复现；若接口适配占据主要收益，需降级为系统工程。", "S19·S20·S22", "依赖 P003/P011"),
    I("P013", "因果归因与改进器", "测量", "B", "L", 4, "Improver Co-Adaptation Map：改进器到底绑定了什么", "修改器失败是绑定父代代码风格、基础模型、任务域、evaluator，还是反馈格式？", "迁移失败通常只被报告为 OOD 下降，没有定位共适应层级。", "逐项打断代码接口、模型、领域、反馈、预算和工具的匹配，建立共适应张量和最小破坏集合。", "需提供能预测新移植结果的层级模型；只列消融表不够。", "S16·S20·S31", "可由 P011 数据扩展，主张必须独立"),
    I("P014", "因果归因与改进器", "方法", "C", "XL", 5, "跨代 Credit Assignment：哪个祖先修改造就了今天的后代", "一个早期改动通过多代间接影响最终性能时，如何分配因果贡献？", "当前 lineage 指标多按节点或后代聚合，难以区分奠基改动、幸运分支和末代微调。", "使用分支重放、ancestor patch removal、path-specific effects 与近似 Shapley；在合成真因果谱系和真实 archive 上验证。", "估计器须在有真值环境恢复因果贡献，并能改善后续 parent selection；纯事后可视化不足。", "S1·S16", "理论+系统，高计算成本"),
    I("P015", "因果归因与改进器", "因果", "A", "L", 4, "固定元程序 vs 可演化元程序：严格等预算复核", "自改 meta-procedure 是否真的优于固定强 meta-agent，还是获得了更多搜索容量？", "DGM 等已有相关比较，但固定基线强度、累计 token、候选数与 archive 访问常难完全配平。", "构建 matched-capacity fixed、periodically retuned、self-evolving 三组；相同生成次数、上下文、反馈和 wall-clock，跨任务跑多条 lineage。", "要识别何种环境下 self-evolving 产生额外 recursive advantage；简单重复已知固定/自改对照不够。", "S1·S16·S20·S36", "近期可复核但需强基线"),
    I("P016", "因果归因与改进器", "因果", "B", "M", 4, "Artifact Inheritance vs Improver Inheritance", "后代变强是因为继承了更好的 agent artifact，还是继承了更会改的 update process？", "task gain 与 improver gain 经常共同继承，单看最终版本无法分离。", "2×2 交换：祖先/后继 artifact × 祖先/后继 improver；在新任务启动等预算后代生成，分析交互与中介效应。", "必须得到可解释的交互并在未见任务复现；若只比较四个最终分数不做后代生成，不成立。", "S1·S16·S20", "P011 的紧凑因果论文版本"),
    I("P017", "因果归因与改进器", "测量", "B", "M", 3, "Parent-Conditioned Improvement：改进能力随父代水平如何变化", "同一修改器对弱、中、强父代的边际增益是否可比较？", "平均 gain 混合地板、天花板和可改空间，可能错误评价 modifier。", "构造能力分层且错误类型匹配的父代库，拟合 response surface；加入人工已知修复机会作为可改性标尺。", "需区分 parent ability 与 repair opportunity，并改变 modifier 排名；仅按 baseline 分桶不够。", "S10·S11·S16", "P011 的重要独立测量支线"),
    I("P018", "因果归因与改进器", "因果", "B", "L", 4, "Mutation vs Selection：是谁带来了谱系增益", "好结果来自提出更好候选，还是选择器更会从普通候选中挑赢家？", "archive 方法把 candidate quality 与 selection quality 合在最终曲线里。", "交叉冻结 M/Q，保存全候选并离线重新选择；用 oracle selector、random selector、祖先/后继 selector 分解 proposal 与 selection regret。", "要报告候选分布而非仅 winner，并证明 decomposition 能预测新谱系表现。", "S1·S16·S27", "可独立因果实验"),
    I("P019", "因果归因与改进器", "方法", "B", "M", 3, "Negative Improvement Competence：会进步也要会拒绝坏改动", "识别、回滚和从退化中恢复是否是独立的改进能力？", "RSI 指标偏向正增益，常忽略系统是否会安全拒绝看似高分但 OOD/完整性更差的后继。", "注入分数诱人但隐藏退化的候选，测 detection、reject、rollback 和 recovery time；比较祖先/后继 Q/G。", "必须证明该能力提升长期 lineage utility，而非简单保守导致全部拒绝。", "S17·S18·S23", "连接安全簇 P075/P076"),
    I("P020", "因果归因与改进器", "测量", "A", "L", 4, "Recursive Advantage under Equal Compute", "递归继承相比把全部预算给一次性搜索，是否产生超出计算量的收益？", "多代方法常与更少候选的一次性 baseline 比较，难区分递归结构和总 compute。", "固定总 token、执行次数和反馈查询，比较单代 best-of-N、分阶段搜索、固定 meta 与后继接管；画 anytime frontier。", "递归方案需在至少一类分布移位上形成稳定 Pareto 优势；只在更多串行延迟下提分不算。", "S1·S16·S36", "近期高价值基准论文"),

    I("P021", "评估器、目标与完整性", "系统", "A", "M", 3, "Evaluator Firewall for Multi-Generation RSI", "怎样让开发反馈可用，同时隐藏测试永不回流到改进过程？", "MAC/S39 已隔离单代开发与测试，但多代 lineage 的日志、缓存、重复查询和后继制品带来新泄漏通道。", "实现 append-only audit、一次性 hidden confirmation、shadow evaluator 与污染账本；用 scripted/natural attacks 验证所有回流路径。", "必须展示多代特有威胁和可测防护收益；普通容器隔离的重新包装不成刊。", "S10·S18·S39·S40", "P022/P023 的基础设施，也可系统论文"),
    I("P022", "评估器、目标与完整性", "理论", "B", "L", 5, "Adaptive Holdout for Evolving Lineages", "隐藏集被多代候选间接反复使用时，怎样保持统计有效性？", "S40 研究序贯修改，但 RSI 同时存在分支、选择性报告、非平稳策略与多指标。", "形式化 lineage-aware query model，设计 privacy/thresholdout-style 预算；在合成与真实搜索中比较 coverage、power 和可用反馈。", "需要定理或有限样本保证加实证；仅规定 hidden 只跑一次属于协议，不是新方法。", "S21·S40", "可与 P021 形成 benchmark+theory 长文"),
    I("P023", "评估器、目标与完整性", "方法", "A", "XL", 5, "Robust Metaproductivity under Evaluator Shift", "在 E1 下高产的谱系，换到 E2/E3 后是否仍会产生好后代？", "HGM 有 CMP，RQGM 有 evaluator 共演化；缺少跨冻结 evaluator 的反事实重放与稳健选择目标。", "同一 archive 在多套源/hidden/shadow evaluator 上重放，提出 worst-case 或 distributionally robust metaproductivity selector。", "新指标/选择器需提升未见 evaluator 下后代质量；只报告相关性下降会更像分析稿。", "S16·S21", "旧 B+C 的完整独立论文"),
    I("P024", "评估器、目标与完整性", "方法", "B", "L", 4, "Evaluator Diversity as an Evolvable Resource", "评估器数量、异质性和相关结构如何影响长期搜索？", "常见 ensemble 只平均 judge，未把 evaluator diversity 当作会耗竭、可选择的资源。", "构造程序验证器、同源 judge、异源 judge 与人类子样本；演化 evaluator portfolio 并测 gaming、cost 和 transfer。", "需提出能优于固定 ensemble 的组合/更新算法，且控制 evaluator 总预算。", "S8·S18·S21", "与 P027/P079 有接口"),
    I("P025", "评估器、目标与完整性", "测量", "B", "M", 4, "Self-Confirming Loop Detector", "同一模型参与生成、诊断、评价和证明时，如何检测共同盲点造成的虚假进步？", "self-confirmation 常被口头警告，但缺少角色重合度与错误相关性的可执行审计。", "系统性改变角色模型共享程度，注入已知共同盲点；用 disagreement graph、counter-judge 和因果替换预测虚假接受。", "检测器必须在不看隐藏答案时提前识别高风险 lineage，并降低 false improvement。", "S8·S18·S21", "可独立评估完整性论文"),
    I("P026", "评估器、目标与完整性", "测量", "B", "L", 4, "Learned Judge Drift across Generations", "被自身数据不断更新的 judge 会校准变好，还是与 agent 一起漂移？", "评价器共演化已有系统，但跨代 calibration、ranking consistency 与 minority failure 尚未系统测量。", "保留时间锁人类/形式金标准，逐代测 Brier、ECE、pairwise flip 和 subgroup drift；比较冻结、在线更新和周期重置。", "必须证明 drift 指标可预警 hidden regression；只看 judge 与 agent 同步上涨不可信。", "S8·S21·S34", "可作为 P023 的评估分析"),
    I("P027", "评估器、目标与完整性", "因果", "A", "L", 4, "Co-Evolving Evaluator vs Frozen Audit", "evaluator 共演化何时提供更难课程，何时只是移动球门？", "RQGM 提出协同进化方向，仍需用不可变 audit 判断难度增长与标准漂移。", "固定 agent evolution budget，比较 frozen、co-evolving、adversarial 与 hybrid evaluator；所有后代在时间锁 audit 套件重放。", "要识别可预测的成功条件或新 hybrid 算法；简单复现 coevolution 曲线不够。", "S21·S37·S38", "近期可做，需强外部 audit"),
    I("P028", "评估器、目标与完整性", "基准", "A", "M", 3, "Gaming Opportunity Curves：评分暴露多少会诱发投机", "从盲标量到完整测试日志，反馈带宽增加时能力学习和 reward hacking 如何权衡？", "现有 benchmark 比较少数权限配置，尚无连续的 feedback exposure—gain—gaming 曲线。", "对题面、分项分、错误、测试名、代码、写权限逐级开放；在同任务做配对实验并记录 intended gain/Mislead gap。", "要得到跨模型稳定的转折点或设计原则；只有攻击案例不够。", "S17·S18·S39", "可直接形成协议论文"),
    I("P029", "评估器、目标与完整性", "理论", "B", "L", 4, "最小充分反馈：改进需要多少比特", "标量、排序、二元通过、错误类别和自然语言反馈各提供多少可迁移改进信息？", "反馈常按界面命名比较，缺少信息量、查询数和隐私/泄漏的统一量化。", "构造可控任务族，编码等比特不同语义的反馈；估计 sample efficiency、transfer 与 gaming 的 rate-distortion frontier。", "需要理论模型或可泛化经验规律；只比较五种 UI 文本不成刊。", "S11·S18·S40", "与 P006 的盲分数实验互补"),
    I("P030", "评估器、目标与完整性", "治理", "C", "L", 5, "Bounded Goal Evolution：允许目标进化但不允许越界", "J 可演化时，怎样区分合理目标细化、代理目标漂移和治理绕过？", "多数系统固定目标；少数目标演化方案缺少反事实授权、可逆性和外部不变量的实证。", "定义 owner contract 与允许目标变换语言，生成边界案例；比较静态、可证明 refinement、自由重写对能力与违规的影响。", "需有形式约束或机器可检查语义，加多代攻击；普通 system prompt 约束不足。", "S21·S23·S24", "连接 P080，安全敏感"),

    I("P031", "记忆、经验、技能与课程", "基准", "A", "L", 4, "Save→Retrieve→Use→Update：持久经验的完整因果路径", "表现提升是否真的经过预期的保存、检索、使用和更新，而非上下文泄漏或任务重复？", "PAST-Bench 已做 pathway evidence；剩余空间是跨框架可干预的逐环节因果分解和长程 transfer。", "对每环节做断点、替换和伪记忆对照，覆盖 4+ 框架、动态任务与 OOD；报告路径特异效应。", "必须超出 persistence on/off，并找出可修复的因果瓶颈；只扩大任务数不够。", "S9·S28·S30", "近期可做但要正面超越 PAST-Bench"),
    I("P032", "记忆、经验、技能与课程", "因果", "B", "M", 3, "Counterfactual Memory Editing", "如果只改变一条记忆的内容、来源或时间戳，后续改进轨迹怎样变化？", "记忆评测多做删除或启停，难以定位具体经验的正负因果贡献。", "创建成对真实/反事实/过时/冲突记忆，跨时间注入；用 mediation 与 influence tracing 预测行动和更新。", "要在未见任务上准确定位有害/关键记忆并改善维护策略。", "S9·S28·S29", "可独立因果记忆论文"),
    I("P033", "记忆、经验、技能与课程", "基准", "B", "L", 4, "Lineage Memory Transplant", "后代积累的 K 能否让陌生 agent 或框架变强，还是只对原谱系可读？", "现有记忆迁移常在同一 agent 结构内，缺少跨模型、表示和工具环境的标准移植。", "冻结 memory artifact，统一适配接口；跨 agent/model/framework 移植并与原始轨迹、摘要、技能库和空记忆比较。", "迁移需控制 token 和任务曝光，并证明不是把答案带进测试。", "S9·S28·S29·S30", "记忆版 TransplantBench"),
    I("P034", "记忆、经验、技能与课程", "方法", "A", "M", 3, "Forgetting Is a Capability：自进化系统的主动遗忘", "何时删除、降权或隔离旧经验会比无限累积更利于改进？", "ELL/Evo-Memory 强调积累，过时状态、冲突知识和检索拥塞下的遗忘策略仍是明显缺口。", "动态环境中控制概念漂移与噪声，比较永不忘、TTL、冲突感知、价值感知和可演化遗忘策略。", "新策略需同时改善更新正确率、迁移和存储成本；只在单一 QA 数据集提分不足。", "S9·S28·S29·S30", "近期方法论文"),
    I("P035", "记忆、经验、技能与课程", "测量", "B", "L", 4, "When Does Experience Become a Skill?", "从单次轨迹到可复用程序化技能的临界条件是什么？", "技能库工作报告增益，但缺少抽象度、支持任务数和反事实复用的统一定义。", "设计共享潜在子程序但表面不同的任务族，测经验压缩、调用组合、负迁移和最小支持集。", "指标需预测跨任务复用，且区分记忆摘录、提示模板和可执行技能。", "S29·S30·S31", "可独立测量+benchmark"),
    I("P036", "记忆、经验、技能与课程", "因果", "A", "L", 4, "Meta-Skill Recursion：改技能的方法是否也学会改自己", "双时间尺度中，元技能升级是否产生独立于任务技能的后代优势？", "MetaSkill-Evolve 已提出体系；需要祖先/后继元技能交换、未见技能库和跨 pipeline 的因果验证。", "交叉 task skill 与 meta-skill 代际，移植到未见任务和 pipeline；锁定 backbone、数据、candidate budget。", "必须证明后继 meta-skill 的 transferable advantage，而非复述原论文总体增益。", "S31", "明确的 follow-up 论文"),
    I("P037", "记忆、经验、技能与课程", "方法", "B", "L", 4, "Blind-Score Curriculum Discovery", "只看自身与聚合分数时，系统能否发明有效课程而不访问失败样例？", "自生成课程通常获得题目或解题反馈；零脚手架设定下 C 角色如何涌现尚不清楚。", "让系统自主生成训练任务但隔离 hidden 题，比较无课程、固定 easy-to-hard、可演化课程；追踪任务多样性与真实迁移。", "课程必须提升环外任务而非生成容易自证的题；需程序化真值或独立 verifier。", "S6·S11·S32", "依赖 P006 的访问契约"),
    I("P038", "记忆、经验、技能与课程", "基准", "B", "L", 4, "Curriculum Transfer Matrix", "在一个模型/任务上学到的课程策略能否教会另一个模型或领域？", "easy-to-hard 结果通常绑定任务生成器，缺少课程本身的跨学习者评价。", "冻结 curriculum policy，跨模型规模、初始化和任务族运行；与随机、难度匹配和人类课程配平。", "需给出 learner-conditioned 与通用课程的边界，并避免把训练样本直接迁移当策略迁移。", "S11·S32·S35", "课程版迁移论文"),
    I("P039", "记忆、经验、技能与课程", "方法", "B", "L", 4, "Archive Compression without Evolvability Loss", "如何压缩多年谱系而不丢掉未来有用的失败与分支多样性？", "DGM-style archive 会增长；普通摘要按当前分数压缩，可能删除低分但高 metaproductivity 节点。", "比较得分、覆盖、新颖性、影响力和后代价值驱动的压缩；在压缩后继续演化并测 long-horizon regret。", "必须在固定存储/上下文预算下保持或提升后代质量；只节省 token 不够。", "S1·S16·S28", "连接 P048/P066"),
    I("P040", "记忆、经验、技能与课程", "安全", "A", "L", 4, "Poisoned Experience across Generations", "一次恶意或错误经验如何经摘要、技能化和后继复制长期存活？", "跨代安全工作给出广泛攻击面，记忆路径上的衰减、放大和清除仍可独立系统研究。", "在 save/retrieve/skill/archive 各阶段注入可追踪 payload，跨 10+ 代测存活、传播、行为影响和清除代价。", "需要与实际 self-evolving memory 框架结合并提出有效防护；只做 prompt injection 案例不够。", "S23·S28·S29·S30", "安全与记忆交叉论文"),

    I("P041", "结构、拓扑与档案生态", "系统", "A", "XL", 5, "Structural RSI：组件内容之外的节点与连接演化", "允许增删、拆并、重排和重连后，是否获得固定拓扑无法达到的长期增益？", "ADAS/AFlow/AgentSquare/Self-Harness 搜索结构，但没有统一隔离内容优化与拓扑自由度的多代因果基准。", "用共同图 IR 比较 fixed topology、parameter-only、module-only、full topology；预算配平并跨模型/任务迁移。", "结构自由度须带来可复现的外推或效率优势，并抵抗等价重构；只展示新图形不够。", "S22·S25·S26·S27", "Full-Stack 旗舰 Paper 4"),
    I("P042", "结构、拓扑与档案生态", "基准", "B", "L", 4, "Graph-Edit Language for Evolvable Agents", "能否定义既可执行、可组合、可验证，又不把搜索锁死在人工模块库中的结构修改语言？", "自然语言/任意代码开放但难比较，模块搜索可比却限制创新。", "设计 typed graph-edit DSL 与 compiler，覆盖新增节点、边、循环、条件、并行、权限；和 Python/模块库比较有效候选率及新颖性。", "DSL 要在多个框架表达现有设计并发现非模板结构；若仅是配置格式，不足。", "S25·S26·S27", "P041 的方法基础，也可 systems 稿"),
    I("P043", "结构、拓扑与档案生态", "方法", "B", "L", 4, "Topology Priors vs Open-Ended Search", "人工工作流先验何时帮助搜索，何时阻止真正新结构出现？", "AFlow/AgentSquare 使用不同搜索空间，尚少在相同任务和预算下系统比较表示先验。", "控制同一底层执行器，比较模板、模块、图语法与任意代码；测 sample efficiency、novelty、transfer 和 invalid rate。", "需揭示任务/预算相关的选择规律或提出自适应 prior；单纯榜单不够。", "S25·S26·S27", "可与 P042 合并"),
    I("P044", "结构、拓扑与档案生态", "方法", "C", "XL", 5, "Dynamic Modularity：模块边界也能进化", "系统能否学会哪些计算应封装成模块，而不由人预定义 planning/reasoning/tool/memory？", "现有 modular search 通常固定模块语义和接口，限制角色重新组合。", "允许从 execution traces 提议边界、接口和复用单元；比较固定模块、自动聚类和可演化模块化。", "需出现跨任务复用且降低搜索/维护成本，模块不能只是代码分文件。", "S19·S25·S27", "高风险结构方法"),
    I("P045", "结构、拓扑与档案生态", "测量", "B", "L", 4, "Role Birth and Death across Lineages", "D/Q/K/G 等功能是在何时涌现、消失或迁移的，是否对应阶段性需求？", "角色表通常静态标注，缺少沿完整 lineage 的动态功能追踪。", "用行为 probes 和 graph IR 对每代做角色占有率/迁移标注，结合 change-point 分析与环境扰动。", "角色事件需预测后续 gain/degeneration，并在多个框架复现；只做可视化不成刊。", "S19·S22·S25", "依赖 P003/P009"),
    I("P046", "结构、拓扑与档案生态", "因果", "B", "L", 4, "Split or Merge? 角色粒度的因果实验", "把同一功能拆成多个 specialist 或合并进一个 generalist，何时有利于递归改进？", "多智能体工作常比较整体架构，未控制信息、模型调用和职责边界。", "对 D/M/E/Q 等关键角色做配对拆分/合并，锁定 token 与模型；测错误相关性、协调成本、迁移和演化速度。", "需形成可预测的粒度原则，而非某任务上多 agent 更强。", "S25·S27·S34", "连接 P082"),
    I("P047", "结构、拓扑与档案生态", "方法", "B", "L", 4, "Execution-Order Evolution", "相同组件集合只改变调用顺序、循环和并行，能否产生独立 evolvability 增益？", "组件消融会同时改变内容和调度，顺序常被视为实现细节。", "固定节点函数，搜索 DAG/loop/order；与内容修改交叉，测性能、延迟、错误恢复和跨任务迁移。", "必须证明 order 的可迁移效应并控制调用次数；只找到更长 workflow 不够。", "S26·S27", "较干净的结构因果论文"),
    I("P048", "结构、拓扑与档案生态", "方法", "A", "L", 4, "Archive Ecology：保留高分还是保留未来可能性", "档案的质量—多样性—后代生产力如何共同决定长期改进？", "DGM/HGM 已强调 archive 与 CMP，但选择规则、生态位和灭绝风险仍有丰富实验空间。", "比较 best-only、novelty、quality-diversity、CMP 与 robust-CMP；在多峰动态任务中测覆盖、恢复和 long-run best。", "需提出优于强 QD/CMP 基线的选择方法或新的可复现生态规律。", "S1·S16", "近期方法论文"),
    I("P049", "结构、拓扑与档案生态", "方法", "B", "L", 4, "Adaptive Branching：何时深挖一支，何时扩展新谱系", "分支因子与深度应如何随不确定性、收益和多样性动态分配？", "固定 generation×candidate 预算普遍使用，但未必计算最优。", "把 lineage expansion 写成 bandit/tree policy，用 calibrated uncertainty 和 descendant value 分配预算；与 fixed beam/MCTS/随机比较。", "在相同总执行预算下改善 anytime frontier，且跨任务有效；调参型小提升不够。", "S1·S16·S26", "连接 P062/P066"),
    I("P050", "结构、拓扑与档案生态", "测量", "B", "L", 4, "Can Structure Predict Transfer?", "哪些图结构特征能预测 agent 在新模型、新任务和新工具上的迁移？", "ADAS 报告设计迁移，但缺少跨方法结构表征和前瞻预测。", "汇集 ADAS/AFlow/AgentSquare/自家系统的 1,000+ 结构，抽取角色图/控制流特征；严格 lineage split 预测 OOD 表现。", "模型要在未见生成方法上仍有效，并产生可干预的设计原则；相关性热图不够。", "S25·S26·S27", "数据可与 P009/P041 共用"),

    I("P051", "跨层更新对象", "因果", "A", "L", 4, "Prompt-to-Program Phase Transition", "任务复杂度增加时，最优自改对象何时从提示词转向可执行程序或工作流？", "prompt optimization 与 agent code search 通常分开评测，缺少统一任务连续体和交叉预算。", "构造控制逻辑、状态和工具需求逐步增加的任务族；比较 prompt-only、workflow、code 与混合搜索的 frontier。", "需识别稳定转折条件并跨模型复现；仅证明代码平均更强不够。", "S3·S25·S26", "近期实证方法论文"),
    I("P052", "跨层更新对象", "方法", "B", "XL", 5, "Autonomous Tool Invention under Hidden Evaluation", "系统能否识别反复失败模式，发明新工具、验证并在后代中复用？", "工具使用成熟，但工具创建常由固定脚手架触发，且容易把测试逻辑编码进工具。", "开放受限工具代码区，使用程序化未见任务；比较 tool-use、tool-compose、tool-invent，审计训练/test 信息和权限。", "新工具须跨任务复用并通过安全审计；一次性 helper function 或答案缓存不算。", "S19·S25·S30", "高工程量 systems 论文"),
    I("P053", "跨层更新对象", "方法", "A", "M", 3, "Tool Lifecycle Evolution：发明之外还要修复、合并与淘汰", "长期运行中，系统能否主动发现失效/重复/危险工具并完成生命周期管理？", "研究偏重增加工具，接口漂移、技术债、冲突和删除策略研究不足。", "模拟 API 版本变化、权限改变和工具冗余；测检测、迁移、回滚、调用成功率与目录复杂度。", "需在动态环境同时提高能力与降低工具债；只修 API benchmark 不够。", "S28·S30·S36", "近期可做的工具演化论文"),
    I("P054", "跨层更新对象", "方法", "A", "L", 4, "Self-Generated Tests without Self-Deception", "agent 自己生成测试时，怎样提升修复质量又不把共同盲点写进测试？", "自改 coding agent 依赖测试反馈，但测试生成者、修复者和 selector 的错误相关性缺少隔离。", "交叉同源/异源/形式/变形测试生成，保留 hidden mutation score；测 patch quality、test adequacy 和 false confidence。", "新方法需在未见 bug 类别提升 mutation kill 与真实修复，不能只提高自生成测试通过率。", "S3·S8·S18", "软件/评估交叉论文"),
    I("P055", "跨层更新对象", "方法", "A", "XL", 4, "Data-Policy RSI：不改训练器，只演化数据策略能走多远", "固定模型与训练栈时，数据获取、过滤、混合和课程策略的递归优势是什么？", "RSIBench-Data 已打开方向；独立空间在跨数据制度迁移、策略因果和多代 overfitting。", "统一训练栈，比较 fixed heuristic、one-shot search、inherited data policy；跨模型规模和 hidden distribution 评估。", "必须提供新策略/指标且超越既有 benchmark baseline；只复跑排行榜不够。", "S11·S32·S35", "近期但训练成本高"),
    I("P056", "跨层更新对象", "因果", "B", "XL", 5, "Weights vs Scaffold：能力应该写进哪里", "相同经验用于更新权重、记忆、提示/代码时，哪种载体最持久、可迁移、可逆？", "参数自训练与 scaffold evolution 各自有结果，缺少等信息/等算力的载体交叉实验。", "同一经验池分别做 fine-tune、memory、prompt、code 和 hybrid；测即时增益、OOD、遗忘、恢复、成本与安全。", "需严格核算训练/推理 compute 和信息暴露，形成可复用写入策略。", "S19·S28·S32·S33", "大算力综合论文"),
    I("P057", "跨层更新对象", "方法", "C", "XL", 5, "Optimizer Evolution for Self-Improving Models", "系统能否在固定训练数据下修改 loss、sampling、update schedule 或 optimizer 本身？", "当前 RSI 数据基准多固定后训练栈，开放优化器后归因、稳定性和成本尚未解决。", "在小型可验证模型族中开放受限 optimizer DSL，外部执行器训练并隐藏评估；比较算法搜索与手工优化器。", "需要发现跨任务/模型有效的更新规则并独立复现；只自动调超参不够。", "S2·S11·S32", "高风险算法发现"),
    I("P058", "跨层更新对象", "方法", "A", "XL", 5, "Avoiding Synthetic-Data Collapse in Recursive Training", "多轮自生成数据训练如何保持难度、覆盖和少数模式？", "自训练可提升但也可能收缩分布；RSI 需要把生成、选择、训练和独立审计放进同一长期实验。", "跨 10+ 轮控制真实数据保留、对手生成、diversity selection 和 verifier；测尾部、OOD、校准与模式覆盖。", "需提出优于强 self-play/self-training 的防塌缩方法，并报告完整轮次而非最佳 checkpoint。", "S32·S33·S34·S35", "模型级核心论文"),
    I("P059", "跨层更新对象", "方法", "C", "XL", 5, "Cross-Layer Update Scheduling", "系统应先改 prompt、工具、数据、权重还是 evaluator，顺序能否自己学会？", "各层更新通常按人工 pipeline 执行，跨层依赖和代价没有作为 sequential decision problem。", "建立含多层 action、预算和回滚的环境，学习 update scheduler；与固定顺序、greedy 和 oracle compare。", "需在未见任务降低总改进成本且保持完整性；若收益来自更多尝试，不成立。", "S19·S26·S28·S32", "需要 P051/P056 基础数据"),
    I("P060", "跨层更新对象", "方法", "B", "XL", 5, "Distilling an Evolved Scaffold into Model Weights", "昂贵的多智能体/工具工作流能否内化进单模型而不丢失可演化性？", "已有 inference-to-training/self-improvement，但很少同时测蒸馏后的任务能力和继续产生后代的能力。", "从 evolved scaffold 采集决策/验证轨迹，蒸馏到模型；比较性能、成本、OOD 和再次 scaffold evolution。", "蒸馏模型要保留主要能力并在新一轮演化中不比原基座更僵化。", "S8·S25·S32·S35", "连接模型与框架的高价值论文"),

    I("P061", "动力学、理论、规模与经济性", "测量", "B", "XL", 4, "RSI Scaling Laws：反馈、候选、代数与模型规模", "改进收益如何随模型能力、反馈查询、分支数和代数缩放？", "现有工作用少数固定预算报告曲线，尚缺能外推和区分一次搜索/递归收益的经验定律。", "多保真 factorial sweep，覆盖 3+ 模型规模、候选与代数；拟合 saturation/interaction law，并用未见预算验证。", "定律必须有预注册外推精度和不确定性；海量跑分后拟合漂亮曲线不够。", "S1·S16·S20·S36", "高计算但基础价值大"),
    I("P062", "动力学、理论、规模与经济性", "方法", "A", "L", 4, "Compute-Optimal RSI：预算给生成、评估还是代数", "固定总成本下，候选广度、谱系深度、evaluator 强度和复跑应怎样分配？", "现有方法预算口径不同，缺少统一 cost-aware optimizer。", "以实际 token/GPU/wall-clock 为预算，构建 allocation policy；跨静态与动态任务比较 fixed grid、bandit 和 learned allocator。", "必须改善 anytime Pareto frontier 并跨价格/模型变化稳健；只做成本表不够。", "S1·S16·S36", "近期实用方法论文"),
    I("P063", "动力学、理论、规模与经济性", "测量", "B", "L", 3, "Improvement Half-Life：一次演化增益能保持多久", "在任务、工具、模型和 evaluator 更新后，改进 artifact 的收益如何衰减？", "迁移通常一次性评测，没有时间维度和维护成本。", "建立版本化环境与时间推进器，对 prompt/tool/code/memory 分别测衰减、失效原因和 refresh cost。", "需得到可预测的半衰期模型或维护策略；只把 OOD 换名为时间漂移不够。", "S9·S28·S30", "动态环境论文"),
    I("P064", "动力学、理论、规模与经济性", "方法", "A", "M", 3, "Plateau Diagnosis：什么时候该继续搜、换目标或重启", "分数平台期是候选生成不足、evaluator 饱和、结构受限还是能力上限？", "停止规则多为固定代数，无法区分可突破和不可突破平台。", "合成四类已知平台机制，训练/设计在线诊断器；在真实谱系触发 deepen、diversify、change-evaluator 或 restart。", "诊断驱动策略需在相同预算降低 regret；纯事后分类不够。", "S1·S16·S36", "近期高性价比"),
    I("P065", "动力学、理论、规模与经济性", "理论", "D", "M", 4, "Why Monotonic RSI Is Usually Impossible", "在噪声评估、分布变化和有限样本下，何时不可能保证每代不退化？", "论文常默认选最高分即可单调改进，但选择偏差和 hidden risk 破坏该直觉。", "给出 impossibility/counterexample 与可达的高概率边界；用真实 lineage 验证 regression frequency。", "需要清晰定理、紧界或改变实践的 acceptance rule；仅评论退化会发生不够。", "S16·S18·S40", "理论/negative-results"),
    I("P066", "动力学、理论、规模与经济性", "方法", "B", "L", 4, "Sample-Efficient Metaproductivity Estimation", "无需为每个候选生成大量后代，能否估计其长期后代价值？", "CMP 有意义但昂贵，估计噪声会吞噬选择优势。", "用多保真后代 rollout、survival model、结构/轨迹特征和不确定性校准；在 archive selection 中闭环验证。", "在固定 rollout 预算下需降低后代价值估计误差并提升最终 lineage；离线预测不足。", "S16·S36", "可直接 follow-up HGM"),
    I("P067", "动力学、理论、规模与经济性", "测量", "B", "L", 4, "Evolutionary Debt：今天的提分会不会让明天更难改", "局部 patch、提示堆叠和工具增殖带来的结构债如何影响后代生产力？", "软件技术债概念尚未被严格连接到 agent evolvability 和 lineage outcomes。", "定义复杂度、耦合、脆弱性和 repair cost 指标；制造同分不同债的系统并继续演化。", "债务指标必须预测未来修改失败并支持有效 refactor intervention；代码行数相关性不够。", "S3·S16·S36", "软件工程×RSI 新方向"),
    I("P068", "动力学、理论、规模与经济性", "方法", "B", "L", 4, "Surrogate Models for Agent Evolution without Winner's Curse", "能否跳过昂贵候选又不让性能预测器把搜索锁进错误区域？", "AgentSquare 使用 predictor；多代自适应数据会造成 distribution shift 和 winner's curse。", "比较 calibrated surrogate、active evaluation、conformal abstention 与随机全跑；保留审计集测漏掉的 breakthrough。", "需在同成本下提高最终质量且控制 false-prune rate；只提升预测 R² 不够。", "S27·S36", "可独立优化/ADAS 论文"),
    I("P069", "动力学、理论、规模与经济性", "测量", "A", "M", 3, "Lineage Variance and Reproducibility Standard", "RSI 中 seed、模型非确定性、任务顺序和选择路径各贡献多少方差？", "MAC 已显示大方差，现有 RSI 报告仍可能把同一 lineage 内候选误作独立样本。", "嵌套重复实验分解 variance components，比较 bootstrap unit 与功效；发布最小报告标准和参考代码。", "标准必须改变置信区间/显著性或复现结论；只要求多跑几个 seed 不够。", "S1·S10·S16", "近期测量论文"),
    I("P070", "动力学、理论、规模与经济性", "经济", "A", "M", 3, "When Is Automated Agent Evolution Economically Rational?", "相对人工工程、一次性提示优化和直接换强模型，RSI 在什么条件下回本？", "S36 提出效率担忧，但缺少带维护、失败、审计和迁移价值的生命周期模型。", "记录真实工程工时、API/GPU、调试、审计和后续复用；跨任务频率/价格模拟 break-even frontier。", "需有可迁移成本模型和真实案例验证；单一云价成本表不够。", "S10·S36", "实践价值高，可与 P062 互补"),

    I("P071", "安全、治理与跨代攻击", "安全", "A", "XL", 5, "Proof-Carrying Successors", "每个后继能否携带机器可检查的权限、完整性、资源和恢复证据后才接管？", "Proof-carrying agents 尚未解决多代自修改；跨代攻击研究显示普通同位扫描不足。", "实现不可变 kernel、successor manifest、证明/测试证据和 rollback；运行功能变异、恶意 patch 和长期 lineage。", "需有形式化不变量、攻击覆盖和能力税测量；普通 CI+container 重新命名不够。", "S23·S24", "旗舰安全 Paper 5"),
    I("P072", "安全、治理与跨代攻击", "基准", "A", "L", 4, "Lineage-Persistent Attack Benchmark", "哪些攻击会被写入记忆、工具、代码、评估器或谱系并跨代放大？", "S23 给出攻击面与案例，仍可建立可重放、多框架、可测传播/清除的公共 benchmark。", "25-cell lifecycle matrix 采样攻击，跨 3+ 框架运行 10 代；报告 persistence、amplification、spread 和 recovery。", "必须有自动判定、可控 ground truth 和防护基线；只收集提示注入不够。", "S23·S39", "安全数据集论文"),
    I("P073", "安全、治理与跨代攻击", "系统", "B", "L", 5, "Minimal Immutable Kernel for Maximum Evolvability", "外部可信计算基应固定哪些最少功能，才能既安全又不扼杀框架演化？", "全冻结安全壳稳但限制结构自由；过小 kernel 又无法维护完整性。", "逐项移出/移入权限、hash、grader、budget、rollback、handoff；测 attack survival、合法创新阻断和 kernel complexity。", "需找到可复现 Pareto 前沿或给出必要性论证；凭经验列安全清单不足。", "S21·S23·S24", "与 P071 联动"),
    I("P074", "安全、治理与跨代攻击", "治理", "B", "L", 4, "Permission Evolution with Least-Privilege Proofs", "后继需要新工具/资源时，怎样申请权限而不让权限单调膨胀？", "静态 allowlist 无法支持开放创新，自由权限继承则使攻击跨代累积。", "设计 capability tokens、用途声明、时间界限和可撤销 grant；在动态工具任务中比较静态、自由和证据门控。", "需同时提高任务完成和降低累积权限/攻击成功，且支持自动撤销与审计。", "S23·S24", "可独立系统安全论文"),
    I("P075", "安全、治理与跨代攻击", "测量", "A", "L", 3, "Evolvability Tax：安全门槛到底牺牲多少改进能力", "验证、隔离、权限和多 evaluator 会让 RSI 慢多少、漏掉多少合法后继？", "安全方案常只报攻击阻断，缺少相同预算下的 false reject、search delay 和 long-run capability cost。", "在可控 benign/malicious mutation 混合下比较门禁强度；画 safety—evolvability—cost 三维 frontier。", "必须同时报告 false accept/reject 和后代质量；只报 runtime overhead 不够。", "S23·S24·S39", "P071 的独立测量支线"),
    I("P076", "安全、治理与跨代攻击", "系统", "A", "M", 4, "Rollback Is Not Recovery", "回到旧版本后，污染的记忆、外部状态、凭证和 archive 是否真的恢复？", "版本回滚往往只恢复代码，跨代副作用可能仍驻留在其他状态层。", "对五类状态注入持久副作用，比较 code-only、snapshot、transactional 和 compensating rollback；测残留与恢复时间。", "需证明端到端状态恢复，并覆盖不可逆外部动作的边界；仅 git revert 不成刊。", "S23·S24", "近期 systems/security"),
    I("P077", "安全、治理与跨代攻击", "测量", "B", "M", 3, "How Independent Must an RSI Auditor Be?", "同团队、同模型、同 benchmark 或同基础设施会造成多少审计相关失效？", "外部审计经常被当作二元标签，独立性的维度与边际价值未量化。", "交叉 auditor 人员、模型、任务生成器与执行环境，注入已知漏洞；测发现率、共同盲点和成本。", "需形成可操作独立性等级并预测漏检；意见调查不够。", "S18·S21·S39", "评估治理论文"),
    I("P078", "安全、治理与跨代攻击", "方法", "B", "L", 4, "Lineage Quarantine and Safe Re-entry", "可疑但可能高价值的分支应永久删除、隔离观察还是修复后回归？", "archive selection 缺少类似安全隔离区的机制，过度删除损失探索，放回则传播风险。", "设计风险分数、隔离 rollout、净化和 re-entry protocol；在可追踪 payload 与 benign novelty 混合环境评测。", "需优于 delete-all 和 allow-all 的安全/发现 Pareto；只增加一个标记字段不够。", "S1·S23·S24", "安全 archive 方法"),
    I("P079", "安全、治理与跨代攻击", "方法", "C", "XL", 5, "Red-Team/Defense Co-Evolution without Theater", "攻击者和防御者共同演化会发现真实新威胁，还是互相过拟合一场私有游戏？", "MaMa/AgenticRed 展开自动安全搜索，但需要冻结第三方攻击集和跨模型迁移判断真实进展。", "attack/defense 双 archive，加时间锁 external audit；比较同源、异源、周期重置和 population play。", "防御必须在未见攻击族与真实框架上保持收益，攻击也需有新颖性和可复现性。", "S37·S38·S39", "高风险高回报安全论文"),
    I("P080", "安全、治理与跨代攻击", "治理", "C", "L", 5, "Goal-Mutation Red Lines", "目标自修改中哪些变换可被授权、哪些必须永远由外部主体决定？", "目标漂移讨论多是抽象原则，缺少可执行语义、冲突解决和跨代授权链。", "构建 goal-contract DSL、owner delegation graph 和 adversarial goal mutations；验证 refinement、冲突、撤销和 succession。", "需要机器可检查政策与实证攻击，不把价值选择假装成纯技术定理。", "S21·S23·S24", "可与 P030 合并为治理长文"),

    I("P081", "种群、多智能体与人机系统", "因果", "A", "L", 4, "Single Lineage vs Population RSI", "多分支种群的优势来自多样性、并行 compute，还是更好的祖先保留？", "DGM-style archive 与单链常未在总预算、并行度和历史访问上严格配平。", "等 token/执行/wall-clock 三种配平分别比较 single, beam, archive, population；做 diversity 与 ancestor-retention 中介分析。", "需解释哪种资源产生优势并在动态任务复现；只显示 archive 最终分高不够。", "S1·S16", "近期因果论文"),
    I("P082", "种群、多智能体与人机系统", "测量", "B", "L", 4, "Emergent Role Specialization in Evolving Agent Teams", "没有预设角色时，群体会不会自发形成诊断、修改、评价和记忆 specialist？", "多智能体系统多由人指定角色，自动系统设计中的涌现分工缺少可重复功能 probe。", "从同质 agent 群体启动，允许通信/代码差异演化；用行为干预而非自述识别 specialization 与替代性。", "涌现分工需带来跨任务收益且在扰动后可恢复；角色命名文本不算证据。", "S25·S34", "依赖 P003/P046"),
    I("P083", "种群、多智能体与人机系统", "方法", "B", "L", 4, "Communication Topology Evolution", "谁和谁通信、传什么、何时通信，能否随任务和代际进化？", "多智能体拓扑通常固定；工作流搜索也常把消息语义当节点内部实现。", "开放边、带宽、路由和同步方式，在等 token 下比较 fully-connected、hand-designed 与 evolved topology。", "需同时提高质量/成本并跨 team size 迁移；通过更多消息提分不成立。", "S25·S26·S34", "结构与多智能体交叉"),
    I("P084", "种群、多智能体与人机系统", "方法", "A", "L", 4, "Preventing Diversity Collapse in Agent Populations", "强 selection 下，种群是否快速同质化并丢失未来突破所需策略？", "archive/QD 有相关基础，但 LLM agent 的语义、代码和行为多样性可能严重错位。", "比较文本、代码、结构、行为和后代价值多样性；设计 multi-view novelty selection，在环境切换后测恢复。", "新多样性度量需预测功能覆盖和适应速度，不是表面 embedding 距离。", "S1·S16·S25", "近期 population 方法"),
    I("P085", "种群、多智能体与人机系统", "方法", "B", "L", 4, "Adversarial Peer Review for Successor Selection", "候选后继互相审查能否减少共同盲点，还是形成合谋与保守偏差？", "multi-agent debate 多评答案，少用于跨代 artifact 接管和失败谱系审查。", "候选作为 author/reviewer/rebuttal，外部 hidden audit；改变 reviewer 独立性、匿名性和利益冲突。", "需降低 false acceptance 且不过度拒绝创新；只增加多轮 LLM judge 不够。", "S18·S25·S34", "评估×群体论文"),
    I("P086", "种群、多智能体与人机系统", "测量", "A", "M", 3, "Minimum Human Steering for Open-Ended Improvement", "多少、何种人类输入能显著改变方向，而不是替系统完成研究？", "完全自主与 human-in-loop 常二分，缺少干预频率、信息量和作用阶段的剂量反应。", "在人类只给目标、周期排名、错误类别或修改建议等条件下配平信息量，测长期 gain、novelty 与对齐。", "要识别 steering 的最小充分形式并扣除人类直接劳动；普通用户研究不够。", "S6·S7·S13", "近期人机实验"),
    I("P087", "种群、多智能体与人机系统", "系统", "C", "XL", 5, "Human–AI Co-Evolution without Deskilling", "agent 持续演化时，用户能力会增长、停滞还是被替代和锁定？", "RSI 多只测系统分数，持久个人 agent 对人的学习、控制和依赖影响缺少纵向实验。", "多周任务研究，比较 automation、teaching、joint-reflection；测人类独立能力、校准、控制感和系统增益。", "需有真实纵向因果设计与伦理审查；满意度问卷或短期速度不够。", "S9·S30", "高成本 HCI 方向"),
    I("P088", "种群、多智能体与人机系统", "基准", "B", "XL", 4, "Multi-Model Evolution Ecosystem", "异构模型群体是否产生稳定互补与创新，还是强模型吞并所有角色？", "多智能体 fine-tuning 有多样性，agent evolution 仍常固定同一 backbone。", "组合不同规模/厂商/开源模型，允许角色和预算演化；测生态多样性、成本、迁移和 provider shift。", "需要控制模型本身能力并证明结构性互补；简单 routing benchmark 不够。", "S25·S31·S34", "大规模系统论文"),
    I("P089", "种群、多智能体与人机系统", "治理", "D", "M", 4, "Successor Identity and Accountability", "一个大幅改写自身、合并他者或分叉的 agent，何时仍是同一责任主体？", "工程上已有 lineage/hash，身份、授权、日志归属和责任转移尚未形成可执行模型。", "提出 identity event schema 与 policy，覆盖 fork/merge/distill/rollback；用真实 lineage 和治理案例测试一致性。", "需产生可执行审计/权限结果，而非纯哲学讨论；更适合治理/法律技术交叉。", "S1·S23·S24", "立场+系统原型"),
    I("P090", "种群、多智能体与人机系统", "安全", "B", "L", 4, "Collective Memory Contagion", "错误技能或恶意记忆如何在 agent 群体间复制、变异和形成信息疫情？", "跨代攻击研究多以单 lineage 为主，population/共享 archive 的传播动力学未充分测量。", "在不同通信图、信任规则和 quarantine 下释放可追踪 payload；估计 R0、变异、免疫与能力成本。", "传播指标要对应真实行为影响并产生有效 containment；只统计文本复制不够。", "S23·S28·S34", "群体安全论文"),

    I("P091", "科学与真实世界迁移", "基准", "A", "L", 4, "Verified Algorithm RSI Sandbox", "程序化可验证的算法发现能否作为全框架 RSI 的最小科学试验场？", "AlphaEvolve 展示算法发现，但缺少按角色可干预、按 lineage 评估 evolvability 的 benchmark。", "选择排序、图、组合优化等多族，提供隐藏生成器和形式/性能 verifier；比较 fixed search 与全框架 evolution。", "必须测后代生产力与结构迁移，不只重复发现一个更快程序。", "S2·S11·S33", "Scientific RSI 的近期落点"),
    I("P092", "科学与真实世界迁移", "系统", "A", "XL", 4, "Longitudinal Self-Improving Software Agent", "面对持续变化的同一大型代码库，agent 能否跨 issue 学习而不积累技术债？", "SWE-bench 多为独立快照；自改 coding agents 少测数月版本变化、回归和维护。", "构建版本化 repo stream，任务按时间释放；比较无持久、记忆、技能、代码演化，测 hidden regression 与 debt。", "需在未见未来版本提升且不靠测试泄漏；一次性 SWE-bench 提分不够。", "S1·S3·S9·S28", "工程量大但现实价值强"),
    I("P093", "科学与真实世界迁移", "基准", "A", "XL", 5, "Recursive ML Research Benchmark", "agent 能否连续提出、运行和继承 ML 研究改进，而不是只完成一次工程任务？", "RE-Bench/MAC/RSIBench-Data 分别测研发、agent 开发和数据策略，缺少后继接管的统一多代轨迹。", "将小型 ML 环境版本化，开放 hypothesis/code/data/optimizer 的分层权限；hidden evaluator 与 PaperBench-style rubric 独立。", "至少产生跨任务可继承的方法或可靠负结果判断；只跑 AutoML 不够。", "S10·S11·S13·S15", "旗舰应用 benchmark"),
    I("P094", "科学与真实世界迁移", "方法", "B", "XL", 5, "Formal-Theorem RSI：证明器、课程与策略共同演化", "形式验证能否提供低投机、高精度的长期 RSI 环境？", "定理 proving 有 verifier 优势，但课程生成、lemma 库和 prover policy 的多代归因仍未统一。", "开放 lemma memory、curriculum、tactic program 和 selector，保留时间锁定理族；测证明长度、transfer 与后代价值。", "需在未见理论域迁移或发现可复用 lemma/strategy；刷固定题库不够。", "S2·S32", "理论推理高价值方向"),
    I("P095", "科学与真实世界迁移", "系统", "C", "XL", 5, "Embodied RSI under Sim-to-Real Shift", "在模拟器里演化的记忆、技能和控制框架能否安全迁移到物理环境？", "agent evolution 多在纯软件环境，真实传感噪声、动作风险和不可逆状态形成新边界。", "先做多模拟器 domain randomization，再小型机器人受限任务；proof-carrying policy 与 human override。", "必须有真实硬件、独立安全门禁和迁移收益；只在单模拟器提分不够。", "S23·S24·S30", "后期高风险系统"),
    I("P096", "科学与真实世界迁移", "基准", "A", "L", 4, "Continual Desktop/Web Agent Evolution", "面对 UI、网站和 API 持续变化，agent 能否从历史任务中演化出可维护工作流？", "桌面/web benchmark 多用静态任务；经验 agent 研究尚少对真实版本漂移与污染做长期评测。", "版本化 app/website stream，隐藏未来 UI；比较 memory、tool repair、workflow evolution 与完整重置。", "需在未来版本迁移且不缓存答案/选择器；同时报告安全和外部动作错误。", "S9·S28·S30", "近期可构建 benchmark"),
    I("P097", "科学与真实世界迁移", "系统", "C", "XL", 5, "Hypothesis→Experiment→Replication：Scientific RSI 完整闭环", "系统能否自己选择问题、设计实验、产生后继研究系统，并形成外部可复现发现？", "AI Scientist/AlphaEvolve 等覆盖部分环节；全框架 evolvability 与独立 replication 仍是最强缺口。", "从可程序验证问题起步，逐步进入小型 ML/实验科学；预注册新颖性、复现、方向选择和负结果标准。", "必须有独立实现/实验复现的非平凡发现，或严谨揭示闭环失败；LLM 写论文不算。", "S2·S6·S13·S15", "Full-Stack 终局 Paper 6"),
    I("P098", "科学与真实世界迁移", "方法", "B", "L", 4, "Replication-First Research Selection", "先奖励可复现性而非新颖分数，能否提高多代科学产出质量？", "自动科学系统容易追逐代理新颖性，复现通常放在末端而非进入 selector。", "比较 novelty-first、score-first、replication-gated 和 multi-objective archive；由独立执行器重跑所有关键结果。", "需要提升后续独立复现率而不把系统变成只做保守微调；单篇复现报告不够。", "S2·S13·S15·S18", "Scientific RSI 的关键方法"),
    I("P099", "科学与真实世界迁移", "测量", "C", "XL", 5, "RSI under Reflexive Social Environments", "当被研究对象会响应 agent 的策略、指标又含价值判断时，改进概念如何成立？", "RSI 证据主要来自固定真值任务，社会系统的反身性、外部性和非平稳 ground truth 基本未进入主流测评。", "从可控 agent-based simulation 到真实小规模平台实验，比较固定/适应/evolving policy；加入多方 utility 与延迟外部性。", "需预注册伦理治理和反事实因果标准；只让 LLM 模拟社会意见不够。", "S6·S21·S23", "高风险跨学科"),
    I("P100", "科学与真实世界迁移", "基准", "C", "XL", 5, "Evolvability Grand Transfer：从代码到科学的统一迁移试验", "一个在代码上学会改进的框架，其 evolvability 能否迁移到算法、桌面、ML 研究和形式推理？", "现有跨域结果多测最终 agent design，而非同一后继改进制度的角色、结构和生产力迁移。", "冻结 2–3 个 source lineages，跨 5 个 target domains 运行统一 role manifest、预算和 hidden audit；报告 transfer matrix 与 failure boundary。", "必须预先冻结 source 系统并在多个目标域显示正迁移或有解释力的系统性失败；重新调每域不算迁移。", "S13·S19·S20·S25", "百篇候选的综合终局；依赖多个基础论文")
  ];

  const catalog = document.getElementById("ideaCatalog");
  if (!catalog) return;

  const clusterSelect = document.getElementById("ideaCluster");
  const prioritySelect = document.getElementById("ideaPriority");
  const scaleSelect = document.getElementById("ideaScale");
  const search = document.getElementById("ideaSearch");
  const countText = document.getElementById("ideaCountText");
  const visibleCount = document.getElementById("visibleIdeaCount");
  const noResults = document.getElementById("ideaNoResults");
  const expandButton = document.getElementById("expandIdeas");
  const priorityACount = document.getElementById("priorityACount");

  const escapeHtml = value => String(value).replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[char]));
  const scaleLabel = { S: "小型", M: "中型", L: "大型", XL: "超大型" };

  clusterInfo.forEach(([name]) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    clusterSelect.appendChild(option);
  });

  const byCluster = new Map(clusterInfo.map(([name]) => [name, []]));
  ideas.forEach(idea => byCluster.get(idea.cluster).push(idea));

  catalog.innerHTML = clusterInfo.map(([name, description], clusterIndex) => {
    const cards = byCluster.get(name).map(idea => `
      <details class="idea-card" data-id="${idea.id}" data-cluster="${escapeHtml(idea.cluster)}" data-priority="${idea.priority}" data-scale="${idea.scale}" data-search="${escapeHtml(Object.values(idea).join(" ").toLowerCase())}">
        <summary>
          <span class="idea-id">${idea.id}</span>
          <span><span class="idea-title">${escapeHtml(idea.title)}</span><span class="idea-question">${escapeHtml(idea.question)}</span><span class="idea-tags"><span class="idea-chip">${escapeHtml(idea.type)}</span><span class="idea-chip">优先级 ${idea.priority}</span><span class="idea-chip">${scaleLabel[idea.scale]}</span><span class="idea-chip">难度 ${idea.difficulty}/5</span></span></span>
        </summary>
        <div class="idea-body">
          <p><strong>文献缺口：</strong>${escapeHtml(idea.gap)}</p>
          <p><strong>最低实验：</strong>${escapeHtml(idea.experiment)}</p>
          <p class="idea-gate"><strong>成刊门槛：</strong>${escapeHtml(idea.gate)}</p>
          <p><strong>证据锚点：</strong>${escapeHtml(idea.anchors)}　·　<strong>关系：</strong>${escapeHtml(idea.relation)}</p>
        </div>
      </details>`).join("");
    return `<section class="idea-cluster" data-cluster-section="${escapeHtml(name)}" id="idea-cluster-${clusterIndex + 1}"><div class="idea-cluster-head"><h3>${String(clusterIndex + 1).padStart(2, "0")} · ${escapeHtml(name)}</h3><p>${escapeHtml(description)}</p></div><div class="idea-list">${cards}</div></section>`;
  }).join("");

  priorityACount.textContent = ideas.filter(idea => idea.priority === "A").length;
  const cards = [...catalog.querySelectorAll(".idea-card")];
  const sections = [...catalog.querySelectorAll(".idea-cluster")];
  let expanded = false;

  const applyFilters = () => {
    const query = search.value.trim().toLowerCase();
    const exactId = /^p\d{3}$/.test(query);
    let count = 0;
    cards.forEach(card => {
      const show = (!query || (exactId ? card.dataset.id.toLowerCase() === query : card.dataset.search.includes(query))) &&
        (clusterSelect.value === "all" || card.dataset.cluster === clusterSelect.value) &&
        (prioritySelect.value === "all" || card.dataset.priority === prioritySelect.value) &&
        (scaleSelect.value === "all" || card.dataset.scale === scaleSelect.value);
      card.classList.toggle("hidden", !show);
      if (show) count += 1;
    });
    sections.forEach(section => {
      section.classList.toggle("hidden", ![...section.querySelectorAll(".idea-card")].some(card => !card.classList.contains("hidden")));
    });
    countText.textContent = `显示 ${count} / ${ideas.length}`;
    visibleCount.textContent = count;
    noResults.classList.toggle("hidden", count !== 0);
  };

  [search, clusterSelect, prioritySelect, scaleSelect].forEach(control => control.addEventListener(control === search ? "input" : "change", applyFilters));
  expandButton.addEventListener("click", () => {
    expanded = !expanded;
    cards.filter(card => !card.classList.contains("hidden")).forEach(card => { card.open = expanded; });
    expandButton.textContent = expanded ? "收起当前结果" : "展开当前结果";
  });

  let printState = [];
  window.addEventListener("beforeprint", () => {
    printState = cards.map(card => card.open);
    cards.forEach(card => { card.open = true; });
  });
  window.addEventListener("afterprint", () => cards.forEach((card, index) => { card.open = printState[index]; }));
})();
