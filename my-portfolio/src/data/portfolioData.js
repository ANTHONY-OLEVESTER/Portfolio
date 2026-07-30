const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const navigation = [
  { id: "research", label: "Research" },
  { id: "demos", label: "Demos" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Selected Work" },
  { id: "strengths", label: "Strengths" },
  { id: "award", label: "Award" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const credibilityItems = [
  "600K+ repositories scanned through a tiered technical-intelligence pipeline",
  "Production AI workflow delivering approximately 30% higher revenue than manual tagging",
  "Two open Zenodo research and software records with reproducibility artifacts",
  "Biocon control, embedded, and medical-device engineering with Rising Star recognition",
];

export const heroMetrics = [
  {
    value: "600K+ Repositories",
    label: "Built an internet-scale intelligence pipeline that searched beyond popularity metrics.",
  },
  {
    value: "~30% Production Lift",
    label: "Converted ambiguous legal work logs into validated, invoice-ready billing intelligence.",
  },
  {
    value: "Ambiguity → Evidence",
    label: "Defines the unknowns, builds the smallest testable system, and attacks its failure modes.",
  },
];

export const profile = {
  name: "Anthony Olevester",
  title: "AI Systems & Research Engineer",
  image: asset("assets/profile/anthony-profile.jpg"),
  alt: "Anthony Olevester profile photo.",
};

export const flagshipResearch = {
  eyebrow: "Flagship research",
  title: "Governing Simulator Discrepancy via Deterministic Pairing and Horizon-Validated Residual Dynamics",
  venue: "Zenodo publication — March 29, 2026",
  impact:
    "A governance-first sim-to-sim residual learning pipeline for robotics with explicit pairing checks, long-horizon validation, and stable correction under contact-rich dynamics.",
  summary:
    "This work targets a practical failure mode in simulator alignment: learning from mispaired transitions. The pipeline enforces deterministic episode-timestep pairing, blocks invalid training with hard alignment gates, and validates correction quality with one-step, teacher-forced, holdout, and behavioral acceptance checks.",
  contributions: [
    "Reduced one-step physical p95 error from 0.1196 to 0.0207 on the curated hard-mode PASS evaluation.",
    "Held teacher-forced rollout p95 error to 0.0173 at 50 steps, 0.0174 at 200 steps, and 0.0222 at 500 steps.",
    "Passed behavioral gates for motion, cross-sim agreement, correction visibility, rollout improvement, and acrobatics.",
    "Backed the public claim with reviewer-facing artifacts: triptych comparison video, rollout plots, and canonical PASS reports.",
  ],
  stats: [
    { label: "One-step phys p95", value: "0.1196 → 0.0207" },
    { label: "TF rollout p95", value: "0.0173 / 0.0174 / 0.0222" },
    { label: "Contact flag accuracy", value: "0.9911" },
  ],
  links: [
    { label: "Read paper", href: "https://zenodo.org/records/19323227", variant: "primary" },
    {
      label: "Code repository",
      href: "https://github.com/ANTHONY-OLEVESTER/Robotics_sim-to-sim_OnePass",
      variant: "secondary",
    },
    {
      label: "Project page",
      href: "https://anthony-olevester.github.io/Robotics_sim-to-sim_OnePass/",
      variant: "secondary",
    },
  ],
};

export const researchFigures = [
  {
    title: "Canonical visual comparison",
    description:
      "Curated triptych from the PASS bundle showing raw PyBullet, MuJoCo reference, and corrected replay side by side for direct inspection.",
    src: asset("assets/sim2sim/triptych-frame.webp"),
    alt: "Sim-to-sim triptych comparison showing raw, reference, and corrected panels.",
  },
  {
    title: "Rollout physical error summary",
    description:
      "Publication-style summary figure from the hard-mode PASS run used to anchor the long-horizon error story quantitatively.",
    src: asset("assets/sim2sim/rollout-phys-p95.webp"),
    alt: "Rollout physical error summary plot from the sim-to-sim robotics project.",
  },
  {
    title: "End-effector trajectory overlay",
    description:
      "Task-plane overlay used to inspect whether corrected behavior closes the gap toward the MuJoCo reference trajectory.",
    src: asset("assets/sim2sim/ee-traj-xy.webp"),
    alt: "End-effector XY trajectory overlay for raw, reference, and corrected simulator paths.",
  },
];

export const demoVideos = [
  {
    title: "Modular Vision-Guided Robotic Arm",
    tag: "Final year project",
    description:
      "The main public demo for the final-year robotic arm. This project centered on modular reassembly, motion mimicry, and visible physical execution rather than a slide-only concept.",
    details: [
      "Designed as a reconfigurable arm with modules that could be assembled and reassembled.",
      "Used stepper-driven joints, Arduino-based coordination, and a servo-actuated gripper.",
      "Integrated OpenCV-based gesture interpretation for gripper control and human motion mapping.",
    ],
    embedUrl: "https://www.youtube.com/embed/QQCtvQF9WvE?si=fIGWSTRqElmNX801",
    href: "https://youtu.be/QQCtvQF9WvE?si=fIGWSTRqElmNX801",
    ctaLabel: "Watch on YouTube",
    featured: true,
  },
  {
    title: "Sim-to-sim triptych comparison",
    tag: "Research demonstration",
    description:
      "Reviewer-facing comparison video from the canonical PASS bundle. It makes corrected-versus-reference behavior inspectable instead of forcing the claim to live only in tables.",
    details: [
      "Behavioral gates passed for motion, cross-sim agreement, correction visibility, and rollout improvement.",
      "End-effector distance to target reached 8.394e-05 on the selected behavioral run.",
    ],
    videoSrc: asset("assets/sim2sim/compare-triptych.mp4"),
    poster: asset("assets/sim2sim/triptych-frame.webp"),
    href: "https://zenodo.org/records/19323227",
    ctaLabel: "Open research record",
  },
  {
    title: "A Universal Curvature–Information Principle",
    tag: "Numerical research software",
    description:
      "Reference implementation, datasets, and numerical validation scripts studying flatness and D⁻¹ concentration under structured 2-designs.",
    details: [
      "Published as an open software and numerical-validation record in October 2025.",
      "Separates the mathematical claim, implementation, datasets, and reproducibility evidence.",
    ],
    imageSrc: asset("assets/software/curvature-information.svg"),
    href: "https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Anthony%2C%20Olevester%22",
    ctaLabel: "Open Zenodo records",
  },
  {
    title: "Final-year project assembly dossier",
    tag: "Thesis evidence",
    description:
      "Derived from the project thesis. The arm architecture emphasized modular construction, interchangeable joints, and assembly around stepper-motor and gripper subsystems.",
    details: [
      "Objective: build a robotic arm that can be assembled and reassembled instead of relying on fixed rigid construction.",
      "The assembled prototype used two stepper motors and one servomotor in the final build phase.",
    ],
    imageSrc: asset("assets/final-year-project/assembly-image.webp"),
    href: asset("assets/final-year-project/final-year-project-thesis.pdf"),
    ctaLabel: "Open project thesis",
  },
  {
    title: "Biocon Step Counter AI",
    tag: "Embedded AI signal work",
    description:
      "Media from the dose-reading workflow used in the smart insulin pen work, showing the signal-analysis side of the system rather than only the hardware packaging.",
    details: [
      "Built around reading dose events from compact physical interaction signals.",
      "Supports the broader step-counter story from the CV: logging usage under tight device constraints.",
    ],
    imageSrc: asset("assets/biocon/stepcounter-dose-read.webp"),
    href: asset("assets/biocon/stepcounter-spectrogram.webp"),
    ctaLabel: "Open supporting visual",
  },
];

export const experienceItems = [
  {
    company: "Rapture Twelve Pvt. Ltd.",
    role: "Lead Research Engineer",
    period: "2025 — Present",
    summary:
      "Designed and deployed production-shaped AI systems across legal-tech, analytics, and automation, owning the path from raw data to decision output.",
    highlights: [
      "Built the Innovation Intelligence Engine to scan, normalize, filter, and semantically evaluate more than 600,000 repositories.",
      "Developed an autonomous manager-developer-tester pipeline for closed-loop software generation and repair.",
      "Delivered the UTBMS billing-intelligence workflow, producing approximately 30% higher revenue than manual tagging.",
    ],
  },
  {
    company: "Independent / Freelance",
    role: "AI/ML Systems Engineer",
    period: "2024 — 2025",
    summary:
      "Delivered AI systems requiring ingestion, multimodal processing, retrieval, validation, correction loops, and maintainable software—not isolated model calls.",
    highlights: [
      "Built OCR, speech-to-text, structured extraction, document intelligence, and retrieval workflows.",
      "Translated incomplete client requirements into testable architectures and measurable outputs.",
      "Designed modular systems that could be extended without collapsing into one-off scripts.",
    ],
  },
  {
    company: "Biocon — Scientist",
    role: "Control Systems & Embedded Engineering",
    period: "2022 — 2024",
    summary:
      "Worked close to physical product constraints where reliability, safety, power, size, and implementation detail mattered.",
    highlights: [
      "Contributed to smart injector and intelligent pen systems involving sensing, dosage interpretation, and actuation logic.",
      "Developed compact embedded, PCB, signal-analysis, and control prototypes for medical-device workflows.",
      "Earned the Rising Star Award for execution quality and technical contribution.",
    ],
  },
  {
    company: "Biocon — Internship",
    role: "Embedded Systems Intern",
    period: "2022",
    summary:
      "Built early-stage hardware and embedded prototypes for medical applications before moving into a scientist role.",
    highlights: [
      "Worked across sensing, microcontrollers, electronics integration, and device prototyping.",
      "Converted experimental hardware behavior into documented engineering observations.",
      "Progressed from internship work into broader scientist-level ownership.",
    ],
  },
  {
    company: "Independent Research",
    role: "Scientific ML, Simulation & Evolutionary Systems",
    period: "Ongoing",
    summary:
      "Pursues research where the central problem is not merely training a model, but proving that the data, pairing, evaluation, and claim are valid.",
    highlights: [
      "Published the deterministic sim-to-sim correction pipeline with long-horizon and behavioral validation.",
      "Built RNA ensemble-correction experiments with approximately 7% accuracy improvement.",
      "Evolved 10,000-circuit populations over 300 generations, reaching 100% final behavioral accuracy in the reported run.",
    ],
  },
];

export const selectedWork = [
  {
    title: "Innovation Intelligence Engine",
    category: "Internet-scale AI / technical intelligence",
    description:
      "A tiered pipeline that ingests, canonicalizes, filters, and semantically inspects massive software ecosystems to discover valuable capability hidden beyond stars and popularity.",
    image: asset("assets/software/innovation-intelligence.svg"),
    tags: ["600K+ repositories", "Canonical graphs", "Tiered model routing", "55+ systems"],
  },
  {
    title: "Autonomous AI Code Generation Pipeline",
    category: "Agentic engineering / local execution",
    description:
      "A manager-developer-tester architecture that plans, builds, runs, critiques, and repairs software through a closed execution loop rather than one-shot prompting.",
    image: asset("assets/software/autonomous-code.svg"),
    tags: ["Multi-agent", "Sandbox execution", "Testing loops", "Self-correction"],
  },
  {
    title: "UTBMS Legal Billing Intelligence",
    category: "Production AI / structured extraction",
    description:
      "A validation-and-correction pipeline that turns inconsistent legal work logs into billing codes and invoice-ready structure, outperforming the prior manual tagging workflow.",
    image: asset("assets/software/legal-billing.svg"),
    tags: ["Production", "LLM extraction", "Validation", "~30% revenue lift"],
  },
  {
    title: "Deterministic Sim-to-Sim Residual Correction",
    category: "Published research / robotics simulation",
    description:
      "A reviewer-facing research package combining hard-mode PASS metrics, deterministic pairing, behavioral acceptance checks, rollout plots, and visual comparisons across PyBullet and MuJoCo.",
    image: asset("assets/sim2sim/rollout-phys-p95.webp"),
    tags: ["PyBullet", "MuJoCo", "Residual learning", "Long-horizon validation"],
  },
  {
    title: "Evolutionary Logic Circuits",
    category: "Evolutionary computing / JAX",
    description:
      "A population-based search system for discovering digital multiplication circuits through mutation, crossover, elitism, and behavioral fitness evaluation.",
    image: asset("assets/software/evolutionary-circuits.svg"),
    tags: ["10K population", "300 generations", "JAX", "100% final behavior"],
  },
  {
    title: "Modular Vision-Guided Robotic Arm",
    category: "Final year project / robotics build",
    description:
      "A reconfigurable robotic arm designed for assembly and reassembly, using modular joints, stepper-driven motion, and OpenCV-assisted control logic for gripper behavior.",
    image: asset("assets/final-year-project/assembly-image.webp"),
    tags: ["Reconfigurable hardware", "OpenCV", "Arduino", "Stepper + servo control"],
  },
  {
    title: "Smart Insulin Pen Step Counter",
    category: "Biocon / embedded sensing",
    description:
      "Custom step-count and dose-monitoring work intended to convert a standard insulin pen into a smarter injector with logging capability and compact hardware integration.",
    image: asset("assets/biocon/stepcounter-spectrogram.webp"),
    tags: ["KiCad", "Embedded systems", "Signal analysis", "Medical-device constraints"],
  },
  {
    title: "Motorized Intelligent Pen Injector",
    category: "Biocon / control-oriented device work",
    description:
      "Control and embedded contributions for a motorized injector system shaped by sensed patient state, safe actuation, and practical implementation constraints.",
    image: asset("assets/biocon/pen-injector.webp"),
    tags: ["Control systems", "Embedded logic", "Actuation", "Product engineering"],
  },
];

export const strengths = [
  {
    title: "Ambiguity decomposition",
    description:
      "Separates what is known, assumed, measurable, inaccessible, and dangerous to infer before committing to an architecture.",
  },
  {
    title: "Internet-scale AI systems",
    description:
      "Builds ingestion, normalization, ranking, model-routing, evaluation, and cost-control systems around large technical ecosystems.",
  },
  {
    title: "Autonomous software execution",
    description:
      "Designs agent systems with ownership, tools, testing, critique, retries, and measurable convergence—not chat-only demonstrations.",
  },
  {
    title: "Scientific and residual learning",
    description:
      "Measures structured error, learns correction layers, and validates behavior across robotics, biological ensembles, and numerical systems.",
  },
  {
    title: "Control, embedded, and physical systems",
    description:
      "Works near sensors, actuation, compact hardware, simulation, dynamics, and implementation constraints that punish vague reasoning.",
  },
  {
    title: "Evidence-led engineering",
    description:
      "Uses hard gates, holdouts, long horizons, regime slices, production comparisons, negative results, and reproducible artifacts.",
  },
];

export const award = {
  title: "Rising Star Award — Biocon",
  body:
    "A credibility marker tied to real engineering contribution inside a high-accountability environment. It is presented as evidence of technical trust and execution, not decoration.",
  notes: [
    "Recognition attached to control systems, embedded engineering, and medical-device prototyping work.",
    "Supports a record of dependable delivery inside a serious engineering environment.",
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
    "I build AI and engineering systems for problems that are initially underspecified, noisy, or difficult to validate.",
  paragraphs: [
    "My work spans production AI, autonomous software systems, internet-scale technical intelligence, scientific machine learning, robotics simulation, control, and embedded engineering. The common thread is not a specific model or framework; it is turning uncertainty into a system that can be measured and attacked.",
    "I prefer instrumented prototypes and explicit failure boundaries over impressive demonstrations with weak evidence. A strong result should expose its assumptions, validation regime, measurable effect, and remaining limits.",
  ],
  location:
    "Priority locations: Hyderabad, Bengaluru, and remote roles with strong technical scope.",
};

export const contact = {
  email: "olevester.joram123@gmail.com",
  linkedin: "https://www.linkedin.com/in/anthony-olevester",
  github: "https://github.com/ANTHONY-OLEVESTER",
  resume: asset("assets/anthony-olevester-resume.pdf"),
};