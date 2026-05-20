export const robotNarrationSources = [
  {
    id: "cv",
    label: "Anthony_Olevester_CV_Robotics_AI.pdf",
    notes:
      "Used for public-safe framing of robotics, Biocon, applied AI, and research engineering experience.",
  },
  {
    id: "final-year-thesis",
    label: "Final year Project/thesis (phase 2) revised.pdf",
    notes:
      "Used for robotic arm architecture: reassemblable modules, NEMA 17 steppers, Arduino serial interfacing, OpenCV palm landmarks, servo gripper, SolidWorks, Unity, PLA 3D printing, and 3 DOF target.",
  },
  {
    id: "sim2sim-bundle",
    label: "important_media_bundle_of_Robotics_project_Sim_to_sim",
    notes:
      "Used for exact PASS metrics, behavioral gates, triptych visual evidence, and rollout plot framing.",
  },
  {
    id: "biocon-stepcounter-assets",
    label: "Biocon Stepcounter-AI",
    notes:
      "Used for visual evidence of spectrogram/waveform processing, a compact neural-net workflow, and training curves. Formal validation report not present in the folder.",
  },
  {
    id: "biocon-pen-injector-assets",
    label: "Biocon-Pen-Injector",
    notes:
      "Used for public-safe hardware framing: motor injector, control board, Bluetooth module, display module, and mobile app controls.",
  },
];

