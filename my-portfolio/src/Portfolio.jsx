import React, { useEffect, useState } from "react";

const profiles = [
  {
    id: "robotics",
    title: "Robotics",
    strap: "Main focus",
    summary: "Robotic arms, mechatronics, embedded devices, and simulation alignment.",
  },
  {
    id: "general",
    title: "General",
    strap: "Broad profile",
    summary: "The mixed portfolio view across systems, automation, products, and research.",
  },
  {
    id: "ai",
    title: "AI Focused",
    strap: "AI systems",
    summary: "Agents, intelligence infrastructure, scientific AI, and critique-correction loops.",
  },
];

const roboticsProjects = [
  {
    title: "Modular Vision-Guided Robotic Arm",
    year: "2022",
    tag: "B.Tech Final Year",
    summary:
      "Built a modular robotic arm that mimics observed motion using camera-based perception and real-time actuator control.",
    details: [
      "Progressed from scrap-material prototypes to a fully 3D-printed arm.",
      "Designed interchangeable segments and end-effectors.",
      "Focused on motion mimicry and extensibility.",
    ],
    stack: ["Robotics", "Computer Vision", "3D Printing", "Control"],
  },
  {
    title: "Smart Insulin Pen Step Counter",
    year: "2023",
    tag: "Medical Mechatronics",
    summary:
      "Designed a KiCad PCB step counter to convert a standard insulin pen into a smart injector with usage tracking.",
    details: [
      "Tracked mechanical dose-delivery steps in compact hardware.",
      "Enabled communication with a mobile device for monitoring.",
      "Worked under size, power, and reliability constraints.",
    ],
    stack: ["KiCad", "Embedded Systems", "PCB Design", "Medical Devices"],
  },
  {
    title: "Sim-to-Sim Robotics Alignment",
    year: "2025",
    tag: "Research",
    summary:
      "Built a deterministic alignment pipeline for PyBullet and MuJoCo to improve simulator consistency in contact-rich scenarios.",
    details: [
      "Implemented deterministic pairing and gating.",
      "Validated long-horizon behavior for reliability.",
      "Used residual correction ideas for alignment.",
    ],
    stack: ["PyBullet", "MuJoCo", "Simulation", "Validation"],
  },
];

const roboticsVideos = [
  {
    id: "QQCtvQF9WvE",
    title: "3D printed robotic arm with reassembly capabilities",
    note: "Featured demo from your YouTube channel.",
  },
  {
    id: "3RM1WVW3LOU",
    title: "3D printing of Robotic arm Part 1",
    note: "Fabrication-stage clip tied to the arm build process.",
  },
  {
    id: "WbEvZmzOUFc",
    title: "Degree of Freedom // Number of axis",
    note: "Short concept video connected to the arm mechanics and design.",
  },
];

const generalProjects = [
  {
    title: "Hadron Web / Particle Visualizer",
    year: "2025",
    summary: "Interactive 3D teaching interface for hadrons, quarks, and decay-chain understanding.",
    stack: ["Three.js", "JavaScript", "WebGL"],
  },
  {
    title: "WhatsApp Smart Bridge",
    year: "2025",
    summary: "Chat-intelligence pipeline for text, voice notes, screenshots, OCR, and structured evidence outputs.",
    stack: ["Python", "WhisperX", "PaddleOCR"],
  },
  {
    title: "UTBMS Legal Billing Extractor",
    year: "2025",
    summary: "LLM extraction with validate -> critique -> correct loops until structured output passes strict checks.",
    stack: ["Python", "LLMs", "Validation"],
  },
  {
    title: "Boutique Management System",
    year: "2025",
    summary: "Full-stack retail operations app for vendors, stock, QR billing, and printable invoices.",
    stack: ["React", "Node.js", "MongoDB"],
  },
];

const experience = [
  {
    role: "Lead Research Engineer",
    company: "Rapture Twelve Private Limited",
    period: "2022 - 2026",
    bullets: [
      "Led projects across robotics-adjacent monitoring, AI systems, automation, and research engineering workflows.",
      "Built modular codebases and validation loops for collaborative prototype work.",
    ],
  },
  {
    role: "Devices and Automation Engineer",
    company: "Biocon",
    period: "2022 - 2024",
    bullets: [
      "Worked on smart injector systems, step-count hardware, and medical-device prototyping.",
      "Contributed embedded logic, hardware design, and rapid prototyping.",
    ],
  },
  {
    role: "B.Tech, National Institute of Technology Puducherry",
    company: "Systems and Robotics Focus",
    period: "2018 - 2022",
    bullets: [
      "Built a modular vision-guided robotic arm as a final-year project.",
    ],
  },
];

