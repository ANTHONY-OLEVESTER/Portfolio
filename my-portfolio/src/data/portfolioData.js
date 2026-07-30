const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: "Anthony Olevester",
  title: "AI Systems & Research Engineer",
};

export const proofMetrics = [
  { value: "600K+", label: "repositories scanned in 48 hours" },
  { value: "~30%", label: "higher revenue than manual billing-tag workflows" },
  { value: "7×", label: "simulator-alignment error reduction" },
  { value: "10K", label: "circuits evolved across 300 generations" },
];

export const engines = [
  {
    title: "Internet Intelligence Engine",
    description: "Ingest, normalize, rank, and semantically inspect large software and research ecosystems instead of trusting popularity metrics.",
    tags: ["GitHub + PyPI", "Canonical repo graphs", "Tiered model routing"],
  },
  {
    title: "Autonomous Creation Engine",
    description: "Generate, test, critique, and repair software or designs through closed-loop multi-agent execution rather than one-shot prompting.",
    tags: ["Manager / builder / tester", "Sandbox execution", "Self-correction"],
  },
  {
    title: "Residual Learning Engine",
    description: "Treat the first model as incomplete, measure structured error, and learn the correction layer across robotics, biology, and scientific systems.",
    tags: ["Residual dynamics", "Ensemble correction", "Governed validation"],
  },
];

export const caseStudies = [
  {
    title: "Innovation Intelligence Engine",
    status: "VALIDATED SYSTEM",
    domain: "Internet-scale AI",
    summary: "A multi-stage intelligence pipeline for discovering useful technical capability hidden across massive software ecosystems.",
    ambiguity: "The target was not a known repository or category. The system had to define value while searching a noisy, duplicated, popularity-biased landscape.",
    system: "Canonical repository normalization, snapshot analysis, T0–T4 filtering, cheap-model triage, deep semantic review, and downstream capability mapping.",
    validation: "Scanned more than 600,000 repositories in 48 hours; pruned roughly 60% early and passed a narrower set through AI evaluation.",
    result: "Identified 55+ high-value systems while controlling inference cost and duplicate analysis.",
  },
  {
    title: "Autonomous AI Code Generation Pipeline",
    status: "WORKING PROTOTYPE",
    domain: "Agentic engineering",
    summary: "A local multi-agent software pipeline that plans, builds, executes, tests, and iteratively corrects code.",
    ambiguity: "A generated program is not useful merely because it compiles. The unsolved part was coordinating ownership, testing, failure recovery, and convergence.",
    system: "One manager, three developers, two testers, concurrent execution, local tool use, and a generate → test → critique → refine loop.",
    validation: "The system autonomously produced three new functional skills and executed five existing skills locally.",
    result: "Demonstrated closed-loop code synthesis rather than a chat-only coding demo.",
  },
  {
    title: "UTBMS Legal Billing Intelligence",
    status: "PRODUCTION",
    domain: "Applied AI",
    summary: "An LLM-based extraction and correction system that turns unstructured legal work logs into billing codes and invoice-ready structure.",
    ambiguity: "Real logs were inconsistent, context-dependent, and financially sensitive; a single extraction pass was not reliable enough.",
    system: "Structured parsing, rule-aware classification, validation, critique, correction, and repeated confidence checks.",
    validation: "Compared system-generated billing outputs against the prior manual tagging workflow in production use.",
    result: "Produced approximately 30% higher revenue than manual tagging workflows.",
  },
  {
    title: "Deterministic Sim-to-Sim Residual Correction",
    status: "PUBLISHED",
    domain: "Robotics research",
    summary: "A governance-first residual dynamics pipeline for correcting PyBullet toward MuJoCo under contact-rich long-horizon behavior.",
    ambiguity: "Early model gains could be false because transition pairing, state semantics, and evaluation semantics were misaligned.",
    system: "Deterministic episode-timestep pairing, hard alignment gates, projection-consistent residual learning, regime slicing, and horizon validation.",
    validation: "One-step, teacher-forced 50/200/500-step, holdout-family, contact-slice, behavioral, and visual PASS checks.",
    result: "Reduced physical p95 error from 0.1196 to 0.0207 while preserving bounded long-horizon behavior.",
  },
  {
    title: "RNA 3D Ensemble Correction",
    status: "EXPERIMENTAL",
    domain: "Scientific ML",
    summary: "A multi-model fusion and correction layer for refining RNA structure predictions.",
    ambiguity: "Combining strong models did not guarantee improvement; their errors interfered and confidence signals were not directly comparable.",
    system: "Coordinates, confidence features, embeddings, and an MLP correction layer over multiple model outputs.",
    validation: "Measured ensemble performance before and after correction while testing cross-model interference.",
    result: "Achieved roughly 7% accuracy improvement across ensemble predictions.",
  },
  {
    title: "Evolutionary Logic Circuits",
    status: "EXPERIMENTAL",
    domain: "Evolutionary computing",
    summary: "A JAX-based evolutionary search system for discovering digital multiplication circuits.",
    ambiguity: "The search space was combinatorial and naive mutation produced large, brittle genomes with weak convergence.",
    system: "Population evolution, mutation, crossover, elitism, fitness scoring, and later graph-aware search ideas.",
    validation: "Evolved populations of 10,000 circuits over 300 generations on multiplication behavior.",
    result: "Reached 100% final behavioral accuracy, with a genome exceeding 1,800 bits.",
  },
];

