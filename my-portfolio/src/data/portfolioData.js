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
  "Production UTBMS LLM system delivering approximately 30% higher revenue than manual legal-billing tagging",
  "600K+ repositories processed through hierarchical filtering, LLM semantic review, model routing, and capability ranking",
  "Production Smart Bridge pipeline combining OCR, speech-to-text, parsing, structured evidence, and retrieval across 10+ chat datasets",
  "Scientific ML across RNA ensemble correction, residual dynamics, evolutionary search, and galaxy residual modelling",
];

export const heroMetrics = [
  {
    value: "~30%",
    label: "production revenue lift from the UTBMS extract → validate → correct billing-intelligence workflow",
  },
  {
    value: "600K+",
    label: "repositories ingested, canonicalized, filtered, and routed through an AI technical-intelligence pipeline",
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
      "PyTorch, JAX, and evolutionary search",
    ],
    flow: ["datasets", "features / tokens", "training or adaptation", "model inference"],
  },
  {
    index: "02",
    title: "Intelligence layer",
    purpose: "Ground model outputs in context, rules, evidence, and task-specific structure.",
    technologies: [
      "RAG and context assembly",
      "FAISS / pgvector semantic retrieval",
      "Structured generation and schema validation",
      "Model routing and confidence-aware fallback",
      "PaddleOCR, WhisperX, documents, audio, and sensor fusion",
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
      "SQL, PostgreSQL, pgvector, and metadata",
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
    title: "UTBMS Legal Billing Intelligence",
    status: "PRODUCTION",
    domain: "Domain-grounded LLM extraction and correction",
    metric: "~30% higher revenue",
    metricLabel: "relative to the previous manual billing-tag workflow",
    architecture: [
      "legal work logs",
      "LLM activity extraction",
      "candidate billing codes",
      "validation",
      "iterative correction",
      "invoice-ready output",
    ],
    trace:
      "Unstructured legal narratives are parsed into candidate activities and billing codes, checked through an extract → validate → correct loop, and converted into structured records for invoice generation.",
    failure:
      "A one-pass model response was not accepted as reliable. Ambiguous descriptions, missing context, mixed activities, and plausible-but-wrong code assignments required repeated validation and correction before downstream use.",
    output:
      "A production billing-intelligence pipeline with a measured business result. Exact client records, processed volume, evaluation period, and acceptance-rate details are not publicly disclosed.",
    waterfall: [
      { label: "Input", value: "noisy work logs" },
      { label: "Extraction", value: "activities + code candidates" },
      { label: "Validation", value: "rule and structure checks" },
      { label: "Correction", value: "iterative refinement" },
      { label: "Output", value: "invoice-ready records" },
    ],
    comparison: [
      { label: "Manual workflow", value: 100 },
      { label: "AI workflow", value: 130 },
    ],
    links: [{ label: "Discuss the production architecture", href: "mailto:olevester.joram123@gmail.com" }],
  },
  {
    title: "Smart Bridge — WhatsApp Intelligence",
    status: "PRODUCTION",
    domain: "Multimodal OCR, STT, parsing, and retrieval",
    metric: "10+ chat datasets",
    metricLabel: "processed into case-level structured evidence for legal-analysis workflows",
    architecture: [
      "WhatsApp exports",
      "OCR for images",
      "STT for audio",
      "message parsing",
      "structured evidence",
      "RAG-like retrieval",
    ],
    trace:
      "Chat text, screenshots, documents, and voice notes are converted into normalized records, linked to chronology and case context, then exposed through retrieval for evidence-oriented legal analysis.",
    failure:
      "The difficult part was cross-modal consistency: noisy OCR and transcription, duplicated messages, fragmented chronology, missing context, and evidence spread across text, images, and audio.",
    output:
      "A deployed system for converting conversational data into searchable, case-level evidence structures rather than leaving analysis inside raw chat exports.",
    links: [{ label: "Discuss the multimodal workflow", href: "mailto:olevester.joram123@gmail.com" }],
  },
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
    trace:
      "Raw repositories are normalized, deduplicated, cheaply triaged, selectively escalated to deeper LLM inspection, then converted into ranked capability intelligence.",
    failure:
      "The main failure mode was not model accuracy alone: forks, duplicates, popularity bias, repeated inference, and weak definitions of technical value could corrupt the result.",
    output: "A reusable technical-intelligence pipeline rather than a one-off search script.",
    waterfall: [
      { label: "Ingest", value: "600K+" },
      { label: "Early pruning", value: "~60% removed" },
      { label: "AI filtering", value: "~39% selected" },
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
    trace:
      "Requirements become a task graph; agents receive bounded ownership; generated code is executed locally; failures return as structured feedback; repair continues until tests or stop conditions resolve the run.",
    failure:
      "Compilation was not accepted as success. The pipeline had to handle ownership collisions, non-converging fixes, brittle tests, and generated code that looked plausible but failed during execution.",
    output: "Three autonomously generated functional skills and successful execution of five existing skills.",
    links: [{ label: "Discuss architecture", href: "mailto:olevester.joram123@gmail.com" }],
  },
  {
    title: "RNA 3D Ensemble Correction",
    status: "EXPERIMENTAL SCIENTIFIC ML",
    domain: "Multi-model fusion and neural correction",
    metric: "~7% accuracy improvement",
    metricLabel: "across ensemble structure predictions after the learned correction layer",
    architecture: [
      "multiple model predictions",
      "3D coordinates",
      "confidence features",
      "embeddings",
      "MLP correction layer",
      "refined ensemble",
    ],
    trace:
      "Coordinates, confidence signals, and learned representations from multiple predictors are fused, passed through an ML correction layer, and evaluated against the uncorrected ensemble.",
    failure:
      "Strong individual models did not automatically form a stronger ensemble. Cross-model interference and incompatible confidence behaviour affected training stability and correction quality.",
    output:
      "A scientific-ML experiment showing measurable ensemble improvement while explicitly identifying interference as a limiting factor.",
    comparison: [
      { label: "Uncorrected ensemble", value: 100 },
      { label: "Corrected ensemble", value: 107 },
    ],
    links: [{ label: "Discuss the correction model", href: "mailto:olevester.joram123@gmail.com" }],
  },
  {
    title: "Evolutionary Logic Circuits",
    status: "EXPERIMENTAL COMPUTATION",
    domain: "JAX, evolutionary search, and program synthesis",
    metric: "10,000 circuits × 300 generations",
    metricLabel: "100% final behavioural accuracy for the reported 16×16-bit multiplication run",
    architecture: [
      "circuit population",
      "mutation + crossover",
      "vectorized fitness",
      "elitism",
      "selection",
      "final genome",
    ],
    trace:
      "Candidate digital circuits are evolved as a population, evaluated against multiplication behaviour, selectively retained, recombined, and mutated across generations using JAX-oriented computation.",
    failure:
      "Behavioural accuracy was solved in the reported run, but compactness was not: the final genome exceeded 1,800 bits, exposing a trade-off between correctness and architecture efficiency.",
    output:
      "A working evolutionary program-synthesis result with both the successful behaviour and the unresolved genome-size limitation stated openly.",
    waterfall: [
      { label: "Population", value: "10,000 circuits" },
      { label: "Evolution", value: "300 generations" },
      { label: "Behaviour", value: "100% accuracy" },
      { label: "Constraint", value: ">1,800-bit genome" },
    ],
    links: [{ label: "Discuss the EvoJAX experiment", href: "mailto:olevester.joram123@gmail.com" }],
  },
  {
    title: "CIP Dark-Matter Residual Pipeline",
    status: "SCIENTIFIC ANALYSIS",
    domain: "Astrophysical data and residual modelling",
    metric: "~175 SPARC galaxies",
    metricLabel: "analysed for residual structure and HSB → LSB transfer behaviour",
    architecture: [
      "SPARC dataset",
      "galaxy preprocessing",
      "residual model",
      "HSB / LSB slicing",
      "transfer analysis",
      "structure inspection",
    ],
    trace:
      "Galaxy observations are converted into residual representations, separated by surface-brightness regimes, and tested for non-random structure and cross-regime transfer.",
    failure:
      "Transfer was partial rather than universal. The analysis therefore supports structured residual behaviour without claiming a complete dark-matter model or a solved physical theory.",
    output:
      "Evidence of non-random residual structure and partial HSB-to-LSB transfer behaviour across the analysed SPARC sample.",
    links: [{ label: "Discuss the scientific pipeline", href: "mailto:olevester.joram123@gmail.com" }],
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
    trace:
      "Audio or sensor signals are transformed into a representation suitable for convolutional learning, passed through CNN layers for learned feature extraction, then converted into classified events for device-side interpretation.",
    failure:
      "The system had to distinguish meaningful interaction signatures from noise, spectral variation, limited labelled examples, and compact-device constraints.",
    output:
      "Deep-learning signal intelligence connected to sensing, embedded logic, and a real medical-device workflow.",
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
    trace:
      "Deterministically paired transitions define the residual target; invalid alignment blocks training; the learned correction is tested one step at a time and across long repeated rollouts.",
    failure:
      "The original danger was false learning from mispaired transitions. A low training loss could still represent a broken dataset and unstable long-horizon behavior.",
    output:
      "A reproducible research package with code, plots, videos, holdouts, contact slices, and explicit claim boundaries.",
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
    trace:
      "A base generative model is adapted through low-rank updates rather than full-model retraining, allowing identity-specific features to be learned with a compact trainable parameter set.",
    failure:
      "The practical risks were identity drift, memorization, overfitting to the training poses, and poor generalization across prompts or composition changes.",
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
    title: "UTBMS Legal Billing Intelligence",
    tag: "Production LLM / iterative correction",
    description:
      "A production extract → validate → correct workflow mapping unstructured legal work logs into billing-code and invoice-ready structures.",
    details: [
      "Used an iterative validation loop rather than accepting one-pass LLM classifications.",
      "Converted noisy legal narratives into structured billing intelligence with a measured approximately 30% revenue lift over manual tagging.",
      "Client records, dataset volume, and evaluation-period details remain private.",
    ],
    imageSrc: asset("assets/software/legal-billing.svg"),
    href: "mailto:olevester.joram123@gmail.com",
    ctaLabel: "Discuss the architecture",
    featured: true,
  },
  {
    title: "Smart Bridge — WhatsApp Intelligence",
    tag: "Production multimodal AI / RAG-like retrieval",
    description:
      "A deployed legal-analysis pipeline combining OCR, speech-to-text, message parsing, structured evidence, and retrieval across conversational datasets.",
    details: [
      "Processed more than 10 WhatsApp chat datasets.",
      "Unified chat text, image-derived text, audio transcription, chronology, and case-level evidence structures.",
      "Made raw conversational evidence retrievable for downstream legal-analysis workflows.",
    ],
    imageSrc: asset("assets/software/curvature-information.svg"),
    href: "mailto:olevester.joram123@gmail.com",
    ctaLabel: "Discuss the multimodal workflow",
  },
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
  },
  {
    title: "RNA 3D Ensemble Correction",
    tag: "Scientific ML / multi-model fusion",
    description:
      "A learned correction layer over multiple RNA structure predictors using coordinates, confidence features, embeddings, and MLP-based refinement.",
    details: [
      "Achieved approximately 7% accuracy improvement across corrected ensemble predictions.",
      "Identified cross-model interference as a concrete training-stability limitation.",
    ],
    imageSrc: asset("assets/software/curvature-information.svg"),
    href: "mailto:olevester.joram123@gmail.com",
    ctaLabel: "Discuss the experiment",
  },
  {
    title: "Evolutionary Logic Circuits",
    tag: "JAX / evolutionary program synthesis",
    description:
      "Population-based search for 16×16-bit multiplication circuits using mutation, crossover, elitism, and vectorized fitness evaluation.",
    details: [
      "Evolved populations of 10,000 circuits across 300 generations.",
      "Reached 100% final behavioural accuracy in the reported run.",
      "The final genome exceeded 1,800 bits, leaving compactness as an explicit unsolved constraint.",
    ],
    imageSrc: asset("assets/software/evolutionary-circuits.svg"),
    href: "mailto:olevester.joram123@gmail.com",
    ctaLabel: "Discuss the EvoJAX system",
  },
  {
    title: "CIP Dark-Matter Residual Pipeline",
    tag: "Scientific analysis / residual modelling",
    description:
      "A SPARC-galaxy analysis pipeline examining residual structure and partial transfer behaviour between high- and low-surface-brightness regimes.",
    details: [
      "Analysed approximately 175 galaxies.",
      "Observed non-random residual structure and partial HSB → LSB transfer behaviour.",
      "Kept the claim bounded: partial transfer is evidence, not a complete physical theory.",
    ],
    imageSrc: asset("assets/software/curvature-information.svg"),
    href: "mailto:olevester.joram123@gmail.com",
    ctaLabel: "Discuss the analysis",
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
      "Delivered the production UTBMS billing-intelligence pipeline using LLM extraction, iterative validation, correction, and invoice-ready structuring, yielding approximately 30% higher revenue than manual tagging.",
      "Built the Innovation Intelligence Engine with ingestion, canonical graph construction, semantic filtering, LLM model routing, cost-aware inference, ranking, and capability extraction across 600K+ repositories.",
      "Developed multi-layer agentic orchestration using manager, specialist, developer, tester, execution, critique, and repair loops with explicit state and failure handling.",
    ],
  },
  {
    company: "Independent / Freelance",
    role: "AI/ML Systems Engineer — Multimodal, RAG & Automation",
    period: "2024 — 2025",
    summary:
      "Delivered end-to-end AI pipelines involving OCR, automatic speech recognition, document parsing, embeddings, vector retrieval, LLM reasoning, structured outputs, APIs, and human-in-the-loop validation.",
    highlights: [
      "Deployed Smart Bridge across 10+ WhatsApp chat datasets, combining OCR, STT, parsing, structured evidence, and RAG-like retrieval for legal-analysis workflows.",
      "Built multimodal workflows using PaddleOCR, WhisperX, text normalization, chunking, metadata enrichment, and structured database ingestion.",
      "Implemented retrieval patterns with embedding models, FAISS/pgvector, context assembly, grounded outputs, modular Python services, and persistent storage.",
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
      "Built RNA 3D ensemble correction with coordinates, confidence features, embeddings, and an MLP correction layer, achieving approximately 7% improvement while exposing cross-model interference.",
      "Evolved 10,000-circuit populations over 300 generations for 16×16-bit multiplication, reaching 100% behavioural accuracy with a >1,800-bit final genome.",
      "Analysed approximately 175 SPARC galaxies using residual modelling and observed non-random structure with partial HSB → LSB transfer behaviour.",
    ],
  },
];

