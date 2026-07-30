import { useEffect, useState } from "react";
import Section from "./components/Section";
import TrajectoryBackdrop from "./components/TrajectoryBackdrop";
import VideoCard from "./components/VideoCard";
import "./ai-evidence.css";
import {
  about,
  aiHierarchy,
  award,
  contact,
  credibilityItems,
  demoVideos,
  evidenceCases,
  experienceItems,
  flagshipResearch,
  heroMetrics,
  navigation,
  profile,
  researchFigures,
  selectedWork,
  strengths,
} from "./data/portfolioData";

function getNetworkKind(...values) {
  const text = values.join(" ").toLowerCase();

  if (
    text.includes("llm") ||
    text.includes("transformer") ||
    text.includes("agent") ||
    text.includes("rag") ||
    text.includes("embedding") ||
    text.includes("multimodal") ||
    text.includes("deep learning") ||
    text.includes("machine learning") ||
    text.includes("cnn") ||
    text.includes("lora") ||
    text.includes("pytorch") ||
    text.includes("jax") ||
    text.includes("intelligence") ||
    text.includes(" ai")
  ) {
    return "ai";
  }

  if (text.includes("sim") || text.includes("mujoco") || text.includes("pybullet") || text.includes("residual")) {
    return "simulation";
  }

  if (text.includes("robot") || text.includes("arm") || text.includes("opencv") || text.includes("vision")) {
    return "robotics";
  }

  if (text.includes("control") || text.includes("actuation") || text.includes("motor") || text.includes("feedback")) {
    return "control";
  }

  if (text.includes("embedded") || text.includes("kicad") || text.includes("device") || text.includes("edge")) {
    return "embedded";
  }

  return "research";
}

function ArchitectureTrace({ steps }) {
  return (
    <div className="architecture-trace" aria-label={`Architecture flow: ${steps.join(" to ")}`}>
      {steps.map((step, index) => (
        <div className="trace-fragment" key={`${step}-${index}`}>
          <span className="trace-step">{step}</span>
          {index < steps.length - 1 ? <span className="trace-arrow" aria-hidden="true">→</span> : null}
        </div>
      ))}
    </div>
  );
}

