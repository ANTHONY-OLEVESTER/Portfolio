const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const navigation = [
  { id: "work", label: "AI Systems" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "AI Research" },
  { id: "demos", label: "Evidence" },
  { id: "strengths", label: "AI Stack" },
  { id: "award", label: "Recognition" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const credibilityItems = [
  "600K+ repositories processed through LLM-assisted semantic triage, model routing, and technical-intelligence ranking",
  "Production transformer/LLM workflow delivering approximately 30% higher revenue than manual legal-billing tagging",
  "Multi-layer AI orchestration spanning manager, developer, tester, tool-use, execution, critique, and self-correction agents",
  "Multimodal AI pipelines across OCR, ASR, document intelligence, embeddings, retrieval, vector search, and structured extraction",
];

export const heroMetrics = [
  {
    value: "Transformers + LLMs",
    label: "Production application engineering with structured prompting, tool use, retrieval, validation, and correction loops.",
  },
  {
    value: "Multi-Layer AI Orchestration",
    label: "Stateful manager–worker–tester architectures with model routing, sandbox execution, retries, and convergence checks.",
  },
  {
    value: "Multimodal + Scientific ML",
    label: "OCR, speech, documents, sensor signals, residual learning, deep-learning experiments, and numerical validation.",
  },
];

export const profile = {
  name: "Anthony Olevester",
  title: "AI/ML, LLM & Research Engineer",
  image: asset("assets/profile/anthony-profile.jpg"),
  alt: "Anthony Olevester profile photo.",
};

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
      "A multi-stage AI intelligence system for ingesting, canonicalizing, filtering, embedding, semantically evaluating, and ranking technical capability across massive software ecosystems.",
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
    title: "UTBMS Legal Billing Intelligence",
    tag: "Production LLM / structured extraction",
    description:
      "A transformer/LLM pipeline that converts noisy legal work logs into UTBMS classifications and invoice-ready structure through extraction, rule grounding, validation, critique, and correction.",
    details: [
      "Handled inconsistent natural-language descriptions, domain-specific billing semantics, missing context, and financially sensitive classification errors.",
      "Used multi-pass structured generation, schema validation, rule-aware correction, confidence checks, and production comparison against manual tagging.",
      "Produced approximately 30% higher revenue than the previous manual billing-tag workflow.",
    ],
    imageSrc: asset("assets/software/legal-billing.svg"),
    href: "mailto:olevester.joram123@gmail.com",
    ctaLabel: "Discuss the architecture",
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
  {
    title: "Vision-Guided Modular Robotic Arm",
    tag: "Computer vision / embodied-AI application",
    description:
      "A supporting physical-system project using OpenCV-based gesture interpretation, modular electromechanical design, and closed-loop actuator coordination.",
    details: [
      "Kept as evidence that AI and computer-vision logic can be integrated with sensors, microcontrollers, motors, and real physical constraints.",
      "Robotics is presented as one deployment domain for intelligence—not the centre of the portfolio.",
    ],
    embedUrl: "https://www.youtube.com/embed/QQCtvQF9WvE?si=fIGWSTRqElmNX801",
    href: "https://youtu.be/QQCtvQF9WvE?si=fIGWSTRqElmNX801",
    ctaLabel: "Watch supporting demo",
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
      "Built multimodal workflows using PaddleOCR-style document extraction, WhisperX-style ASR, text normalization, chunking, metadata enrichment, and structured database ingestion.",
      "Implemented retrieval-augmented generation patterns with embedding models, FAISS/pgvector-style vector search, context assembly, prompt templates, and answer-grounding checks.",
      "Wrapped AI capabilities in modular Python services, FastAPI-style interfaces, persistent storage, validation layers, logging, retries, and maintainable production-oriented code paths.",
    ],
  },
  {
    company: "Biocon — Scientist",
    role: "Edge AI, Signal Intelligence & Embedded Systems",
    period: "2022 — 2024",
    summary:
      "Worked on compact medical-device intelligence where sensor signals, embedded logic, edge inference, control, safety, power, latency, and physical reliability had to coexist.",
    highlights: [
      "Developed signal-analysis and classification concepts for dose-event interpretation, step counting, sensing, and intelligent injector behavior.",
      "Worked across feature extraction, embedded data acquisition, PCB constraints, actuator logic, sensor fusion, and closed-loop control for edge-device workflows.",
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
      "Used JAX-based evolutionary computation to evolve populations of 10,000 digital circuits across 300 generations, reaching 100% final behavioral accuracy in the reported run.",
    ],
  },
];

