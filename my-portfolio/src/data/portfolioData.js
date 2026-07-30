const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const navigation = [
  { id: "architecture", label: "Architecture" },
  { id: "proof", label: "Proof" },
  { id: "work", label: "AI Systems" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "demos", label: "Evidence" },
  { id: "strengths", label: "AI Stack" },
  { id: "contact", label: "Contact" },
];

export const credibilityItems = [
  "600K+ repositories processed through hierarchical filtering, LLM semantic review, model routing, and capability ranking",
  "Production LLM workflow delivering approximately 30% higher revenue than manual legal-billing tagging",
  "CNN-based voice and sensor intelligence developed for a compact Biocon medical-device workflow",
  "Personal LoRA adapter fine-tuned on a facial dataset to generate the portfolio profile image",
];

export const heroMetrics = [
  {
    value: "600K+",
    label: "repositories ingested, canonicalized, filtered, and routed through an AI technical-intelligence pipeline",
  },
  {
    value: "~30%",
    label: "production revenue lift over the previous manual UTBMS billing-tag workflow",
  },
  {
    value: "Models → Agents → Systems",
    label: "deep learning, transformers, retrieval, multimodal pipelines, orchestration, evaluation, and deployment",
  },
];

export const profile = {
  name: "Anthony Olevester",
  title: "AI/ML, LLM & Research Engineer",
  image: asset("assets/profile/anthony-profile.jpg"),
  alt: "Anthony Olevester profile image generated using a LoRA adapter fine-tuned on his facial dataset.",
  note: "Profile image generated with a LoRA adapter fine-tuned on my own facial dataset.",
};

export const aiHierarchy = [
  {
    index: "01",
    title: "Model layer",
    purpose: "Learn representations, classifications, corrections, or generations from data.",
    technologies: [
      "CNNs and convolutional feature learning",
      "Transformers and large language models",
      "Embedding models and semantic representations",
      "MLP residual correction and ensemble fusion",
      "LoRA / parameter-efficient fine-tuning",
      "JAX and evolutionary search",
    ],
    flow: ["datasets", "features / tokens", "training or adaptation", "model inference"],
  },
  {
    index: "02",
    title: "Intelligence layer",
    purpose: "Ground model outputs in context, rules, evidence, and task-specific structure.",
    technologies: [
      "RAG and context assembly",
      "Vector search with FAISS / pgvector patterns",
      "Structured generation and schema validation",
      "Model routing and confidence-aware fallback",
      "Multimodal OCR, ASR, documents, and sensor fusion",
      "Critique, correction, and grounded evaluation",
    ],
    flow: ["retrieve", "reason", "generate", "validate"],
  },
  {
    index: "03",
    title: "Autonomy layer",
    purpose: "Coordinate specialist models and tools into stateful workflows that can act and recover.",
    technologies: [
      "Manager–worker–tester agent graphs",
      "Tool and function calling",
      "Sandbox execution and test feedback",
      "Memory, state, retries, and reflection",
      "Repair loops and termination criteria",
      "Human-in-the-loop escalation",
    ],
    flow: ["plan", "delegate", "execute", "inspect", "repair"],
  },
  {
    index: "04",
    title: "Systems layer",
    purpose: "Make the intelligence observable, scalable, maintainable, and usable in production.",
    technologies: [
      "Python and FastAPI-style services",
      "SQL, PostgreSQL, vector databases, and metadata",
      "Docker, Linux, GitHub Actions, and modular deployment",
      "Caching, queues, batching, and cost controls",
      "Telemetry, regression tests, and failure slices",
      "APIs, product integration, and edge deployment",
    ],
    flow: ["serve", "observe", "scale", "govern"],
  },
];