export const ambiguityCases = [
  {
    phase: "01 / DEFINE",
    title: "Convert uncertainty into a testable system boundary.",
    body: "I separate what is known, assumed, measurable, inaccessible, and dangerous to infer. The first deliverable is often the problem model itself.",
  },
  {
    phase: "02 / BUILD",
    title: "Construct the smallest architecture that can disprove the idea.",
    body: "I prefer instrumented prototypes, deterministic pipelines, and hard gates over impressive demos that cannot reveal why they fail.",
  },
  {
    phase: "03 / ATTACK",
    title: "Search for regime-local failure, not average success.",
    body: "Contact slices, holdout families, long horizons, production comparisons, and negative results matter more than one flattering metric.",
  },
  {
    phase: "04 / GOVERN",
    title: "State the limits as aggressively as the result.",
    body: "A strong claim includes its boundary. Sim-to-sim is not sim-to-real. A prototype is not a product. An invention idea is not a patent.",
  },
];

export const publications = [
  {
    date: "MAR 2026",
    type: "PUBLICATION + CODE",
    title: "Governing Simulator Discrepancy via Deterministic Pairing and Horizon-Validated Residual Dynamics",
    summary: "Governance-driven sim-to-sim correction with deterministic pairing, alignment gating, long-horizon validation, and reproducibility artifacts.",
    href: "https://zenodo.org/records/19323227",
  },
  {
    date: "OCT 2025",
    type: "SOFTWARE + NUMERICAL VALIDATION",
    title: "A Universal Curvature–Information Principle: Flatness and D⁻¹ Concentration under 2-Designs",
    summary: "Reference implementation, datasets, and numerical experiments studying curvature, information, and concentration under structured designs.",
    href: "https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Anthony%2C%20Olevester%22",
  },
];

export const experience = [
  {
    period: "2025 — PRESENT",
    role: "Lead Research Engineer",
    company: "Rapture Twelve Pvt. Ltd.",
    summary: "Designed and deployed production AI systems across legal-tech, analytics, and automation; owned pipelines from raw data to decision outputs under real-world constraints.",
  },
  {
    period: "2024 — 2025",
    role: "AI/ML Systems Engineer",
    company: "Freelance",
    summary: "Delivered OCR, speech-to-text, structured extraction, retrieval, and automation systems for client-specific workflows.",
  },
  {
    period: "2022 — 2024",
    role: "Scientist",
    company: "Biocon",
    summary: "Developed embedded, PCB, sensing, and control prototypes for smart injection and compact medical-device systems.",
  },
  {
    period: "2022",
    role: "Embedded Systems Intern",
    company: "Biocon",
    summary: "Built early-stage hardware and embedded prototypes for medical applications before moving into a scientist role.",
  },
];

export const capabilities = [
  { title: "AI systems", items: ["PyTorch", "JAX", "Hugging Face", "DSPy", "RAG", "Agent orchestration"] },
  { title: "Data + infrastructure", items: ["Python", "SQL", "PostgreSQL", "pgvector", "FAISS", "Docker", "Linux", "GitHub Actions"] },
  { title: "Multimodal", items: ["WhisperX", "PaddleOCR", "speech pipelines", "document intelligence", "sensor data"] },
  { title: "Physical systems", items: ["control", "embedded logic", "KiCad", "robotics", "PyBullet", "MuJoCo"] },
];

export const contact = {
  email: "olevester.joram123@gmail.com",
  linkedin: "https://www.linkedin.com/in/anthony-olevester",
  github: "https://github.com/ANTHONY-OLEVESTER",
  resume: asset("assets/anthony-olevester-resume.pdf"),
};