export const robotNarrationByDomain = {
  simulation: {
    title: "Residual model robot",
    shortLabel: "Sim-to-sim",
    domain: "simulation",
    accent: "blue",
    cycles: [
      {
        eyebrow: "What I am building",
        title: "Building a residual correction module",
        body:
          "I am carrying the output of Anthony's sim-to-sim robotics research: a residual model that corrects PyBullet behavior toward a MuJoCo reference under strict pairing and validation gates.",
        metric: "Public artifact: Zenodo + PASS bundle",
        proof: "Triptych video, rollout plots, metrics summary, and behavioral acceptance report.",
        ctaLabel: "Open research record",
        ctaHref: "https://zenodo.org/records/19323227",
      },
      {
        eyebrow: "Why it matters",
        title: "Simulator mismatch is a systems risk",
        body:
          "A controller can look stable in one simulator and drift in another. This project treats simulator alignment as a reliability problem, not just a model-training problem.",
        metric: "PyBullet to MuJoCo alignment",
        proof: "The work compares raw Bullet, MuJoCo reference, and corrected replay in one inspectable triptych.",
      },
      {
        eyebrow: "How Anthony built it",
        title: "Governance before learning",
        body:
          "The pipeline enforces deterministic episode-timestep pairing, blocks invalid training through alignment gates, then validates the residual correction across one-step and rollout checks.",
        metric: "Hard alignment gates before claims",
        proof: "The bundle separates quantitative hard-mode PASS evidence from visual behavioral PASS evidence.",
      },
      {
        eyebrow: "What was achieved",
        title: "Large one-step error reduction",
        body:
          "On the curated hard-mode PASS run, corrected physical one-step p95 error dropped from 0.119573 to 0.020735 while preserving rollout stability checks.",
        metric: "p95: 0.119573 -> 0.020735",
        proof: "From metrics_summary.json and RESULTS_SUMMARY.md in the sim-to-sim media bundle.",
      },
      {
        eyebrow: "Numbers that matter",
        title: "Long-horizon checks stayed stable",
        body:
          "Teacher-forced rollout p95 stayed controlled at 0.017327 for 50 steps, 0.017425 for 200 steps, and 0.022175 for 500 steps.",
        metric: "TF p95: 50/200/500 = 0.017327 / 0.017425 / 0.022175",
        proof: "This is stronger than a single short demo because it checks behavior across rollout horizons.",
      },
      {
        eyebrow: "Hiring signal",
        title: "Research discipline plus engineering execution",
        body:
          "This is the strongest signal for robotics simulation, validation, reliability, control, and applied AI teams that need evidence-backed engineering instead of vague model claims.",
        metric: "Contact flag accuracy: 0.991075",
        proof: "The project combines code, metrics, videos, plots, and public-facing technical writing.",
      },
    ],
  },
  robotics: {
    title: "Robotic arm builder",
    shortLabel: "Arm module",
    domain: "robotics",
    accent: "red",
    cycles: [
      {
        eyebrow: "What I am building",
        title: "Assembling a modular arm segment",
        body:
          "I am building from the final-year robotic arm project: a reassemblable arm architecture where modules can be detached, rearranged, and used to change the arm's physical configuration.",
        metric: "Target architecture: reassemblable modular arm",
        proof: "The thesis frames the project around removable modules instead of static metallic parts.",
        ctaLabel: "Watch arm demo",
        ctaHref: "https://youtu.be/QQCtvQF9WvE?si=fIGWSTRqElmNX801",
      },
      {
        eyebrow: "Why it matters",
        title: "Physical build evidence",
        body:
          "This project shows Anthony can move from concept to physical prototype: mechanical design, embedded control, perception input, and a visible arm demonstration.",
        metric: "From scrap prototypes to 3D-printed arm",
        proof: "The CV and thesis both support the iterative build story.",
      },
      {
        eyebrow: "How Anthony built it",
        title: "Mechanical, embedded, and vision layers",
        body:
          "The system combines SolidWorks design, Unity visualization, PLA 3D-printed modules, NEMA 17 stepper motors, drivers, Arduino coordination, and a servo gripper.",
        metric: "NEMA 17: 1.8 deg step angle, 1.7 A/phase, 4.2 kg-cm torque",
        proof: "Stepper specifications appear in the final-year thesis.",
      },
      {
        eyebrow: "Control path",
        title: "Modular joints with electrical continuity",
        body:
          "The arm uses copper windings, carbon brushes, and slip-ring style thinking so adjacent modules can rotate while maintaining current paths between modules.",
        metric: "3 DOF target from module arrangement",
        proof: "The thesis describes brush holders, slip-ring segments, and friction-reduced joint design.",
      },
      {
        eyebrow: "Perception layer",
        title: "OpenCV gripper control",
        body:
          "OpenCV detects palm landmarks, vectorizes the hand state, and sends commands to an Arduino Nano for coordinated gripper open and close behavior.",
        metric: "Remote and local operation modes",
        proof: "The thesis describes AR-assisted gripper control with servo position control.",
      },
      {
        eyebrow: "Hiring signal",
        title: "Robotics execution across the stack",
        body:
          "This is a practical robotics signal: CAD, 3D printing, embedded control, actuation, gripper behavior, perception, and demo-facing integration in one project.",
        metric: "Best proof: public video + thesis + build image",
        proof: "Use this robot when we want viewers to see that the portfolio is not only software.",
      },
    ],
  },
  embedded: {
    title: "Embedded sensing robot",
    shortLabel: "Sensor pack",
    domain: "embedded",
    accent: "yellow",
    cycles: [
      {
        eyebrow: "What I am building",
        title: "Carrying a smart-pen sensing module",
        body:
          "I am carrying the Biocon step-counter work: a compact sensing idea for reading dose-step behavior from a standard insulin pen and making it observable.",
        metric: "Medical-device-shaped embedded problem",
        proof: "The CV describes a KiCad-designed attachable PCB step counter for insulin pen usage logging.",
      },
      {
        eyebrow: "Why it matters",
        title: "Small devices need reliable signals",
        body:
          "In compact medical-adjacent devices, the hard part is not only the model. It is sensing, size, power, reliability, and making physical use events machine-readable.",
        metric: "Constraints: size, power, reliability",
        proof: "These constraints are stated in the CV and reflected by the available Biocon assets.",
      },
      {
        eyebrow: "How Anthony built it",
        title: "Signal processing into an AI workflow",
        body:
          "The available workflow visuals show waveform and spectrogram processing feeding a small neural-net style classifier, with training accuracy and loss curves tracked over time.",
        metric: "Training artifact reaches about 95% visible accuracy",
        proof: "The training.png chart visually rises from the high-70s to the mid-90s accuracy range by around 1.2k steps.",
      },
      {
        eyebrow: "System integration",
        title: "From pen event to mobile monitoring",
        body:
          "The project narrative connects dose-step tracking with logging and mobile-device communication, so the sensor work becomes useful for monitoring instead of staying as raw signals.",
        metric: "Pen attachment + data monitoring",
        proof: "The CV states mobile communication for data monitoring.",
      },
      {
        eyebrow: "Evidence boundary",
        title: "Strong visual evidence, no fake validation claim",
        body:
          "The folder gives useful engineering visuals but not a formal validation report. We should present the training curve as an artifact, not as a certified production metric.",
        metric: "TODO: verify dataset size and formal test accuracy",
        proof: "Keep this honest until more Biocon step-counter documentation is available.",
      },
      {
        eyebrow: "Hiring signal",
        title: "Embedded AI near real hardware",
        body:
          "This supports roles involving edge AI, signal processing, sensing, hardware-aware ML, embedded systems, and product-shaped engineering constraints.",
        metric: "Best proof: KiCad + spectrogram + training curve + mobile workflow",
        proof: "This robot should talk about practical embedded intelligence, not generic AI.",
      },
    ],
  },
  control: {
    title: "Control loop robot",
    shortLabel: "Control loop",
    domain: "control",
    accent: "green",
    cycles: [
      {
        eyebrow: "What I am building",
        title: "Calibrating injector actuation",
        body:
          "I am representing the motorized intelligent pen injector work: embedded control logic, actuation, Bluetooth control, display feedback, and safe physical delivery behavior.",
        metric: "Motor injector + control board + Bluetooth + display",
        proof: "The Biocon Pen Injector image labels these system components directly.",
      },
      {
        eyebrow: "Why it matters",
        title: "Software becomes physical motion",
        body:
          "Control systems work is different from normal app logic. The software has to command motion, respect physical constraints, and behave predictably around a user-facing device.",
        metric: "Closed-loop decision-making and actuation",
        proof: "The CV frames the project around glucose interpretation, dosage computation, embedded control, and safe delivery.",
      },
      {
        eyebrow: "How Anthony built it",
        title: "Prototype-level system integration",
        body:
          "The visible prototype includes a mobile interface, Bluetooth link, control board, motor injector mechanism, and display module, which makes the system testable as a full device path.",
        metric: "App controls: connect, prime/test, start injection, reset",
        proof: "These controls are visible in the Biocon Pen Injector image.",
      },
      {
        eyebrow: "What was achieved",
        title: "Control-oriented medical mechatronics",
        body:
          "The work demonstrates comfort with control-oriented device behavior: sensing or decision input, embedded logic, actuation, and feedback through a physical prototype.",
        metric: "Early-stage IP documentation initiated",
        proof: "The CV mentions early-stage intellectual property documentation prior to exit.",
      },
      {
        eyebrow: "Evidence boundary",
        title: "Keep details public-safe",
        body:
          "Because this is Biocon-related work, the site should avoid exposing sensitive internals. The public story should stay at system architecture, constraints, and contribution level.",
        metric: "TODO: verify which numbers are safe to show",
        proof: "Use the image and CV framing unless more public-safe documentation is available.",
      },
      {
        eyebrow: "Hiring signal",
        title: "Control thinking under product constraints",
        body:
          "This is useful for robotics, medical devices, embedded actuation, control systems, and teams that need engineers who understand that physical outputs carry risk.",
        metric: "Best proof: prototype image + Biocon experience + award",
        proof: "Pair this robot with the Rising Star Award section for credibility.",
      },
    ],
  },
  ai: {
    title: "AI pipeline robot",
    shortLabel: "AI pipeline",
    domain: "ai",
    accent: "blue",
    cycles: [
      {
        eyebrow: "What I am building",
        title: "Connecting AI into a usable workflow",
        body:
          "I am carrying the applied AI systems thread: OCR, speech-to-text, vision models, retrieval, structured extraction, evaluation loops, and correction workflows.",
        metric: "Applied AI beyond model calls",
        proof: "The CV lists multimodal AI, embeddings, evaluation loops, and research pipelines.",
      },
      {
        eyebrow: "Why it matters",
        title: "AI only matters when it survives integration",
        body:
          "The useful work is turning messy inputs into structured outputs, validating behavior, and making the pipeline maintainable enough for product or research teams.",
        metric: "Rapture Twelve: Lead Research Engineer, 2022-2026",
        proof: "The CV frames the role around applied research, automation, and intelligent monitoring.",
      },
      {
        eyebrow: "How Anthony built it",
        title: "Pipelines, not isolated demos",
        body:
          "The applied AI work spans OCR, speech-to-text, vision models, anomaly detection, statistical metrics, structured datasets, and iterative validation loops.",
        metric: "Tools: PyTorch, JAX, HuggingFace, WhisperX, PaddleOCR",
        proof: "These tools and contribution areas are listed in the CV.",
      },
      {
        eyebrow: "Research depth",
        title: "Learning systems with evaluation pressure",
        body:
          "The CV includes EvoJAX evolutionary logic circuits, transformer-guided genome mutation, and RNA 3D structure correction, all framed around evaluation and improvement loops.",
        metric: "EvoJAX task: 4-bit x 4-bit multiplication to 8-bit output",
        proof: "This gives the AI story more depth than prompt-wrapper experience.",
      },
      {
        eyebrow: "Systems signal",
        title: "Data infrastructure matters",
        body:
          "Anthony's AI systems experience includes PostgreSQL, pgvector, FAISS, Milvus, Dockerized environments, and reproducible research pipelines.",
        metric: "Search/vector stack + experiment workflow",
        proof: "The CV lists data infrastructure and reproducible environment tooling.",
      },
      {
        eyebrow: "Hiring signal",
        title: "Applied AI engineer for real systems",
        body:
          "This robot should position Anthony for applied AI, AI systems, research engineering, multimodal automation, and robotics-adjacent ML roles.",
        metric: "Best proof: pipelines + validation + physical-systems overlap",
        proof: "Use this narration to connect AI work back to robotics, sensing, control, and simulation.",
      },
    ],
  },
};

export const robotNarrationByJob = {
  simulation: robotNarrationByDomain.simulation,
  "simulation-contact": {
    ...robotNarrationByDomain.simulation,
    shortLabel: "Research signal",
    title: "Research signal robot",
  },
  robotics: robotNarrationByDomain.robotics,
  "robotics-contact": {
    ...robotNarrationByDomain.robotics,
    shortLabel: "Build evidence",
    title: "Build evidence robot",
  },
  embedded: robotNarrationByDomain.embedded,
  "embedded-contact": {
    ...robotNarrationByDomain.embedded,
    shortLabel: "Device signal",
    title: "Device signal robot",
  },
  control: robotNarrationByDomain.control,
  ai: robotNarrationByDomain.ai,
  "simulation-ai": {
    ...robotNarrationByDomain.ai,
    shortLabel: "AI validation",
    title: "AI validation robot",
  },
};

export function getRobotNarration(job) {
  return robotNarrationByJob[job.id] || robotNarrationByDomain[job.domain] || robotNarrationByDomain.ai;
}
