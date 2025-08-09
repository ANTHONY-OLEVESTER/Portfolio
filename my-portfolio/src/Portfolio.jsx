import React from "react";

// Anthony Olevester — One‑page Portfolio
// TailwindCSS styles are available in this preview environment.
// Replace placeholder links as needed.

const projects = [
  {
    title: "Hadron Web / Particle Visualizer",
    year: "2025",
    summary:
      "Interactive 3D visualization of hadrons, quarks, and decay chains with layered insights (structure, forces, lifetimes).",
    impact:
      "Helps students grasp particle physics concepts through spatial metaphors and live filtering.",
    stack: ["Three.js", "JavaScript", "WebGL"],
    links: [{ label: "Repo", href: "https://github.com/ANTHONY-OLEVESTER/SubParticles-Web" }],
  },
  {
    title: "EvoJAX Circuit Evolution Engine",
    year: "2025",
    summary:
      "Genetic evolution of logic circuits; graph-aware mutation/crossover; elitism + diversity; bitwise simulator for speed.",
    impact:
      "Explores minimal circuits for 4‑bit × 4‑bit multiplication and beyond; supports surrogate fitness experiments.",
    stack: ["JAX", "Python", "EvoJAX"],
    links: [],
  },
  {
    title: "Transformer‑Guided Genome Mutation Trainer",
    year: "2025",
    summary:
      "Trains a Transformer on (genome → improved genome) pairs to steer evolution vs random mutation baselines.",
    impact:
      "Improves convergence and sample‑efficiency of circuit search under tight compute budgets.",
    stack: ["PyTorch", "Transformers", "Python"],
    links: [],
  },
  {
    title: "Self‑Evolving AI Agents (Genesis System)",
    year: "2025",
    summary:
      "Agents generate ideas, test them in isolated playgrounds, and earn rewards against human‑centric goals.",
    impact:
      "Research scaffold for safe, iterative agent improvement with explainable feedback loops.",
    stack: ["Python", "ML", "Evaluation Loops"],
    links: [],
  },
  {
    title: "RNA 3D Folding Correction Pipeline",
    year: "2025",
    summary:
      "Fuses outputs from RhoFold/RNAErnie/RiNALMo/Uni‑RNA via a correction MLP; supports WhisperX/Resemblyzer tooling elsewhere.",
    impact:
      "Aims for higher TM‑scores from ensemble consensus and iterative correction.",
    stack: ["Python", "Deep Learning", "Bioinformatics"],
    links: [],
  },
  {
    title: "UTBMS Legal Billing Extractor (100% validation loop)",
    year: "2025",
    summary:
      "LLM‑based field extraction with iterative self‑critique + correction until validation passes; strict client/matter mapping.",
    impact:
      "Turns messy logs into audit‑ready UTBMS JSON with near‑zero manual edits.",
    stack: ["Python", "LLMs", "Validation"],
    links: [],
  },
  {
    title: "Boutique Management System (Admin + Cashcounter)",
    year: "2025",
    summary:
      "Local DB + React app for vendors, stock, QR billing; two roles with CRUD APIs and printable invoices.",
    impact:
      "Streamlines daily retail ops with batch fetch, price markup, and QR‑based checkout.",
    stack: ["React", "Node.js", "MongoDB"],
    links: [],
  },
  {
    title: "WhatsApp Smart Bridge (Voice/OCR Parser)",
    year: "2025",
    summary:
      "Parses .txt/.crypt12 exports; transcribes voice notes; OCRs screenshots; outputs unified CSV/XLSX dataset.",
    impact:
      "Rapid discovery and compliance over large chat archives; optional file mgmt layer.",
    stack: ["Python", "WhisperX", "PaddleOCR"],
    links: [],
  },
  {
    title: "Firebase + Flutter WebRTC Voice",
    year: "2025",
    summary:
      "Browser/mobile VoIP with Firebase signaling; tuned ICE handling, permissions, and TURN/STUN.",
    impact:
      "Lightweight calling without server bloat; learnings ported to Capacitor.",
    stack: ["Flutter", "Firebase", "WebRTC"],
    links: [],
  },
  {
    title: "Port Activity Monitor (Tech/Econ/Env dashboards)",
    year: "2025",
    summary:
      "Real‑time views of shipments, revenue, and environmental metrics; 150‑page design and validation report.",
    impact:
      "Decision support for logistics with simulated data and future live feeds.",
    stack: ["React", "Flask", "MongoDB"],
    links: [],
  },
  {
    title: "Target.com PhoenixBot (Selenium)",
    year: "2025",
    summary:
      "Automation bot for inventory and pricing; structured logs, error handling, and throttling.",
    impact:
      "Reliable scraping under site defenses; modular for other retailers.",
    stack: ["Python", "Selenium"],
    links: [],
  },
  {
    title: "Binance Strategy Bot",
    year: "2025",
    summary:
      "Monitors 200+ symbols; RSI+EMA+BB entry logic; future combos (MACD+Volume, VWAP+RSI) with CSV performance logs.",
    impact:
      "Framework for robust signal testing and alerting.",
    stack: ["Python", "Pandas"],
    links: [],
  },
];