export const selectedWork = [
  {
    title: "UTBMS Legal Billing Intelligence",
    category: "Production LLM / extract → validate → correct",
    description:
      "A production pipeline mapping unstructured legal work logs into candidate billing codes and invoice-ready records through repeated extraction, validation, and correction rather than one-pass generation.",
    image: asset("assets/software/legal-billing.svg"),
    tags: ["Production LLM", "Structured extraction", "Iterative validation", "Invoice generation", "~30% lift"],
  },
  {
    title: "Smart Bridge — WhatsApp Intelligence",
    category: "Production multimodal AI / legal evidence",
    description:
      "A deployed pipeline converting WhatsApp text, screenshots, documents, and voice notes into normalized case evidence with OCR, STT, parsing, and RAG-like retrieval.",
    image: asset("assets/software/curvature-information.svg"),
    tags: ["10+ datasets", "PaddleOCR", "WhisperX", "Structured evidence", "Retrieval"],
  },
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
    title: "RNA 3D Ensemble Correction",
    category: "Scientific ML / multi-model fusion",
    description:
      "A neural correction layer combining model coordinates, confidence features, and embeddings to refine RNA structure ensembles while analysing cross-model interference.",
    image: asset("assets/software/curvature-information.svg"),
    tags: ["MLP correction", "Embeddings", "Ensemble fusion", "~7% improvement", "Training stability"],
  },
  {
    title: "Evolutionary Logic Circuits",
    category: "JAX / evolutionary computation / program synthesis",
    description:
      "A population-based system using mutation, crossover, elitism, and vectorized fitness to evolve 16×16-bit multiplication circuits across a combinatorial search space.",
    image: asset("assets/software/evolutionary-circuits.svg"),
    tags: ["10K population", "300 generations", "100% behaviour", ">1,800-bit genome", "JAX"],
  },
  {
    title: "CIP Dark-Matter Residual Pipeline",
    category: "Scientific analysis / residual modelling",
    description:
      "A SPARC-galaxy pipeline testing whether residual structure is non-random and whether behaviour partially transfers between high- and low-surface-brightness regimes.",
    image: asset("assets/software/curvature-information.svg"),
    tags: ["~175 galaxies", "SPARC", "Residual analysis", "HSB / LSB", "Partial transfer"],
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
    title: "Deterministic Neural Residual Dynamics",
    category: "Scientific ML / deep residual learning",
    description:
      "A supervised residual-model pipeline with deterministic dataset pairing, state projection, neural correction targets, one-step metrics, autoregressive rollout tests, holdouts, contact slices, and behavioral acceptance gates.",
    image: asset("assets/sim2sim/rollout-phys-p95.webp"),
    tags: ["Deep learning", "Residual models", "Sequence rollout", "PyBullet / MuJoCo", "Governed evaluation"],
  },
];