const aiBuckets = [
  {
    title: "Core AI and Agent Systems",
    items: [
      "Genesis self-evolving AI system with perception, neural core, sandboxed execution, and rewards.",
      "AI code-generation pipeline with manager -> builder -> evaluator -> tester loops.",
      "Repeated pattern: generation plus critique plus correction instead of trusting first-pass output.",
    ],
  },
  {
    title: "Internet-Scale Intelligence",
    items: [
      "Innovation intelligence engine that links GitHub, papers, patents, funding, and jobs.",
      "Massive repo scanner biased toward edge repositories instead of only popular ones.",
      "Repo intelligence pipeline built around canonical roots, snapshot caches, signals, and fanout.",
    ],
  },
  {
    title: "Scientific and Applied AI",
    items: [
      "RNA 3D ensemble correction model over RhoFold, RNAErnie, RiNALMo, and Uni-RNA outputs.",
      "Transformer genome mutation model for learned mutation improvement.",
      "CIP dark matter residual-analysis pipeline and applied systems like UTBMS, Smart Bridge, and audio security.",
    ],
  },
];

const roboticsSkills = [
  "Robotic System Design",
  "Computer Vision",
  "Embedded Systems",
  "KiCad",
  "SolidWorks",
  "PyBullet",
  "MuJoCo",
  "Docker",
];

const aiSkills = [
  "Python",
  "PyTorch",
  "JAX",
  "Transformers",
  "WhisperX",
  "PaddleOCR",
  "FAISS",
  "Milvus",
  "Residual Learning",
  "Evaluation Loops",
];

const copy = {
  robotics: {
    eyebrow: "Robotics first. AI where it earns its place.",
    heading: "Choose the robotics view when you want the physical systems story.",
    lead:
      "This track foregrounds robotic builds, mechatronics, embedded design, and the arm project from my B.Tech final year, including videos from the build and demo process.",
  },
  general: {
    eyebrow: "Broad engineering profile.",
    heading: "Choose the general view for the mixed portfolio.",
    lead:
      "This is the broader version of the portfolio: robotics, products, automation systems, research experiments, and full-stack work in one place.",
  },
  ai: {
    eyebrow: "AI systems track.",
    heading: "Choose the AI view for the architecture and intelligence-engine story.",
    lead:
      "This track organizes my AI work into systems: agent loops, intelligence infrastructure, scientific correction pipelines, and residual-learning patterns.",
  },
};