export const selectedWork = [
  {
    title: "Innovation Intelligence Engine",
    category: "LLM systems / internet-scale technical intelligence",
    description:
      "An AI-native discovery engine combining large-scale ingestion, repository canonicalization, semantic representations, hierarchical filtering, cost-aware LLM routing, technical summarization, capability extraction, and ranked intelligence outputs.",
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
    title: "Multimodal Document & Speech Intelligence",
    category: "OCR + ASR + embeddings + RAG",
    description:
      "A multimodal ingestion architecture for converting images, scanned documents, audio, and conversational data into normalized text, semantic chunks, vector representations, structured records, and retrieval-ready knowledge.",
    image: asset("assets/software/curvature-information.svg"),
    tags: ["PaddleOCR", "WhisperX", "Embeddings", "FAISS / pgvector", "RAG"],
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
    title: "Evolutionary Neural-Adjacent Logic Search",
    category: "JAX / evolutionary computation / program synthesis",
    description:
      "A population-based search engine using mutation, crossover, elitism, vectorized fitness evaluation, and behavioral objectives to synthesize digital multiplication circuits across a combinatorial search space.",
    image: asset("assets/software/evolutionary-circuits.svg"),
    tags: ["JAX", "10K population", "300 generations", "Program synthesis", "100% final behavior"],
  },
  {
    title: "Vision-Guided Robotic Arm",
    category: "Computer vision / embodied-AI supporting project",
    description:
      "A supporting application of computer vision and intelligent control using OpenCV gesture interpretation, modular joints, microcontroller coordination, stepper-driven motion, and servo gripper actuation.",
    image: asset("assets/final-year-project/assembly-image.webp"),
    tags: ["OpenCV", "Computer vision", "Embedded inference", "Actuation", "Physical AI"],
  },
];

export const strengths = [
  {
    title: "Transformers and LLM application engineering",
    description:
      "Designs production LLM systems with structured prompting, context management, function/tool calling, schema-constrained generation, model routing, retries, guardrails, critique, and output validation.",
  },
  {
    title: "Multi-layer agentic orchestration",
    description:
      "Builds stateful manager–worker architectures with specialist agents, delegated ownership, memory, tool execution, testing, reflection, repair loops, and measurable termination conditions.",
  },
  {
    title: "Retrieval-augmented generation and vector intelligence",
    description:
      "Works across document chunking, metadata design, embedding models, semantic search, FAISS/pgvector-style vector stores, context assembly, reranking concepts, and grounded answer evaluation.",
  },
  {
    title: "Multimodal AI and information extraction",
    description:
      "Combines OCR, ASR, image/document parsing, speech alignment, text normalization, entity extraction, multimodal data fusion, and LLM-based structured transformation.",
  },
  {
    title: "Deep learning and scientific machine learning",
    description:
      "Uses PyTorch/JAX-style experimentation, supervised learning, MLP correction layers, residual dynamics, ensemble learning, sequence rollout analysis, numerical validation, and regime-specific error measurement.",
  },
  {
    title: "AI evaluation, observability, and reliability",
    description:
      "Builds evaluation harnesses with golden datasets, schema checks, regression tests, holdouts, confidence thresholds, long-horizon tests, failure slices, logging, reproducible artifacts, and explicit claim boundaries.",
  },
  {
    title: "AI infrastructure and production integration",
    description:
      "Connects models to Python services, FastAPI-style APIs, SQL/PostgreSQL, vector databases, Docker, Linux, GitHub Actions, caching, queues, telemetry, and maintainable modular architectures.",
  },
  {
    title: "Edge AI and physical-system intelligence",
    description:
      "Applies signal processing, sensor fusion, computer vision, embedded inference, control logic, simulation, and actuator constraints when AI has to interact with the physical world.",
  },
];

export const award = {
  title: "Rising Star Award — Biocon",
  body:
    "Recognition for technical contribution and dependable execution in a high-accountability engineering environment. It supports the broader AI profile by demonstrating ownership under real product, safety, and implementation constraints.",
  notes: [
    "Evidence of trusted engineering execution before the later transition into production AI, LLM systems, and independent machine-learning research.",
    "Connected embedded sensing, signal analysis, edge intelligence, device behavior, and system-level technical ownership.",
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
    "I build full-stack AI systems across machine learning, deep learning, transformers, LLMs, multimodal intelligence, retrieval, autonomous agents, scientific ML, evaluation, and production infrastructure.",
  paragraphs: [
    "My work is not limited to calling a model endpoint. I design the complete intelligence path: data ingestion, cleaning, chunking, labels, embeddings, vector storage, retrieval, prompt and context construction, model routing, multi-agent orchestration, structured generation, tool execution, validation, correction, observability, APIs, databases, and deployment.",
    "The recurring problem is heavy ambiguity. I convert incomplete requirements into measurable system boundaries, build instrumented prototypes, attack failure modes with evaluation harnesses, and distinguish a convincing demo from a defensible AI result. Robotics, embedded systems, and simulation appear as application domains, while the central identity is AI/ML systems engineering and research.",
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