const experience = [
  {
    role: "Tech Director & Scientist",
    company: "Raptor Twelve (R12)", // spelling to confirm
    period: "2025 — Present",
    bullets: [
      "Leading applied research in AI, automation, and intelligent tooling.",
      "Owning roadmap for ML systems and developer platforms.",
    ],
  },
  {
    role: "Freelance Engineer & Full‑Stack/ML",
    company: "Independent",
    period: "2023 — 2025",
    bullets: [
      "Delivered automation, data pipelines, and full‑stack tools for SMEs and startups.",
      "Built end‑to‑end dashboards, OCR/NLP utilities, and Selenium RPA.",
    ],
  },
  {
    role: "Engineer (Devices & Automation)",
    company: "Biocon",
    period: "2022 — 2024",
    bullets: [
      "Developed a next‑gen pen‑injector concept and test jigs.",
      "Shipped acceleration tools and automations across teams.",
    ],
  },
  {
    role: "B.Tech, NIT Puducherry",
    company: "2018 — 2022",
    period: "Final‑year project",
    bullets: [
      "Robotic hand capable of accomplishing arbitrary tasks via modular end‑effectors.",
    ],
  },
];

const skills = [
  "Python", "JAX", "PyTorch", "Transformers", "LLM Eval Loops",
  "Computer Vision", "OCR (PaddleOCR)", "ASR (WhisperX)",
  "React", "Node.js", "MongoDB", "WebRTC", "Selenium",
  "Three.js/WebGL", "Genetic Algorithms", "Evolutionary Search",
  "Automation Design", "Rapid Prototyping",
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100">
      {/* Header */}
      <header className="sticky top-0 backdrop-blur border-b border-white/10 z-50">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-white/10 grid place-items-center text-lg font-bold">AO</div>
            <div className="leading-tight">
              <h1 className="text-lg font-semibold">Anthony Olevester</h1>
              <p className="text-xs text-slate-300">Tech Director • Scientist • Builder</p>
            </div>
          </div>
          <nav className="hidden sm:flex gap-5 text-sm">
            <a href="#projects" className="hover:text-white/90">Projects</a>
            <a href="#experience" className="hover:text-white/90">Experience</a>
            <a href="#skills" className="hover:text-white/90">Skills</a>
            <a href="#contact" className="hover:text-white/90">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              I design and ship <span className="text-sky-400">intelligent tools</span>
              <br className="hidden md:block" /> that move from
              <span className="text-emerald-400"> research</span> →
              <span className="text-indigo-400"> production</span>.
            </h2>
            <p className="mt-5 text-slate-300 text-lg">
              Full‑stack + ML + automation. I build things end‑to‑end—
              from robotics and bio‑devices to data platforms and 3D web.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/anthony-olevester"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10"
              >
                LinkedIn
              </a>
              <a
                href="mailto:olevester.joram123@gmail.com"
                className="px-4 py-2 rounded-2xl bg-sky-500/90 hover:bg-sky-400 text-slate-900 font-semibold"
              >
                Email me
              </a>
              <a
                href="#projects"
                className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10"
              >
                See projects ↓
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              Currently: <span className="text-slate-200 font-medium">Tech Director & Scientist @ Raptor Twelve (R12)</span>
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="rounded-3xl p-6 bg-white/5 border border-white/10 shadow-2xl">
              <ul className="grid grid-cols-2 gap-3 text-sm">
                <li className="p-3 rounded-xl bg-black/30 border border-white/10">Robotics & Devices</li>
                <li className="p-3 rounded-xl bg-black/30 border border-white/10">Full‑stack Systems</li>
                <li className="p-3 rounded-xl bg-black/30 border border-white/10">LLMs & Agents</li>
                <li className="p-3 rounded-xl bg-black/30 border border-white/10">3D Visualization</li>
                <li className="p-3 rounded-xl bg-black/30 border border-white/10">Automation/RPA</li>
                <li className="p-3 rounded-xl bg-black/30 border border-white/10">Bio/Med Tooling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-10">
        <h3 className="text-2xl font-bold mb-6">Experience</h3>
        <div className="grid gap-4">
          {experience.map((e, idx) => (
            <div key={idx} className="rounded-2xl p-5 bg-white/5 border border-white/10">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <div className="text-lg font-semibold">{e.role}</div>
                <div className="text-slate-300">· {e.company}</div>
                <div className="ml-auto text-sm text-slate-400">{e.period}</div>
              </div>
              <ul className="mt-3 list-disc list-inside text-slate-300">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between mb-6">
          <h3 className="text-2xl font-bold">Selected Projects</h3>
          <div className="text-sm text-slate-400">More on request</div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, idx) => (
            <article key={idx} className="group rounded-2xl p-5 bg-white/5 border border-white/10 hover:bg-white/[0.07] transition">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <span className="text-xs px-2 py-1 rounded-full bg-black/40 border border-white/10">{p.year}</span>
              </div>
              <p className="mt-2 text-slate-300">{p.summary}</p>
              <p className="mt-2 text-slate-400 text-sm">{p.impact}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-black/30 border border-white/10">{t}</span>
                ))}
              </div>
              {p.links && p.links.length > 0 && (
                <div className="mt-3 flex gap-3 text-sm">
                  {p.links.map((l, i) => (
                    <a key={i} href={l.href} target="_blank" rel="noreferrer" className="underline decoration-dotted underline-offset-4">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-10">
        <h3 className="text-2xl font-bold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10">{s}</span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl p-8 bg-white/5 border border-white/10 text-center">
          <h3 className="text-2xl font-bold">Let’s build something useful.</h3>
          <p className="mt-2 text-slate-300">
            I take on high‑leverage problems in AI, automation, and systems. Mentorship and collaborations welcome.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="mailto:olevester.joram123@gmail.com"
              className="px-4 py-2 rounded-2xl bg-sky-500/90 hover:bg-sky-400 text-slate-900 font-semibold"
            >
              Email Anthony
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-olevester"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
        <footer className="py-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} Anthony Olevester</footer>
      </section>
    </div>
  );
}