export const evidenceCases = [
  {
    title: "Innovation Intelligence Engine",
    status: "VALIDATED SYSTEM",
    domain: "Internet-scale LLM intelligence",
    metric: "600K+ repositories / 48 hours",
    metricLabel: "55+ high-value systems identified after hierarchical filtering and semantic review",
    architecture: [
      "GitHub + PyPI ingestion",
      "canonical repository graph",
      "T0–T4 filtering",
      "cost-aware model routing",
      "LLM semantic evaluation",
      "capability ranking",
    ],
    trace: "Raw repositories are normalized, deduplicated, cheaply triaged, selectively escalated to deeper LLM inspection, then converted into ranked capability intelligence.",
    failure: "The main failure mode was not model accuracy alone: forks, duplicates, popularity bias, repeated inference, and weak definitions of technical value could corrupt the result.",
    output: "A reusable technical-intelligence pipeline rather than a one-off search script.",
    waterfall: [
      { label: "Ingest", value: "600K+" },
      { label: "Early pruning", value: "~60% removed" },
      { label: "Deep review", value: "selected candidates" },
      { label: "Output", value: "55+ systems" },
    ],
    links: [{ label: "GitHub profile", href: "https://github.com/ANTHONY-OLEVESTER" }],
  },
  {
    title: "Autonomous Multi-Agent Code Generation",
    status: "WORKING PROTOTYPE",
    domain: "Agentic AI and orchestration",
    metric: "1 manager · 3 developers · 2 testers",
    metricLabel: "closed-loop planning, execution, critique, testing, and repair",
    architecture: [
      "manager agent",
      "specialist developers",
      "sandbox execution",
      "tester agents",
      "failure analysis",
      "iterative repair",
    ],
    trace: "Requirements become a task graph; agents receive bounded ownership; generated code is executed locally; failures return as structured feedback; repair continues until tests or stop conditions resolve the run.",
    failure: "Compilation was not accepted as success. The pipeline had to handle ownership collisions, non-converging fixes, brittle tests, and generated code that looked plausible but failed during execution.",
    output: "Three autonomously generated functional skills and successful execution of five existing skills.",
    links: [{ label: "Discuss architecture", href: "mailto:olevester.joram123@gmail.com" }],
  },
  {
    title: "UTBMS Billing Intelligence",
    status: "PRODUCTION",
    domain: "Domain-grounded LLM system",
    metric: "~30% higher revenue",
    metricLabel: "relative to the previous manual billing-tag workflow",
    architecture: [
      "legal work logs",
      "LLM extraction",
      "UTBMS rule grounding",
      "schema validation",
      "critique + correction",
      "invoice-ready output",
    ],
    trace: "Noisy narratives are converted into structured candidates, checked against billing rules and schemas, corrected across multiple passes, and audited before downstream use.",
    failure: "A one-pass prompt was financially unsafe: ambiguous descriptions, missing context, and plausible but incorrect classifications required validation and correction layers.",
    output: "Production billing intelligence with a measured business effect, not a demo-only classifier.",
    comparison: [
      { label: "Manual workflow", value: 100 },
      { label: "AI workflow", value: 130 },
    ],
    links: [{ label: "Discuss production system", href: "mailto:olevester.joram123@gmail.com" }],
  },
  {
    title: "Biocon CNN Voice-Sensor Intelligence",
    status: "APPLIED DEEP LEARNING",
    domain: "CNNs, audio/sensor classification, and edge AI",
    metric: "CNN-based signal classification",
    metricLabel: "developed for compact medical-device sensing and dose-event interpretation",
    architecture: [
      "voice / sensor waveform",
      "time-frequency representation",
      "convolutional feature layers",
      "deep classification head",
      "event interpretation",
      "device logic",
    ],
    trace: "Audio or sensor signals are transformed into a representation suitable for convolutional learning, passed through CNN layers for learned feature extraction, then converted into classified events for device-side interpretation.",
    failure: "The system had to distinguish meaningful interaction signatures from noise, spectral variation, limited labelled examples, and compact-device constraints.",
    output: "Deep-learning signal intelligence connected to sensing, embedded logic, and a real medical-device workflow.",
    links: [{ label: "Supporting signal visual", href: asset("assets/biocon/stepcounter-spectrogram.webp") }],
  },
  {
    title: "Deterministic Neural Residual Dynamics",
    status: "PUBLISHED + CODE",
    domain: "Scientific ML and residual learning",
    metric: "0.1196 → 0.0207 physical p95",
    metricLabel: "with bounded 50 / 200 / 500-step rollout evaluation",
    architecture: [
      "paired simulator transitions",
      "alignment gates",
      "state projection",
      "neural residual model",
      "autoregressive rollout",
      "behavioral acceptance",
    ],
    trace: "Deterministically paired transitions define the residual target; invalid alignment blocks training; the learned correction is tested one step at a time and across long repeated rollouts.",
    failure: "The original danger was false learning from mispaired transitions. A low training loss could still represent a broken dataset and unstable long-horizon behavior.",
    output: "A reproducible research package with code, plots, videos, holdouts, contact slices, and explicit claim boundaries.",
    comparison: [
      { label: "Uncorrected", value: 0.1196 },
      { label: "Residual model", value: 0.0207 },
    ],
    links: [
      { label: "Publication", href: "https://zenodo.org/records/19323227" },
      { label: "Repository", href: "https://github.com/ANTHONY-OLEVESTER/Robotics_sim-to-sim_OnePass" },
    ],
  },
  {
    title: "Personal LoRA Identity Adaptation",
    status: "MODEL FINE-TUNING",
    domain: "Generative AI and parameter-efficient adaptation",
    metric: "The profile image is the output",
    metricLabel: "generated using a LoRA adapter trained on a curated facial dataset",
    architecture: [
      "curated face images",
      "caption / identity conditioning",
      "LoRA adapter training",
      "prompted generation",
      "identity inspection",
      "selected portfolio output",
    ],
    trace: "A base generative model is adapted through low-rank updates rather than full-model retraining, allowing identity-specific features to be learned with a compact trainable parameter set.",
    failure: "The practical risks were identity drift, memorization, overfitting to the training poses, and poor generalization across prompts or composition changes.",
    output: "A visible model artifact used directly as the portfolio profile image.",
    links: [{ label: "View generated output", href: asset("assets/profile/anthony-profile.jpg") }],
  },
];

