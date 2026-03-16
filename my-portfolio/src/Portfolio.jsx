import React from "react";

const roboticsProjects = [
  {
    title: "Modular Vision-Guided Robotic Arm",
    year: "2022",
    tag: "Flagship Robotics",
    summary:
      "Designed and built a modular robotic arm that mimics human motion through camera-based perception and real-time actuator control.",
    details: [
      "Mapped observed motion into live mechanical response.",
      "Built interchangeable arm segments and end-effectors for extensibility.",
      "Progressed from scrap-material prototypes to a fully 3D-printed working arm.",
    ],
    stack: ["Robotics", "Computer Vision", "3D Printing", "Control Systems"],
  },
  {
    title: "Smart Insulin Pen Step Counter",
    year: "2023",
    tag: "Medical Mechatronics",
    summary:
      "Developed a KiCad-designed PCB step counter that upgrades a standard insulin pen into a smart injector with usage tracking.",
    details: [
      "Tracked mechanical dose-delivery steps with compact embedded hardware.",
      "Enabled communication to a mobile device for monitoring.",
      "Engineered under tight size, power, and reliability constraints.",
    ],
    stack: ["KiCad", "Embedded Systems", "PCB Design", "Medical Devices"],
  },
  {
    title: "Motorized Intelligent Pen Injector",
    year: "2024",
    tag: "Closed-Loop Device",
    summary:
      "Worked on a motorized insulin injector that interprets glucose data and computes safe automated dosage actions.",
    details: [
      "Implemented embedded decision logic for assisted delivery.",
      "Focused on closed-loop behavior between sensing, dosage logic, and actuation.",
      "Contributed to early-stage IP documentation before exit.",
    ],
    stack: ["Embedded Control", "Decision Systems", "Actuation", "Biomedical Engineering"],
  },
  {
    title: "Sim-to-Sim Robotics Alignment Pipeline",
    year: "2025",
    tag: "Research",
    summary:
      "Built a deterministic alignment and residual-correction pipeline to reconcile PyBullet and MuJoCo dynamics in contact-rich scenarios.",
    details: [
      "Implemented deterministic pairing and alignment gating.",
      "Validated long-horizon consistency for control and planning reliability.",
      "Focused on simulator fidelity for transferable robotics experiments.",
    ],
    stack: ["PyBullet", "MuJoCo", "Simulation", "Validation"],
  },
];

const aiProjects = [
  {
    title: "AI Telemetry Monitoring Systems",
    year: "2022-2026",
    summary:
      "Designed AI-driven monitoring systems using time-series analysis, anomaly detection, and statistical metrics for operational insight.",
    stack: ["Python", "Time-Series", "Anomaly Detection", "Evaluation Loops"],
  },
  {
    title: "Perception Pipelines for Structured Data",
    year: "2024-2026",
    summary:
      "Built OCR, speech-to-text, and vision pipelines that transform messy real-world inputs into usable datasets and decision signals.",
    stack: ["WhisperX", "PaddleOCR", "Multimodal AI", "Data Engineering"],
  },
  {
    title: "Evolutionary Logic Circuits",
    year: "2025",
    summary:
      "Trained populations of circuit genomes with mutation, crossover, and selection for objective-driven search beyond gradient methods.",
    stack: ["JAX", "EvoJAX", "Evolutionary ML", "Simulation"],
  },
  {
    title: "RNA 3D Ensemble Correction Model",
    year: "2025",
    summary:
      "Trained a correction MLP to refine 3D structure predictions from multiple model outputs with iterative validation.",
    stack: ["PyTorch", "Bioinformatics", "3D Learning", "Model Evaluation"],
  },
];