export const strengths = [
  {
    title: "Model development — PyTorch, JAX, Hugging Face",
    description:
      "CNNs, supervised learning, transformer applications, embeddings, MLP correction layers, LoRA fine-tuning, ensemble fusion, JAX vectorization, and generative-model adaptation.",
  },
  {
    title: "LLM systems — DSPy, Groq, local models",
    description:
      "Structured prompting, schema-constrained outputs, model routing, tool use, iterative critique, correction loops, local LLM deployment, and cost-aware inference.",
  },
  {
    title: "Agentic orchestration",
    description:
      "Stateful manager–worker–tester graphs with delegated ownership, memory, sandbox execution, test feedback, reflection, repair loops, and measurable stop conditions.",
  },
  {
    title: "Retrieval and data — PostgreSQL, pgvector, FAISS",
    description:
      "Document chunking, metadata design, embeddings, semantic search, vector storage, context assembly, retrieval evaluation, structured records, and SQL-backed persistence.",
  },
  {
    title: "Multimodal AI — WhisperX, PaddleOCR",
    description:
      "OCR, ASR, image and document parsing, speech alignment, time-frequency signal representations, chat normalization, multimodal fusion, and evidence extraction.",
  },
  {
    title: "Scientific machine learning",
    description:
      "Residual dynamics, paired datasets, sequence rollout analysis, ensemble correction, evolutionary computation, numerical validation, regime slicing, and reproducible research artifacts.",
  },
  {
    title: "Evaluation and reliability",
    description:
      "Golden datasets, schema checks, regression tests, confidence thresholds, failure taxonomies, long-horizon tests, holdouts, logging, traces, reproducibility, and explicit claim boundaries.",
  },
  {
    title: "Production infrastructure — Python, Docker, Linux",
    description:
      "FastAPI-style services, PostgreSQL, vector databases, Docker, Linux, GitHub Actions, caching, queues, telemetry, retries, cost controls, and modular deployment.",
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
    "The strongest evidence is in production and research systems: UTBMS billing intelligence, Smart Bridge multimodal evidence processing, internet-scale technical intelligence, RNA ensemble correction, evolutionary program synthesis, residual dynamics, and scientific residual analysis.",
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