export const flagshipResearch = {
  eyebrow: "Scientific ML / deep residual learning",
  title: "Governing Simulator Discrepancy via Deterministic Pairing and Horizon-Validated Residual Dynamics",
  venue: "Open Zenodo publication + code — March 29, 2026",
  impact:
    "A supervised residual-dynamics learning system combining deterministic paired datasets, neural correction models, feature-alignment gates, rollout evaluation, regime slicing, and reproducible acceptance tests.",
  summary:
    "The project treats simulator mismatch as an end-to-end machine-learning governance problem rather than a single regression task. It controls dataset semantics, transition pairing, state projection, residual targets, training validity, one-step inference, autoregressive rollout stability, contact-regime behavior, and reviewer-facing reproducibility artifacts.",
  contributions: [
    "Built deterministic episode–timestep pairing and hard data-alignment gates to prevent neural models from learning corrupted transition correspondences.",
    "Reduced one-step physical p95 error from 0.1196 to 0.0207 with a learned residual correction layer on the curated hard-mode PASS evaluation.",
    "Validated sequence behavior through teacher-forced and long-horizon 50/200/500-step rollout tests rather than relying on one-step loss alone.",
    "Added holdout-family evaluation, contact-slice metrics, behavioral gates, visual comparison, and canonical reports for reproducible scientific-ML claims.",
  ],
  stats: [
    { label: "One-step physical p95", value: "0.1196 → 0.0207" },
    { label: "Long-horizon rollout p95", value: "0.0173 / 0.0174 / 0.0222" },
    { label: "Contact classification accuracy", value: "0.9911" },
  ],
  links: [
    { label: "Read publication", href: "https://zenodo.org/records/19323227", variant: "primary" },
    {
      label: "Code repository",
      href: "https://github.com/ANTHONY-OLEVESTER/Robotics_sim-to-sim_OnePass",
      variant: "secondary",
    },
    {
      label: "Research project page",
      href: "https://anthony-olevester.github.io/Robotics_sim-to-sim_OnePass/",
      variant: "secondary",
    },
  ],
};