const experience = [
  {
    role: "Lead Research Engineer",
    company: "Rapture Twelve Private Limited",
    period: "2022 - 2026",
    bullets: [
      "Led applied research projects across robotics-adjacent monitoring, AI systems, automation, and experiment-friendly engineering workflows.",
      "Built modular codebases and validation loops suitable for collaborative research teams and funded prototypes.",
    ],
  },
  {
    role: "Devices and Automation Engineer",
    company: "Biocon",
    period: "2022 - 2024",
    bullets: [
      "Worked on smart injector systems, step-count hardware, and medical-device prototyping under practical hardware constraints.",
      "Contributed embedded logic, hardware design, and rapid prototyping for intelligent delivery devices.",
    ],
  },
  {
    role: "B.Tech, National Institute of Technology Puducherry",
    company: "Systems and Robotics Focus",
    period: "2018 - 2022",
    bullets: [
      "Built a modular vision-guided robotic arm as a final-year project with motion mimicry and interchangeable mechanical architecture.",
    ],
  },
];

const skills = [
  "Robotic System Design",
  "Perception to Control Pipelines",
  "Computer Vision",
  "Embedded Systems",
  "PCB Design",
  "KiCad",
  "SolidWorks",
  "Unity Simulation",
  "PyBullet",
  "MuJoCo",
  "Python",
  "PyTorch",
  "JAX",
  "WhisperX",
  "PaddleOCR",
  "PostgreSQL",
  "pgvector",
  "FAISS",
  "Milvus",
  "Docker",
  "GitHub Actions",
];

const metrics = [
  { value: "4", label: "Core robotics and mechatronics builds" },
  { value: "2022-2026", label: "Research engineering span reflected here" },
  { value: "Perception -> Control", label: "Primary systems pattern" },
];