function ComparisonBars({ item }) {
  if (!item.comparison?.length) {
    return null;
  }

  const max = Math.max(...item.comparison.map((entry) => entry.value));
  const isError = item.title.includes("Residual");

  return (
    <div className="comparison-block">
      <p className="evidence-caption">{isError ? "Error comparison — lower is better" : "Relative output index"}</p>
      {item.comparison.map((entry) => (
        <div className="comparison-row" key={entry.label}>
          <div className="comparison-label">
            <span>{entry.label}</span>
            <strong>{entry.value}</strong>
          </div>
          <div className="comparison-track">
            <span style={{ width: `${Math.max(8, (entry.value / max) * 100)}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [navHidden, setNavHidden] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (currentY < 80) {
        setNavHidden(false);
      } else if (delta > 10) {
        setNavHidden(true);
      } else if (delta < -10) {
        setNavHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!activeImage) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeImage]);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-32% 0px -48% 0px",
        threshold: [0.12, 0.24, 0.42],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onPointerMove = (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <div className="site-shell">
      <TrajectoryBackdrop activeSection={activeSection} />

      <header className={`topbar${navHidden ? " is-hidden" : ""}`}>
        <a className="brand" href="#hero">
          <img className="brand-avatar" src={profile.image} alt={profile.alt} decoding="async" />
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.title}</small>
          </span>
        </a>

        <nav className="topnav" aria-label="Section navigation">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} data-label={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="hero" className="hero section">
          <div className="hero-copy">
            <div className="hero-identity">
              <img className="profile-photo" src={profile.image} alt={profile.alt} decoding="async" fetchPriority="high" />
              <div>
                <p className="profile-name">{profile.name}</p>
                <p className="profile-title">{profile.title}</p>
                <p className="profile-training-note">{profile.note}</p>
              </div>
            </div>

            <p className="hero-eyebrow">AI systems architecture · model adaptation · orchestration · scientific ML</p>
            <h1>I architect intelligence across models, agents, data, tools, and deployment.</h1>
            <p className="hero-lead">
              I build complete AI systems: CNN and transformer models, LoRA adaptation, retrieval and vector search,
              multimodal ingestion, stateful agent graphs, tool execution, evaluation harnesses, APIs, databases,
              observability, and production integration.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#architecture">See the architecture</a>
              <a className="button secondary" href="#proof">Inspect the proof</a>
              <a className="button secondary" href={contact.resume} target="_blank" rel="noreferrer">Resume</a>
            </div>

            <p className="hero-note">
              The claim is not that I know every AI technique. The evidence is that I can enter an underspecified AI problem,
              construct the stack, instrument it, expose failures, and push it toward a defensible result.
            </p>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-grid">
              {heroMetrics.map((metric) => (
                <article key={metric.value} className="metric-card network-node network-ai">
                  <h2>{metric.value}</h2>
                  <p>{metric.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="credibility-strip" aria-label="AI and machine-learning credibility highlights">
          {credibilityItems.map((item) => (
            <div key={item} className={`credibility-item network-node network-${getNetworkKind(item)}`}>
              {item}
            </div>
          ))}
        </section>

        <Section
          id="architecture"
          eyebrow="AI system hierarchy"
          title="Four layers—from learned representations to operating systems."
          description="The portfolio is organized by the layers required to turn a model into useful intelligence: model capability, grounded intelligence, autonomous execution, and production systems."
        >
          <div className="ai-hierarchy">
            {aiHierarchy.map((layer) => (
              <article className="hierarchy-layer panel" key={layer.index}>
                <div className="hierarchy-heading">
                  <span>{layer.index}</span>
                  <div>
                    <h3>{layer.title}</h3>
                    <p>{layer.purpose}</p>
                  </div>
                </div>
                <ArchitectureTrace steps={layer.flow} />
                <div className="hierarchy-tech">
                  {layer.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="proof"
          eyebrow="Architecture, traces, benchmarks, failures, outputs"
          title="The evidence ledger."
          description="Each system exposes what enters, what transforms it, what can fail, what was measured, and what actually came out. Private client systems are described at architecture level without pretending their source code is public."
        >
          <div className="evidence-grid">
            {evidenceCases.map((item) => (
              <article className="evidence-card panel" key={item.title}>
                <div className="evidence-topline">
                  <span className="evidence-status">{item.status}</span>
                  <span>{item.domain}</span>
                </div>
                <h3>{item.title}</h3>
                <div className="evidence-metric">
                  <strong>{item.metric}</strong>
                  <span>{item.metricLabel}</span>
                </div>

                <ArchitectureTrace steps={item.architecture} />

                {item.waterfall ? (
                  <div className="waterfall-block">
                    <p className="evidence-caption">System waterfall</p>
                    <div className="waterfall">
                      {item.waterfall.map((stage, index) => (
                        <div className="waterfall-stage" key={stage.label} style={{ marginLeft: `${index * 7}%` }}>
                          <span>{stage.label}</span>
                          <strong>{stage.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                <ComparisonBars item={item} />

                <div className="evidence-ledger">
                  <div>
                    <span>Trace</span>
                    <p>{item.trace}</p>
                  </div>
                  <div>
                    <span>Failure / constraint</span>
                    <p>{item.failure}</p>
                  </div>
                  <div>
                    <span>Output</span>
                    <p>{item.output}</p>
                  </div>
                </div>

                <div className="evidence-links">
                  {item.links.map((link) => (
                    <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="work"
          eyebrow="Selected AI systems"
          title="Models, multimodal pipelines, agent graphs, retrieval, scientific ML, and generative adaptation."
          description="Robotics is no longer the portfolio identity. It appears only where it proves that AI can survive sensors, dynamics, control, and physical constraints."
        >
          <div className="card-grid">
            {selectedWork.map((item) => {
              const network = getNetworkKind(item.title, item.category, item.description, ...item.tags);

              return (
                <article key={item.title} className={`panel work-card network-node network-${network}`}>
                  <div className="work-image-frame">
                    <img className="work-image" src={item.image} alt={`${item.title} technical visual.`} loading="lazy" decoding="async" />
                    <button
                      type="button"
                      className="image-overlay"
                      onClick={() => setActiveImage({ src: item.image, alt: `${item.title} technical visual.`, title: item.title })}
                    >
                      <span className="image-overlay-copy">
                        <strong>Open full image</strong>
                        <small>Inspect the complete project visual.</small>
                      </span>
                    </button>
                  </div>
                  <p className="micro-label">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tag-row">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="AI engineering experience"
          title="End-to-end ownership across models, data, orchestration, evaluation, APIs, and physical deployment."
          description="The work spans CNN-based signal learning, transformer and LLM application engineering, multimodal extraction, semantic retrieval, vector databases, stateful agent graphs, scientific ML, model evaluation, and deployment-oriented Python systems."
        >
          <div className="timeline">
            {experienceItems.map((item) => (
              <article key={`${item.company}-${item.period}`} className={`timeline-card network-node network-${getNetworkKind(item.company, item.role, item.summary, ...item.highlights)}`}>
                <div className="timeline-head">
                  <div>
                    <p className="micro-label">{item.company}</p>
                    <h3>{item.role}</h3>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p className="body-copy">{item.summary}</p>
                <ul className="detail-list">
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="research" eyebrow={flagshipResearch.eyebrow} title={flagshipResearch.title} description={flagshipResearch.impact}>
          <div className="research-layout">
            <article className="panel panel-feature network-node network-ai">
              <p className="micro-label">{flagshipResearch.venue}</p>
              <p className="body-copy">{flagshipResearch.summary}</p>
              <div className="stats-grid">
                {flagshipResearch.stats.map((item) => (
                  <div key={item.label} className="stat-pill"><span>{item.label}</span><strong>{item.value}</strong></div>
                ))}
              </div>
              <div className="bullet-grid">
                {flagshipResearch.contributions.map((item) => <article key={item} className="bullet-card"><p>{item}</p></article>)}
              </div>
              <div className="button-row">
                {flagshipResearch.links.map((link) => (
                  <a key={link.label} className={`button ${link.variant === "primary" ? "primary" : "secondary"}`} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
                ))}
              </div>
            </article>

            <div className="asset-grid">
              {researchFigures.map((asset) => (
                <article key={asset.title} className="figure-card">
                  <div className="image-frame">
                    <img src={asset.src} alt={asset.alt} loading="lazy" decoding="async" />
                    <button type="button" className="image-overlay" onClick={() => setActiveImage({ src: asset.src, alt: asset.alt, title: asset.title })}>
                      <span className="image-overlay-copy"><strong>Open full figure</strong><small>Inspect the complete research visual.</small></span>
                    </button>
                  </div>
                  <div className="figure-copy"><h3>{asset.title}</h3><p>{asset.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="demos"
          eyebrow="Working outputs"
          title="Generated artifacts, model behavior, public research, and implementation proof."
          description="This layer includes the CNN signal representation, the LoRA-generated profile image, LLM system architectures, numerical research, and rollout video evidence."
        >
          <div className="demo-grid">
            {demoVideos.map((item) => (
              <VideoCard key={`${item.title}-${item.tag}`} item={item} network={getNetworkKind(item.title, item.tag, item.description, ...(item.details || []))} onOpenImage={setActiveImage} />
            ))}
          </div>
        </Section>

        <Section
          id="strengths"
          eyebrow="AI technology stack"
          title="Technical range organized by system responsibility—not a keyword cloud."
          description="The stack covers model adaptation, retrieval, agents, multimodal processing, scientific ML, evaluation, infrastructure, and edge intelligence."
        >
          <div className="strength-grid">
            {strengths.map((item) => {
              const network = getNetworkKind(item.title, item.description);
              return <article key={item.title} className={`panel strength-card network-node network-${network}`}><h3>{item.title}</h3><p>{item.description}</p></article>;
            })}
          </div>
        </Section>

        <Section id="award" eyebrow="Recognition" title={award.title} description={award.body}>
          <div className="award-layout">
            <article className="panel award-copy">
              <p className="body-copy">Supporting evidence that the work was trusted inside a regulated engineering environment where model behavior had to connect to sensing, devices, and physical consequences.</p>
              <ul className="detail-list">{award.notes.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <div className="award-gallery">
              {award.images.map((image) => (
                <article key={image.src} className="award-image-card">
                  <div className="image-frame">
                    <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                    <button type="button" className="image-overlay" onClick={() => setActiveImage(image)}><span className="image-overlay-copy"><strong>Open full image</strong><small>View the complete recognition visual.</small></span></button>
                  </div>
                  <p>{image.title}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="about" eyebrow="About" title="An AI systems engineer who works from raw data to defensible output." description={about.intro}>
          <div className="about-layout">
            {about.paragraphs.map((paragraph) => <article key={paragraph} className="panel about-card"><p className="body-copy">{paragraph}</p></article>)}
          </div>
          <div className="location-band">{about.location}</div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Bring an unclear AI problem, not a prewritten implementation ticket."
          description="Best aligned with teams that need architecture, model and data decisions, orchestration, experimentation, evaluation, production integration, and honest failure analysis."
        >
          <div className="contact-panel panel">
            <div>
              <h3>Start an AI systems conversation</h3>
              <p className="body-copy">The strongest fit is a problem where the data, model, workflow, evaluation, or operating boundary is still uncertain and needs to be constructed end to end.</p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href={`mailto:${contact.email}`}>{contact.email}</a>
              <a className="button secondary" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="button secondary" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </Section>
      </main>

      {activeImage ? (
        <div className="lightbox-backdrop" role="presentation" onClick={() => setActiveImage(null)}>
          <div className="lightbox-panel" role="dialog" aria-modal="true" aria-label={activeImage.title} onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Close image viewer">Close</button>
            <img className="lightbox-image" src={activeImage.src} alt={activeImage.alt} />
            <p className="lightbox-title">{activeImage.title}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