export const researchFigures = [
  {
    title: "Neural residual inference comparison",
    description:
      "Canonical comparison of the uncorrected simulator, reference dynamics, and learned residual-corrected replay used to inspect model behavior beyond scalar metrics.",
    src: asset("assets/sim2sim/triptych-frame.webp"),
    alt: "Residual-learning comparison showing raw, reference, and neural-corrected simulator panels.",
  },
  {
    title: "Sequence rollout error evaluation",
    description:
      "Long-horizon physical-error summary used to test whether the learned correction remains bounded under repeated autoregressive application.",
    src: asset("assets/sim2sim/rollout-phys-p95.webp"),
    alt: "Long-horizon physical error plot for the residual dynamics model.",
  },
  {
    title: "Latent behavior expressed as trajectory correction",
    description:
      "End-effector trajectory overlay showing whether residual inference moves the source simulator toward the reference task-space distribution.",
    src: asset("assets/sim2sim/ee-traj-xy.webp"),
    alt: "Trajectory overlay for raw, reference, and machine-learning corrected paths.",
  },
];

export const demoVideos = [
  {
    title: "Innovation Intelligence Engine",
    tag: "LLM orchestration / internet-scale AI",
    description:
      "A multi-stage intelligence system for ingesting, canonicalizing, filtering, semantically evaluating, and ranking technical capability across massive software ecosystems.",
    details: [
      "Processed more than 600,000 repositories in 48 hours using tiered T0–T4 filtering and cost-aware model routing.",
      "Combined metadata heuristics, repository normalization, cheap-model triage, deeper LLM review, and downstream capability mapping.",
      "Identified 55+ high-value systems while suppressing forks, duplicates, popularity bias, and repeated inference cost.",
    ],
    imageSrc: asset("assets/software/innovation-intelligence.svg"),
    href: "https://github.com/ANTHONY-OLEVESTER",
    ctaLabel: "Explore GitHub",
    featured: true,
  },
  {
    title: "Autonomous AI Code Generation Pipeline",
    tag: "Agentic AI / multi-layer orchestration",
    description:
      "A stateful manager–developer–tester architecture in which LLM agents plan, generate, execute, inspect failures, critique outputs, and iteratively repair software.",
    details: [
      "One manager agent coordinated three developer agents and two tester agents with explicit ownership boundaries.",
      "Used local tool execution, sandboxed code runs, test feedback, retry policies, and generate → execute → critique → refine loops.",
      "Demonstrated autonomous creation of three functional skills and execution of five existing skills rather than chat-only code generation.",
    ],
    imageSrc: asset("assets/software/autonomous-code.svg"),
    href: "https://github.com/ANTHONY-OLEVESTER",
    ctaLabel: "Explore AI repositories",
  },
  {
    title: "Biocon CNN Voice-Sensor Intelligence",
    tag: "Deep learning / CNN / edge AI",
    description:
      "A voice and sensor intelligence workflow using convolutional neural-network layers to learn signal features for compact medical-device event interpretation.",
    details: [
      "Converted signal behavior into a time-frequency representation suitable for convolutional learning.",
      "Used CNN feature layers and a classification stage rather than relying only on hand-built thresholds.",
      "Connected deep-learning inference to embedded sensing, device logic, and real physical constraints.",
    ],
    imageSrc: asset("assets/biocon/stepcounter-spectrogram.webp"),
    href: asset("assets/biocon/stepcounter-spectrogram.webp"),
    ctaLabel: "Open signal visual",
  },
  {
    title: "Personal LoRA Identity Adaptation",
    tag: "Generative AI / fine-tuning",
    description:
      "The portfolio profile image is a generated artifact from a LoRA adapter fine-tuned on a curated dataset of my face.",
    details: [
      "Used parameter-efficient adaptation instead of retraining the full base model.",
      "The pipeline covered dataset preparation, identity conditioning, adapter training, prompted generation, and visual selection.",
      "Identity drift and overfitting were treated as model-quality risks rather than assuming every generated image was acceptable.",
    ],
    imageSrc: asset("assets/profile/anthony-profile.jpg"),
    href: asset("assets/profile/anthony-profile.jpg"),
    ctaLabel: "View generated output",
  },
  {
    title: "Universal Curvature–Information Principle",
    tag: "Scientific computing / numerical ML research",
    description:
      "An open implementation, dataset, and numerical-validation package studying flatness and D⁻¹ concentration under structured 2-designs.",
    details: [
      "Separates theoretical claims, executable numerical experiments, datasets, and reproducibility artifacts.",
      "Demonstrates a research workflow spanning hypothesis formation, computational testing, statistical inspection, and open publication.",
    ],
    imageSrc: asset("assets/software/curvature-information.svg"),
    href: "https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Anthony%2C%20Olevester%22",
    ctaLabel: "Open Zenodo records",
  },
  {
    title: "Residual Dynamics Rollout Demonstration",
    tag: "Deep learning / sequence validation",
    description:
      "Reviewer-facing video evidence for a learned residual model correcting simulator dynamics across repeated rollout horizons.",
    details: [
      "Behavioral gates covered motion, cross-domain agreement, correction visibility, rollout improvement, and contact-rich regimes.",
      "The video makes learned correction behavior inspectable instead of hiding the result inside aggregate tables.",
    ],
    videoSrc: asset("assets/sim2sim/compare-triptych.mp4"),
    poster: asset("assets/sim2sim/triptych-frame.webp"),
    href: "https://zenodo.org/records/19323227",
    ctaLabel: "Open research record",
  },
];

