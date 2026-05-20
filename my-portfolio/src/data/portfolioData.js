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
  "Biocon experience in control systems, embedded engineering, and medical-device prototyping",
  "Zenodo publication on deterministic sim-to-sim residual correction in robotics",
  "Final-year modular robotic arm with reassembly architecture and AR-assisted control",
  "Rising Star Award recognition at Biocon",
];

export const heroMetrics = [
  { value: "AI + Robotics", label: "Built around physical systems, not generic software work." },
  { value: "Control to Deployment", label: "Comfortable across simulation, embedded logic, and system validation." },
  { value: "Research + Execution", label: "Moves from prototype to evidence, documentation, and delivery." },
];

export const profile = {
  name: "Anthony Olevester",
  title: "Applied AI & Robotics Engineer",
  image: asset("assets/profile/anthony-profile.jpg"),
  alt: "Anthony Olevester profile photo.",
};

export const flagshipResearch = {
  eyebrow: "Flagship research",
  title: "Governing Simulator Discrepancy via Deterministic Pairing and Horizon-Validated Residual Dynamics",
  venue: "Zenodo publication - March 29, 2026",
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
    { label: "One-step phys p95", value: "0.1196 -> 0.0207" },
    { label: "TF rollout p95", value: "0.0173 / 0.0174 / 0.0222" },
    { label: "Contact flag accuracy", value: "0.9911" },
  ],
  links: [
    { label: "Read paper", href: "https://zenodo.org/records/19323227", variant: "primary" },
    { label: "Code repository", href: "https://github.com/ANTHONY-OLEVESTER/Robotics_sim-to-sim_OnePass", variant: "secondary" },
    { label: "Project page", href: "https://anthony-olevester.github.io/Robotics_sim-to-sim_OnePass/", variant: "secondary" },
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
      "Reviewer-facing comparison video from the canonical PASS bundle. It makes the corrected-vs-reference behavior inspectable instead of forcing the claim to live only in tables.",
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
    company: "Biocon",
    role: "Control Systems & Embedded Engineering",
    period: "Devices, automation, and medical-system prototyping",
    summary:
      "Worked close to physical product constraints where reliability, safety, and implementation detail matter. The work centered on embedded logic, device behavior, and engineering execution rather than slideware.",
    highlights: [
      "Contributed to smart injector and intelligent pen system work tied to sensing, dosage interpretation, and actuation logic.",
      "Worked under compact-device constraints involving power, size, and dependable physical behavior.",
      "Earned internal recognition with the Rising Star Award, reinforcing execution quality and technical trust.",
    ],
  },
  {
    company: "Freelance / Startup Work",
    role: "Applied AI/ML & Systems Engineering",
    period: "Research-led delivery across product and infrastructure contexts",
    summary:
      "Delivered AI systems that required more than model calls: data pipelines, multimodal processing, validation loops, and software that had to be useful in production-shaped settings.",
    highlights: [
      "Built AI/ML systems spanning OCR, speech-to-text, retrieval, structured extraction, and evaluation-driven correction.",
      "Translated ambiguous ideas into testable systems with measurable outputs and maintainable code paths.",
      "Focused on modular architecture so systems could evolve without collapsing under complexity.",
    ],
  },
  {
    company: "Independent Research",
    role: "Robotics Simulation & Reliability",
    period: "Simulation consistency, residual learning, and evaluation rigor",
    summary:
      "Pursued research at the boundary of robotics simulation and dependable model behavior, with an emphasis on how long-horizon errors appear and how to govern them.",
    highlights: [
      "Developed the sim-to-sim pipeline around deterministic pairing, alignment governance, and rollout validation.",
      "Framed reliability as a systems problem, not just a training-loss problem.",
      "Combined implementation, experimentation, artifact curation, and technical writing into one workflow.",
    ],
  },
];

export const selectedWork = [
  {
    title: "Deterministic Sim-to-Sim Residual Correction",
    category: "Independent research / robotics simulation",
    description:
      "A reviewer-facing research package combining hard-mode PASS metrics, behavioral acceptance checks, rollout plots, and visual triptych comparisons across PyBullet and MuJoCo.",
    image: asset("assets/sim2sim/rollout-phys-p95.webp"),
    tags: ["PyBullet", "MuJoCo", "Residual learning", "Long-horizon validation"],
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
    tags: ["KiCad", "Embedded systems", "Signal analysis", "Medical device constraints"],
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
    title: "AI for physical systems",
    description:
      "Strongest where AI meets hardware, simulation, sensing, or operational constraints rather than purely abstract software environments.",
  },
  {
    title: "Robotics simulation",
    description:
      "Comfortable reasoning about simulator mismatch, rollout stability, evaluation design, and the failure modes that break downstream control work.",
  },
  {
    title: "Control systems thinking",
    description:
      "Approaches technical problems through dynamics, feedback, constraints, and system behavior over time instead of isolated components.",
  },
  {
    title: "Embedded and edge execution",
    description:
      "Able to work near sensors, actuation, compact hardware, and implementation details that require engineering discipline.",
  },
  {
    title: "Applied AI/ML systems",
    description:
      "Builds usable AI systems with pipelines, validation, iteration loops, and integration into real workflows.",
  },
  {
    title: "Research-to-engineering translation",
    description:
      "Can move between experimentation, technical writing, and implementation without losing the practical objective.",
  },
];

export const award = {
  title: "Rising Star Award - Biocon",
  body:
    "A credibility marker tied to real engineering contribution inside a high-accountability environment. This section is intentionally treated as evidence of trust and execution, not decoration.",
  notes: [
    "Recognition attached to control systems, embedded engineering, and medical-device prototyping work.",
    "Placed as a proof point for execution quality inside a serious engineering environment.",
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
    "I build intelligent systems for the physical world. My work sits at the intersection of robotics, control, embedded systems, simulation, and applied AI.",
  paragraphs: [
    "That combination matters because many of the most valuable engineering problems are not purely software problems. They involve dynamics, uncertainty, instrumentation, validation, and the discipline to make systems behave reliably outside idealized settings.",
    "My experience spans control-oriented engineering at Biocon, applied AI/ML work across freelance and startup environments, and independent research in robotics simulation reliability. I am especially interested in roles where research depth and engineering execution have to coexist.",
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