function Selector({ active, onSelect }) {
  return (
    <section className="section">
      <div className="section-head compact">
        <h3>Portfolio selector</h3>
        <p>
          The page is now structured as profiles. Adding a fourth later means adding one new
          card and one new content section.
        </p>
      </div>
      <div className="profile-grid">
        {profiles.map((profile) => (
          <button
            key={profile.id}
            className={`profile-card ${active === profile.id ? "active" : ""}`}
            onClick={() => onSelect(profile.id)}
            type="button"
          >
            <span className="strap">{profile.strap}</span>
            <h4>{profile.title}</h4>
            <p>{profile.summary}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

function RoboticsView() {
  return (
    <>
      <section className="section">
        <div className="section-head">
          <h3>Robotic arm videos</h3>
          <p>Embedded from your YouTube channel so the robotics page shows the actual build work.</p>
        </div>
        <div className="video-grid">
          {roboticsVideos.map((video, index) => (
            <article className={`video-card ${index === 0 ? "featured" : ""}`} key={video.id}>
              <div className="frame">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <h4>{video.title}</h4>
              <p>{video.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h3>Robotics projects</h3>
          <p>Physical systems, embedded logic, and simulation reliability.</p>
        </div>
        <div className="grid">
          {roboticsProjects.map((project) => (
            <article className="card" key={project.title}>
              <div className="row">
                <span className="pill">{project.tag}</span>
                <span className="year">{project.year}</span>
              </div>
              <h4>{project.title}</h4>
              <p className="summary">{project.summary}</p>
              <ul className="list">
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

      <section className="section">
        <div className="section-head">
          <h3>Robotics tools</h3>
          <p>Skills weighted toward prototyping, simulation, and embedded work.</p>
        </div>
        <div className="chips">
          {roboticsSkills.map((skill) => (
            <span className="chip" key={skill}>{skill}</span>
          ))}
        </div>
      </section>
    </>
  );
}

function GeneralView() {
  return (
    <>
      <section className="section">
        <div className="section-head">
          <h3>General portfolio</h3>
          <p>The older broad profile, cleaned up and kept as a separate track.</p>
        </div>
        <div className="grid">
          {generalProjects.map((project) => (
            <article className="card" key={project.title}>
              <div className="row">
                <span className="pill">General</span>
                <span className="year">{project.year}</span>
              </div>
              <h4>{project.title}</h4>
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

      <section className="section">
        <div className="section-head">
          <h3>Experience</h3>
          <p>Research engineering across devices, automation, AI pipelines, and prototypes.</p>
        </div>
        <div className="grid">
          {experience.map((item) => (
            <article className="card" key={`${item.role}-${item.period}`}>
              <div className="row">
                <span className="pill">{item.company}</span>
                <span className="year">{item.period}</span>
              </div>
              <h4>{item.role}</h4>
              <ul className="list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function AIView() {
  return (
    <>
      <section className="section">
        <div className="section-head">
          <h3>AI system map</h3>
          <p>This is the structured version of your AI dump, grouped by how the systems actually fit together.</p>
        </div>
        <div className="grid">
          {aiBuckets.map((bucket) => (
            <article className="card" key={bucket.title}>
              <span className="pill">AI Track</span>
              <h4>{bucket.title}</h4>
              <ul className="list">
                {bucket.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h3>AI stack</h3>
          <p>Models, retrieval, multimodal perception, and infrastructure used across the AI-heavy work.</p>
        </div>
        <div className="chips">
          {aiSkills.map((skill) => (
            <span className="chip" key={skill}>{skill}</span>
          ))}
        </div>
      </section>
    </>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("robotics");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (profiles.some((profile) => profile.id === hash)) {
      setActive(hash);
    }
  }, []);

  const selectProfile = (id) => {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const activeCopy = copy[active];

  return (
    <div className="site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap');
        :root{--bg:#091018;--text:#ecf4fb;--muted:#9ab0c3;--line:rgba(173,216,255,.14);--cyan:#72e6ff;--teal:#7bf3c8;--amber:#ffcf70}
        *{box-sizing:border-box}
        body{margin:0;font-family:"IBM Plex Sans",sans-serif;color:var(--text);background:radial-gradient(circle at top left, rgba(114,230,255,.12), transparent 32%),radial-gradient(circle at top right, rgba(255,207,112,.08), transparent 26%),linear-gradient(180deg,#08111a 0%,#091018 45%,#060b11 100%)}
        a{color:inherit}
        button{font:inherit}
        .site{min-height:100vh}
        .shell{width:min(1180px,calc(100% - 32px));margin:0 auto}
        .header{position:sticky;top:0;z-index:20;background:rgba(6,11,17,.78);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,.06)}
        .nav-wrap{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:14px 0}
        .brand{display:flex;align-items:center;gap:14px}
        .mark{width:44px;height:44px;border-radius:14px;display:grid;place-items:center;font:700 16px/1 "Space Grotesk",sans-serif;color:#041018;background:linear-gradient(135deg,var(--cyan),var(--teal))}
        .brand h1{margin:0;font:700 18px/1.1 "Space Grotesk",sans-serif}
        .brand p{margin:3px 0 0;color:var(--muted);font-size:12px}
        .hero{padding:68px 0 18px}
        .hero-grid{display:grid;gap:24px}
        @media(min-width:980px){.hero-grid{grid-template-columns:minmax(0,1.2fr) minmax(320px,.8fr)}}
        .eyebrow{display:inline-flex;align-items:center;gap:10px;padding:8px 14px;border-radius:999px;border:1px solid rgba(114,230,255,.22);background:rgba(114,230,255,.08);color:#d9faff;font-size:13px}
        .eyebrow:before{content:"";width:8px;height:8px;border-radius:999px;background:var(--teal)}
        h2{margin:18px 0 0;font:700 clamp(36px,8vw,70px)/.95 "Space Grotesk",sans-serif;letter-spacing:-.04em;max-width:11ch}
        .lead{margin:18px 0 0;max-width:720px;font-size:18px;line-height:1.7;color:var(--muted)}
        .hero-card,.profile-card,.card,.video-card{border:1px solid var(--line);border-radius:26px;background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02))}
        .hero-card{padding:22px}
        .hero-card h3,.card h4,.video-card h4,.profile-card h4{margin:0;font-family:"Space Grotesk",sans-serif}
        .hero-card p,.profile-card p,.summary,.video-card p,.section-head p{color:var(--muted);line-height:1.7}
        .list{margin:14px 0 0;padding-left:18px;color:var(--muted);line-height:1.7}
        .cta{margin-top:28px;display:flex;flex-wrap:wrap;gap:12px}
        .btn{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 18px;border-radius:14px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);text-decoration:none;font-weight:600}
        .btn.primary{color:#041018;background:linear-gradient(135deg,var(--cyan),var(--teal));border:none}
        .section{padding:28px 0}
        .section-head{display:flex;justify-content:space-between;align-items:end;gap:16px;margin-bottom:16px}
        .section-head h3{margin:0;font:700 clamp(28px,4vw,38px)/1 "Space Grotesk",sans-serif}
        .section-head p{margin:0;max-width:620px}
        .profile-grid,.grid{display:grid;gap:16px}
        .profile-grid{grid-template-columns:1fr}
        .grid{grid-template-columns:1fr}
        @media(min-width:860px){.profile-grid,.grid{grid-template-columns:repeat(2,1fr)}}
        .profile-card{padding:22px;text-align:left;color:var(--text);cursor:pointer}
        .profile-card.active{outline:2px solid rgba(114,230,255,.32)}
        .strap,.pill{display:inline-flex;padding:6px 10px;border-radius:999px;font-size:12px;border:1px solid rgba(114,230,255,.18);background:rgba(114,230,255,.1);color:#d8fbff}
        .profile-card h4{margin-top:14px;font-size:26px}
        .card,.video-card{padding:20px}
        .row{display:flex;align-items:center;justify-content:space-between;gap:12px}
        .year{color:#dcecf9;font-size:13px}
        .summary{margin-top:12px}
        .chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
        .chip{padding:8px 12px;border-radius:999px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);font-size:13px}
        .video-grid{display:grid;gap:18px}
        @media(min-width:920px){.video-grid{grid-template-columns:repeat(2,1fr)}.video-card.featured{grid-column:1 / -1}}
        .frame{position:relative;width:100%;padding-top:56.25%;overflow:hidden;border-radius:16px;background:#041018}
        .frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
        .contact{margin:24px 0 48px;padding:28px;border-radius:28px;border:1px solid var(--line);background:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.03))}
        .contact h3{margin:0;font:700 clamp(28px,4vw,42px)/1 "Space Grotesk",sans-serif}
        .contact p{margin:12px 0 0;color:var(--muted);max-width:720px;line-height:1.7}
        .footer{padding:0 0 28px;color:#7991a7;font-size:12px}
      `}</style>

      <header className="header">
        <div className="shell nav-wrap">
          <div className="brand">
            <div className="mark">AO</div>
            <div>
              <h1>Anthony Olevester</h1>
              <p>Portfolio hub for robotics, general engineering, and AI-focused views</p>
            </div>
          </div>
        </div>
      </header>

      <main className="shell">
        <section className="hero">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">One URL. Multiple portfolio lenses.</div>
              <h2>Choose which version of my work you want to show.</h2>
              <p className="lead">
                Instead of one mixed portfolio for everyone, this page now lets people open the
                track that matches the reason they are evaluating me: robotics, general engineering,
                or AI-focused systems. Robotics is the default.
              </p>
              <div className="cta">
                <button className="btn primary" onClick={() => selectProfile("robotics")} type="button">Robotics</button>
                <button className="btn" onClick={() => selectProfile("general")} type="button">General</button>
                <button className="btn" onClick={() => selectProfile("ai")} type="button">AI</button>
              </div>
            </div>
            <aside className="hero-card">
              <h3>Why this structure</h3>
              <p>
                Different viewers want different narratives. This keeps one portfolio URL while
                letting you switch the story cleanly.
              </p>
            </aside>
          </div>
        </section>

        <Selector active={active} onSelect={selectProfile} />

        <section className="section">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">{activeCopy.eyebrow}</div>
              <h2>{activeCopy.heading}</h2>
              <p className="lead">{activeCopy.lead}</p>
            </div>
            <aside className="hero-card">
              <h3>Current selection</h3>
              <p>
                <strong>{profiles.find((profile) => profile.id === active)?.title}</strong> is active.
                This can be expanded later with more tracks without redesigning the whole site.
              </p>
            </aside>
          </div>
        </section>

        {active === "robotics" && <RoboticsView />}
        {active === "general" && <GeneralView />}
        {active === "ai" && <AIView />}

        <section className="contact">
          <h3>Open to robotics, AI, and research engineering work.</h3>
          <p>
            I am most useful on problems that need someone comfortable moving from concept
            to prototype to validated system, especially where physical devices and intelligent
            software need to work together.
          </p>
          <div className="cta">
            <a className="btn primary" href="mailto:olevester.joram123@gmail.com">olevester.joram123@gmail.com</a>
            <a className="btn" href="https://www.linkedin.com/in/anthony-olevester" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>

        <div className="footer">© {new Date().getFullYear()} Anthony Olevester</div>
      </main>
    </div>
  );
}