export default function Portfolio() {
  return (
    <div className="site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        :root{
          --bg:#091018;
          --bg-soft:#0f1b28;
          --panel:#102131;
          --panel-2:#14293d;
          --line:rgba(173, 216, 255, 0.14);
          --text:#ecf4fb;
          --muted:#9ab0c3;
          --cyan:#72e6ff;
          --teal:#7bf3c8;
          --amber:#ffcf70;
          --glow:rgba(114, 230, 255, 0.18);
        }
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{
          margin:0;
          font-family:"IBM Plex Sans",sans-serif;
          color:var(--text);
          background:
            radial-gradient(circle at top left, rgba(114,230,255,.12), transparent 32%),
            radial-gradient(circle at top right, rgba(123,243,200,.10), transparent 28%),
            linear-gradient(180deg, #08111a 0%, #091018 45%, #060b11 100%);
        }
        a{color:inherit}
        .site{min-height:100vh;overflow:hidden}
        .shell{width:min(1180px, calc(100% - 32px));margin:0 auto}
        .header{
          position:sticky;top:0;z-index:50;
          backdrop-filter:blur(14px);
          background:rgba(6,11,17,.72);
          border-bottom:1px solid rgba(255,255,255,.06);
        }
        .nav-wrap{
          display:flex;align-items:center;justify-content:space-between;gap:18px;
          padding:14px 0;
        }
        .brand{display:flex;align-items:center;gap:14px}
        .mark{
          width:44px;height:44px;border-radius:14px;
          display:grid;place-items:center;
          font-family:"Space Grotesk",sans-serif;
          font-weight:700;
          letter-spacing:.08em;
          color:#041018;
          background:linear-gradient(135deg, var(--cyan), var(--teal));
          box-shadow:0 0 28px var(--glow);
        }
        .brand h1{
          margin:0;
          font:700 18px/1.1 "Space Grotesk",sans-serif;
          letter-spacing:.02em;
        }
        .brand p{
          margin:3px 0 0;
          color:var(--muted);
          font-size:12px;
        }
        .nav{
          display:none;
          gap:18px;
          font-size:14px;
          color:#d6e8f7;
        }
        .nav a{text-decoration:none}
        .nav a:hover{color:var(--cyan)}
        @media(min-width:820px){.nav{display:flex}}

        .hero{
          padding:68px 0 36px;
          position:relative;
        }
        .hero-grid{
          display:grid;
          gap:24px;
        }
        @media(min-width:980px){
          .hero-grid{grid-template-columns:minmax(0,1.25fr) minmax(320px,.75fr);align-items:start}
        }
        .eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          padding:8px 14px;border-radius:999px;
          border:1px solid rgba(114,230,255,.22);
          background:rgba(114,230,255,.08);
          color:#d9faff;font-size:13px;
        }
        .eyebrow::before{
          content:"";
          width:8px;height:8px;border-radius:999px;background:var(--teal);
          box-shadow:0 0 0 6px rgba(123,243,200,.14);
        }
        .hero h2{
          margin:18px 0 0;
          font:700 clamp(40px, 8vw, 76px)/.95 "Space Grotesk",sans-serif;
          letter-spacing:-.04em;
          max-width:9.5ch;
        }
        .hero h2 span{color:var(--cyan)}
        .lead{
          margin:18px 0 0;
          max-width:720px;
          font-size:18px;
          line-height:1.7;
          color:var(--muted);
        }
        .cta{
          margin-top:28px;
          display:flex;flex-wrap:wrap;gap:12px;
        }
        .btn{
          display:inline-flex;align-items:center;justify-content:center;
          min-height:46px;
          padding:0 18px;
          border-radius:14px;
          border:1px solid rgba(255,255,255,.1);
          background:rgba(255,255,255,.04);
          text-decoration:none;
          font-weight:600;
        }
        .btn.primary{
          color:#041018;
          background:linear-gradient(135deg, var(--cyan), var(--teal));
          border:none;
        }
        .btn:hover{transform:translateY(-1px)}
        .hero-note{
          margin-top:18px;
          color:#dceaf6;
          font-size:14px;
        }
        .hero-card{
          position:relative;
          padding:22px;
          border:1px solid var(--line);
          border-radius:28px;
          background:
            linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02)),
            linear-gradient(135deg, rgba(114,230,255,.06), rgba(123,243,200,.04));
          box-shadow:0 18px 60px rgba(0,0,0,.22);
        }
        .hero-card::after{
          content:"";
          position:absolute;inset:auto -60px -70px auto;
          width:180px;height:180px;border-radius:999px;
          background:radial-gradient(circle, rgba(114,230,255,.22), transparent 70%);
          pointer-events:none;
        }
        .hero-card h3{
          margin:0 0 10px;
          font:700 24px/1.05 "Space Grotesk",sans-serif;
        }
        .hero-card p{
          margin:0;
          color:var(--muted);
          line-height:1.7;
        }
        .focus-list{
          margin:18px 0 0;padding:0;list-style:none;
          display:grid;gap:12px;
        }
        .focus-list li{
          padding:14px 16px;
          border-radius:18px;
          border:1px solid rgba(255,255,255,.06);
          background:rgba(6,15,24,.5);
        }
        .focus-list strong{display:block;font-size:14px;color:#f4fbff}
        .focus-list span{display:block;margin-top:4px;color:var(--muted);font-size:13px;line-height:1.5}

        .metrics{
          padding:18px 0 10px;
          display:grid;gap:14px;
        }
        @media(min-width:760px){.metrics{grid-template-columns:repeat(3,1fr)}}
        .metric{
          padding:18px 20px;
          border:1px solid var(--line);
          border-radius:22px;
          background:rgba(255,255,255,.03);
        }
        .metric strong{
          display:block;
          font:700 28px/1 "Space Grotesk",sans-serif;
          color:var(--amber);
        }
        .metric span{
          display:block;
          margin-top:8px;
          color:var(--muted);
          font-size:14px;
          line-height:1.5;
        }

        .section{padding:34px 0}
        .section-head{
          display:flex;justify-content:space-between;align-items:end;gap:16px;
          margin-bottom:18px;
        }
        .section-head h3{
          margin:0;
          font:700 clamp(28px, 4vw, 40px)/1 "Space Grotesk",sans-serif;
          letter-spacing:-.03em;
        }
        .section-head p{
          margin:0;color:var(--muted);max-width:560px;line-height:1.6;
        }
        .grid{
          display:grid;gap:18px;
        }
        .grid.two{
          grid-template-columns:1fr;
        }
        @media(min-width:920px){.grid.two{grid-template-columns:repeat(2,1fr)}}
        .card{
          padding:22px;
          border-radius:26px;
          border:1px solid var(--line);
          background:linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.025));
          position:relative;
        }
        .card::before{
          content:"";
          position:absolute;left:22px;right:22px;top:0;height:1px;
          background:linear-gradient(90deg, transparent, rgba(114,230,255,.45), transparent);
        }
        .pill{
          display:inline-flex;
          padding:6px 10px;
          border-radius:999px;
          font-size:12px;
          color:#d8fbff;
          background:rgba(114,230,255,.1);
          border:1px solid rgba(114,230,255,.18);
        }
        .card-head{
          margin-top:14px;
          display:flex;align-items:start;justify-content:space-between;gap:16px;
        }
        .card-head h4{
          margin:0;
          font:700 22px/1.1 "Space Grotesk",sans-serif;
        }
        .year{
          white-space:nowrap;
          color:#dcecf9;
          font-size:13px;
        }
        .summary{
          margin:14px 0 0;
          color:#dbe7f2;
          line-height:1.7;
        }
        .detail-list{
          margin:14px 0 0;
          padding-left:18px;
          color:var(--muted);
          line-height:1.7;
        }
        .chips{
          display:flex;flex-wrap:wrap;gap:8px;
          margin-top:16px;
        }
        .chip{
          padding:7px 11px;
          border-radius:999px;
          font-size:12px;
          color:#dbeffc;
          background:rgba(7,17,27,.78);
          border:1px solid rgba(255,255,255,.08);
        }
        .experience{
          display:grid;gap:14px;
        }
        .exp{
          padding:20px 22px;
          border-radius:24px;
          border:1px solid var(--line);
          background:rgba(255,255,255,.03);
        }
        .exp-top{
          display:flex;justify-content:space-between;gap:18px;align-items:baseline;flex-wrap:wrap;
        }
        .exp-top h4{
          margin:0;
          font:700 20px/1.1 "Space Grotesk",sans-serif;
        }
        .exp-top span{color:var(--muted)}
        .exp ul{
          margin:12px 0 0;
          padding-left:18px;
          color:#d4e2ee;
          line-height:1.7;
        }
        .skills{
          display:flex;flex-wrap:wrap;gap:10px;
        }
        .skill{
          padding:10px 14px;
          border-radius:999px;
          background:rgba(255,255,255,.03);
          border:1px solid rgba(255,255,255,.08);
          color:#dcf1ff;
          font-size:14px;
        }
        .contact{
          margin:18px 0 48px;
          padding:28px;
          border-radius:28px;
          border:1px solid var(--line);
          background:
            radial-gradient(circle at top right, rgba(255,207,112,.12), transparent 24%),
            linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
        }
        .contact h3{
          margin:0;
          font:700 clamp(28px, 4vw, 42px)/1 "Space Grotesk",sans-serif;
          letter-spacing:-.03em;
        }
        .contact p{
          margin:12px 0 0;
          color:var(--muted);
          max-width:680px;
          line-height:1.7;
        }
        .footer{
          padding:0 0 28px;
          color:#7991a7;
          font-size:12px;
        }
      `}</style>

      <header className="header">
        <div className="shell nav-wrap">
          <div className="brand">
            <div className="mark">AO</div>
            <div>
              <h1>Anthony Olevester</h1>
              <p>Robotics and AI Research Engineer</p>
            </div>
          </div>
          <nav className="nav">
            <a href="#robotics">Robotics</a>
            <a href="#ai">AI</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="shell">
        <section className="hero">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Robotics first. AI where it earns its place.</div>
              <h2>
                Building <span>robotic systems</span> that connect perception,
                control, and real-world delivery.
              </h2>
              <p className="lead">
                I work across robotics, mechatronics, embedded systems, and applied AI.
                My strongest projects sit at the boundary between physical devices and
                intelligent software: vision-guided arms, smart injectors, telemetry
                monitoring, simulation alignment, and research-grade experimentation.
              </p>
              <div className="cta">
                <a className="btn primary" href="#robotics">View robotics work</a>
                <a className="btn" href="mailto:olevester.joram123@gmail.com">Email me</a>
                <a className="btn" href="https://www.linkedin.com/in/anthony-olevester" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
              <div className="hero-note">
                Current reference window: work spanning NIT Puducherry, Biocon, and Rapture Twelve.
              </div>
            </div>

            <aside className="hero-card">
              <h3>Primary focus</h3>
              <p>
                Robotics is the headline. AI is the enabling layer for perception,
                telemetry analysis, simulation, and decision support.
              </p>
              <ul className="focus-list">
                <li>
                  <strong>Robotic systems and mechatronics</strong>
                  <span>Mechanical design, embedded logic, actuation, prototyping, and modular architectures.</span>
                </li>
                <li>
                  <strong>Perception and evaluation loops</strong>
                  <span>Vision, speech, OCR, anomaly detection, and experiment pipelines that produce actionable signals.</span>
                </li>
                <li>
                  <strong>Simulation and research engineering</strong>
                  <span>Validation-heavy workflows for reproducible experiments, alignment studies, and model iteration.</span>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="metrics">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section className="section" id="robotics">
          <div className="section-head">
            <h3>Robotics</h3>
            <p>
              The strongest body of work here is physical systems: robotic manipulation,
              medical mechatronics, and simulation reliability for downstream control.
            </p>
          </div>
          <div className="grid two">
            {roboticsProjects.map((project) => (
              <article className="card" key={project.title}>
                <span className="pill">{project.tag}</span>
                <div className="card-head">
                  <h4>{project.title}</h4>
                  <span className="year">{project.year}</span>
                </div>
                <p className="summary">{project.summary}</p>
                <ul className="detail-list">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="chips">
                  {project.stack.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="ai">
          <div className="section-head">
            <h3>AI</h3>
            <p>
              AI is positioned as the secondary layer that improves robotics, monitoring,
              structured perception, and exploratory research systems.
            </p>
          </div>
          <div className="grid two">
            {aiProjects.map((project) => (
              <article className="card" key={project.title}>
                <span className="pill">AI Support Layer</span>
                <div className="card-head">
                  <h4>{project.title}</h4>
                  <span className="year">{project.year}</span>
                </div>
                <p className="summary">{project.summary}</p>
                <div className="chips">
                  {project.stack.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-head">
            <h3>Experience</h3>
            <p>
              Research engineering across devices, automation, AI pipelines, and reproducible experimentation.
            </p>
          </div>
          <div className="experience">
            {experience.map((item) => (
              <article className="exp" key={`${item.role}-${item.period}`}>
                <div className="exp-top">
                  <h4>{item.role}</h4>
                  <span>{item.company} | {item.period}</span>
                </div>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h3>Tools and Skills</h3>
            <p>
              The stack below reflects the capabilities most relevant to robotics-led engineering work.
            </p>
          </div>
          <div className="skills">
            {skills.map((skill) => (
              <span className="skill" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <h3>Open to robotics, AI, and research engineering work.</h3>
          <p>
            I’m most useful on projects that need someone comfortable moving from concept
            to prototype to validated system, especially where physical devices and
            intelligent software need to work together.
          </p>
          <div className="cta">
            <a className="btn primary" href="mailto:olevester.joram123@gmail.com">olevester.joram123@gmail.com</a>
            <a className="btn" href="https://anthony-olevester.github.io/Portfolio/" target="_blank" rel="noreferrer">Current portfolio URL</a>
          </div>
        </section>

        <div className="footer">© {new Date().getFullYear()} Anthony Olevester</div>
      </main>
    </div>
  );
}