export const experienceItems = [
  {
    company: "Rapture Twelve Pvt. Ltd.",
    role: "Lead Research Engineer — AI Systems, LLMs & Orchestration",
    period: "2025 — Present",
    summary:
      "Architected production-shaped AI systems across transformer/LLM applications, autonomous agents, technical-intelligence pipelines, retrieval, structured generation, evaluation, and decision automation.",
    highlights: [
      "Built the Innovation Intelligence Engine with ingestion, canonical graph construction, semantic filtering, LLM model routing, cost-aware inference, ranking, and capability extraction across 600K+ repositories.",
      "Developed multi-layer agentic orchestration using manager, specialist, developer, tester, execution, critique, and repair loops with explicit state and failure handling.",
      "Delivered a production UTBMS billing-intelligence pipeline using LLM extraction, domain-rule grounding, schema validation, iterative correction, and output auditing, yielding approximately 30% higher revenue than manual tagging.",
    ],
  },
  {
    company: "Independent / Freelance",
    role: "AI/ML Systems Engineer — Multimodal, RAG & Automation",
    period: "2024 — 2025",
    summary:
      "Delivered end-to-end AI pipelines involving OCR, automatic speech recognition, document parsing, embeddings, vector retrieval, LLM reasoning, structured outputs, APIs, and human-in-the-loop validation.",
    highlights: [
      "Built multimodal workflows using OCR, WhisperX-style ASR, text normalization, chunking, metadata enrichment, and structured database ingestion.",
      "Implemented retrieval-augmented generation patterns with embedding models, FAISS/pgvector-style vector search, context assembly, prompt templates, and answer-grounding checks.",
      "Wrapped AI capabilities in modular Python services, FastAPI-style interfaces, persistent storage, validation layers, logging, retries, and maintainable production-oriented code paths.",
    ],
  },
  {
    company: "Biocon — Scientist",
    role: "Deep Learning, Edge AI, Signal Intelligence & Embedded Systems",
    period: "2022 — 2024",
    summary:
      "Worked on compact medical-device intelligence where CNN-based signal learning, sensor inputs, embedded logic, edge inference, control, safety, power, latency, and physical reliability had to coexist.",
    highlights: [
      "Developed a voice and sensor intelligence workflow using time-frequency signal representations, convolutional neural-network layers, learned feature extraction, and event classification.",
      "Connected deep-learning classification to dose-event interpretation, step counting, sensing, device logic, PCB constraints, actuator behavior, and closed-loop control.",
      "Earned the Rising Star Award for technical contribution and dependable execution inside a regulated engineering environment.",
    ],
  },
  {
    company: "Independent Research",
    role: "Deep Learning, Scientific ML & Evolutionary Computation",
    period: "Ongoing",
    summary:
      "Researches learning systems where correctness depends on dataset semantics, model architecture, residual structure, sequence stability, rigorous evaluation, and reproducible evidence.",
    highlights: [
      "Published deterministic sim-to-sim residual learning with neural correction, pairing governance, holdouts, regime slices, and long-horizon rollout validation.",
      "Built RNA 3D ensemble-correction experiments combining model coordinates, confidence features, embeddings, and an MLP correction layer for approximately 7% accuracy improvement.",
      "Fine-tuned a personal LoRA adapter on a curated facial dataset and used the generated output as the portfolio profile image.",
    ],
  },
];

export const selectedWork = [
  {
    title: "Innovation Intelligence Engine",
    category: "LLM systems / internet-scale technical intelligence",
    description:
      "An AI-native discovery engine combining large-scale ingestion, repository canonicalization, hierarchical filtering, cost-aware LLM routing, technical summarization, capability extraction, and ranked intelligence outputs.",
    image: asset("assets/software/innovation-intelligence.svg"),
    tags: ["600K+ repositories", "LLM semantic triage", "Model routing", "Embeddings", "55+ systems"],
  },
  {
    title: "Autonomous Multi-Agent Code Generation",
    category: "Agentic AI / multi-layer LLM orchestration",
    description:
      "A stateful orchestration fabric in which manager, developer, tester, execution, critique, and repair agents collaborate through tool calls, sandbox runs, test feedback, retries, and convergence criteria.",
    image: asset("assets/software/autonomous-code.svg"),
    tags: ["LLM agents", "Stateful orchestration", "Tool use", "Sandbox execution", "Self-correction"],
  },
  {
    title: "UTBMS Transformer Billing Intelligence",
    category: "Production LLM / domain-grounded structured generation",
    description:
      "A multi-pass LLM extraction and classification pipeline using domain rules, structured schemas, validation, critique, confidence checks, and correction loops to convert legal narratives into invoice-ready intelligence.",
    image: asset("assets/software/legal-billing.svg"),
    tags: ["Transformers", "Structured outputs", "Domain grounding", "Evaluation", "~30% lift"],
  },
  {
    title: "Biocon CNN Voice-Sensor Intelligence",
    category: "Deep learning / CNN / edge AI",
    description:
      "A convolutional deep-learning pipeline for learning signal features from voice or sensor representations and converting them into device-relevant classified events.",
    image: asset("assets/biocon/stepcounter-spectrogram.webp"),
    tags: ["CNN layers", "Time-frequency features", "Signal classification", "Edge AI", "Medical devices"],
  },
  {
    title: "Personal LoRA Identity Adaptation",
    category: "Generative AI / parameter-efficient fine-tuning",
    description:
      "A LoRA adapter trained on a curated facial dataset to adapt a generative base model toward my identity; the selected output is used as the portfolio profile image.",
    image: asset("assets/profile/anthony-profile.jpg"),
    tags: ["LoRA", "Fine-tuning", "Generative AI", "Identity adaptation", "Visible output"],
  },
  {
    title: "Multimodal Document & Speech Intelligence",
    category: "OCR + ASR + embeddings + RAG",
    description:
      "A multimodal ingestion architecture for converting images, scanned documents, audio, and conversational data into normalized text, semantic chunks, vector representations, structured records, and retrieval-ready knowledge.",
    image: asset("assets/software/curvature-information.svg"),
    tags: ["OCR", "WhisperX", "Embeddings", "FAISS / pgvector", "RAG"],
  },
  {
    title: "Deterministic Neural Residual Dynamics",
    category: "Scientific ML / deep residual learning",
    description:
      "A supervised residual-model pipeline with deterministic dataset pairing, state projection, neural correction targets, one-step metrics, autoregressive rollout tests, holdouts, contact slices, and behavioral acceptance gates.",
    image: asset("assets/sim2sim/rollout-phys-p95.webp"),
    tags: ["Deep learning", "Residual models", "Sequence rollout", "PyBullet / MuJoCo", "Governed evaluation"],
  },
  {
    title: "Evolutionary Logic Search",
    category: "JAX / evolutionary computation / program synthesis",
    description:
      "A population-based search engine using mutation, crossover, elitism, vectorized fitness evaluation, and behavioral objectives to synthesize digital multiplication circuits across a combinatorial search space.",
    image: asset("assets/software/evolutionary-circuits.svg"),
    tags: ["JAX", "10K population", "300 generations", "Program synthesis", "100% final behavior"],
  },
];

export const strengths = [
  {
    title: "Model development and adaptation",
    description:
      "CNNs, supervised learning, transformer applications, embeddings, MLP correction layers, LoRA fine-tuning, ensemble fusion, JAX experimentation, and generative-model adaptation.",
  },
  {
    title: "Multi-layer agentic orchestration",
    description:
      "Stateful manager–worker graphs with specialist agents, delegated ownership, memory, tool execution, testing, reflection, repair loops, and measurable termination conditions.",
  },
  {
    title: "Retrieval-augmented generation and vector intelligence",
    description:
      "Document chunking, metadata design, embedding models, semantic search, FAISS/pgvector-style vector stores, context assembly, reranking concepts, and grounded-answer evaluation.",
  },
  {
    title: "Multimodal AI and information extraction",
    description:
      "OCR, ASR, image/document parsing, speech alignment, time-frequency signal representations, entity extraction, multimodal data fusion, and LLM-based structured transformation.",
  },
  {
    title: "Scientific machine learning",
    description:
      "Residual dynamics, paired datasets, sequence rollout analysis, holdouts, regime-specific evaluation, ensemble correction, numerical validation, and reproducible research artifacts.",
  },
  {
    title: "AI evaluation, observability, and reliability",
    description:
      "Golden datasets, schema checks, regression tests, confidence thresholds, long-horizon tests, failure slices, logging, traces, reproducibility, and explicit claim boundaries.",
  },
  {
    title: "AI infrastructure and production integration",
    description:
      "Python services, FastAPI-style APIs, SQL/PostgreSQL, vector databases, Docker, Linux, GitHub Actions, caching, queues, telemetry, cost controls, and modular deployment.",
  },
  {
    title: "Edge AI and physical intelligence",
    description:
      "CNN signal classification, sensor fusion, computer vision, embedded inference, control logic, simulation, and actuator constraints when intelligence interacts with the physical world.",
  },
];

export const award = {
  title: "Rising Star Award — Biocon",
  body:
    "Recognition for technical contribution and dependable execution in a high-accountability engineering environment. It supports the AI profile by demonstrating ownership under real product, safety, and implementation constraints.",
  notes: [
    "Evidence of trusted engineering execution spanning deep-learning signal intelligence, sensing, embedded systems, and medical-device behavior.",
    "Connected CNN-based interpretation, edge constraints, control logic, and system-level technical ownership.",
  ],
  images: [
    {
      title: "Biocon Rising Star Award",
      src: asset("assets/awards/biocon-rising-star-1.webp"),
      alt: "Anthony Olevester receiving the Biocon Rising Star Award.",
    },
    {
      title: "Biocon Rising Star Award certificate",
      src: asset("assets/awards/biocon-rising-star-2.webp"),
      alt: "Biocon Rising Star Award recognition image.",
    },
  ],
};

export const about = {
  intro:
    "I architect AI systems across models, retrieval, agents, multimodal data, evaluation, infrastructure, and deployment.",
  paragraphs: [
    "My work covers the complete intelligence path: dataset construction, signal and document preprocessing, CNN or transformer inference, embeddings, vector retrieval, context assembly, model routing, agent graphs, tool execution, validation, correction, APIs, databases, observability, and production integration.",
    "The recurring problem is heavy ambiguity. I convert incomplete requirements into measurable system boundaries, build instrumented prototypes, expose architecture and traces, attack failure modes with evaluation harnesses, and distinguish a convincing demo from a defensible AI result.",
  ],
  location:
    "Priority roles: AI/ML Engineer, LLM Engineer, Agentic AI Engineer, Applied Scientist, Multimodal AI Engineer, AI Research Engineer, or AI Systems Architect — Hyderabad, Bengaluru, or remote.",
};

export const contact = {
  email: "olevester.joram123@gmail.com",
  linkedin: "https://www.linkedin.com/in/anthony-olevester",
  github: "https://github.com/ANTHONY-OLEVESTER",
  resume: asset("assets/anthony-olevester-resume.pdf"),
};
