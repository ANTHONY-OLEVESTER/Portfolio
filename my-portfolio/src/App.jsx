import { useEffect, useState } from "react";
import Section from "./components/Section";
import TrajectoryBackdrop from "./components/TrajectoryBackdrop";
import VideoCard from "./components/VideoCard";
import {
  about,
  award,
  contact,
  credibilityItems,
  demoVideos,
  experienceItems,
  flagshipResearch,
  heroMetrics,
  profile,
  researchFigures,
  selectedWork,
  strengths,
} from "./data/portfolioData";

const navigation = [
  { id: "work", label: "AI Systems" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "AI Research" },
  { id: "demos", label: "Evidence" },
  { id: "strengths", label: "AI Stack" },
  { id: "award", label: "Recognition" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

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
              </div>
            </div>

            <p className="hero-eyebrow">
              Machine learning · deep learning · transformers · LLMs · RAG · multimodal AI · autonomous agents
            </p>
            <h1>Engineering multi-layer AI systems from data to validated decisions.</h1>
            <p className="hero-lead">
              Anthony Olevester builds transformer and large-language-model applications, multi-agent
              orchestration, retrieval-augmented generation, embedding and vector-search pipelines,
              multimodal document intelligence, scientific machine learning, evaluation systems,
              and production AI infrastructure.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore AI systems
              </a>
              <a className="button secondary" href={contact.resume} target="_blank" rel="noreferrer">
                Download resume
              </a>
            </div>

            <p className="hero-note">
              Target roles: AI/ML Engineer, LLM Engineer, Agentic AI Engineer, Applied Scientist,
              Multimodal AI Engineer, AI Research Engineer, and AI Systems Architect.
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
          id="work"
          eyebrow="Selected AI systems"
          title="Transformers, LLMs, RAG, autonomous agents, multimodal pipelines, deep learning, and scientific ML."
          description="Each project represents a complete intelligence architecture: data ingestion, preprocessing, embeddings, retrieval, model inference, multi-layer orchestration, tool execution, validation, correction, observability, and deployment—not an isolated model call."
        >
          <div className="card-grid">
            {selectedWork.map((item) => {
              const network = getNetworkKind(item.title, item.category, item.description, ...item.tags);

              return (
                <article key={item.title} className={`panel work-card network-node network-${network}`}>
                  <div className="work-image-frame">
                    <img
                      className="work-image"
                      src={item.image}
                      alt={`${item.title} technical visual.`}
                      loading="lazy"
                      decoding="async"
                    />
                    <button
                      type="button"
                      className="image-overlay"
                      onClick={() =>
                        setActiveImage({
                          src: item.image,
                          alt: `${item.title} technical visual.`,
                          title: item.title,
                        })
                      }
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
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="AI engineering experience"
          title="End-to-end ownership across models, data, orchestration, evaluation, APIs, and production infrastructure."
          description="The work spans transformer/LLM application engineering, multimodal extraction, semantic retrieval, vector databases, stateful agent graphs, scientific ML, model evaluation, and deployment-oriented Python systems."
        >
          <div className="timeline">
            {experienceItems.map((item) => (
              <article
                key={`${item.company}-${item.period}`}
                className={`timeline-card network-node network-${getNetworkKind(
                  item.company,
                  item.role,
                  item.summary,
                  ...item.highlights,
                )}`}
              >
                <div className="timeline-head">
                  <div>
                    <p className="micro-label">{item.company}</p>
                    <h3>{item.role}</h3>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p className="body-copy">{item.summary}</p>
                <ul className="detail-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="research"
          eyebrow={flagshipResearch.eyebrow}
          title={flagshipResearch.title}
          description={flagshipResearch.impact}
        >
          <div className="research-layout">
            <article className="panel panel-feature network-node network-ai">
              <p className="micro-label">{flagshipResearch.venue}</p>
              <p className="body-copy">{flagshipResearch.summary}</p>
              <div className="stats-grid">
                {flagshipResearch.stats.map((item) => (
                  <div key={item.label} className="stat-pill">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
              <div className="bullet-grid">
                {flagshipResearch.contributions.map((item) => (
                  <article key={item} className="bullet-card">
                    <p>{item}</p>
                  </article>
                ))}
              </div>
              <div className="button-row">
                {flagshipResearch.links.map((link) => (
                  <a
                    key={link.label}
                    className={`button ${link.variant === "primary" ? "primary" : "secondary"}`}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>

            <div className="asset-grid">
              {researchFigures.map((asset) => (
                <article key={asset.title} className="figure-card">
                  <div className="image-frame">
                    <img src={asset.src} alt={asset.alt} loading="lazy" decoding="async" />
                    <button
                      type="button"
                      className="image-overlay"
                      onClick={() =>
                        setActiveImage({
                          src: asset.src,
                          alt: asset.alt,
                          title: asset.title,
                        })
                      }
                    >
                      <span className="image-overlay-copy">
                        <strong>Open full figure</strong>
                        <small>Inspect the complete research visual.</small>
                      </span>
                    </button>
                  </div>
                  <div className="figure-copy">
                    <h3>{asset.title}</h3>
                    <p>{asset.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="demos"
          eyebrow="AI evidence"
          title="Inspectable LLM systems, agentic workflows, multimodal pipelines, numerical research, and model behavior."
          description="The evidence layer exposes architecture, implementation, model outputs, evaluation metrics, public research artifacts, and failure boundaries rather than relying on generic AI claims."
        >
          <div className="demo-grid">
            {demoVideos.map((item) => (
              <VideoCard
                key={`${item.title}-${item.tag}`}
                item={item}
                network={getNetworkKind(item.title, item.tag, item.description, ...(item.details || []))}
                onOpenImage={setActiveImage}
              />
            ))}
          </div>
        </Section>

        <Section
          id="strengths"
          eyebrow="AI technology stack"
          title="Modern AI architecture and execution—not thin prompt wrappers."
          description="Technical depth spans transformer and LLM applications, multi-agent systems, RAG, embeddings, multimodal processing, deep learning, scientific ML, evaluation, MLOps-style integration, databases, APIs, and edge intelligence."
        >
          <div className="strength-grid">
            {strengths.map((item) => {
              const network = getNetworkKind(item.title, item.description);

              return (
                <article key={item.title} className={`panel strength-card network-node network-${network}`}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </Section>

        <Section id="award" eyebrow="Recognition" title={award.title} description={award.body}>
          <div className="award-layout">
            <article className="panel award-copy">
              <p className="body-copy">
                This recognition is supporting evidence of technical ownership and dependable execution inside a regulated engineering environment. The portfolio’s primary identity is AI/ML systems, LLM engineering, and research.
              </p>
              <ul className="detail-list">
                {award.notes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <div className="award-gallery">
              {award.images.map((image) => (
                <article key={image.src} className="award-image-card">
                  <div className="image-frame">
                    <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                    <button type="button" className="image-overlay" onClick={() => setActiveImage(image)}>
                      <span className="image-overlay-copy">
                        <strong>Open full image</strong>
                        <small>View the complete recognition visual.</small>
                      </span>
                    </button>
                  </div>
                  <p>{image.title}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="about"
          eyebrow="About"
          title="An AI systems engineer working from raw data through orchestration, evaluation, and deployment."
          description={about.intro}
        >
          <div className="about-layout">
            {about.paragraphs.map((paragraph) => (
              <article key={paragraph} className="panel about-card">
                <p className="body-copy">{paragraph}</p>
              </article>
            ))}
          </div>
          <div className="location-band">{about.location}</div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Open to teams building substantial AI systems beyond simple API integration."
          description="Best aligned with LLM platforms, agentic-AI products, applied-ML teams, multimodal intelligence, RAG and knowledge systems, AI infrastructure, scientific ML, evaluation, and research engineering."
        >
          <div className="contact-panel panel">
            <div>
              <h3>Start an AI systems conversation</h3>
              <p className="body-copy">
                The strongest fit is a team that needs end-to-end technical ownership across datasets,
                transformer or deep-learning models, embeddings, retrieval, multi-agent orchestration,
                evaluation, APIs, databases, observability, and deployment.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <a className="button secondary" href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="button secondary" href={contact.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </Section>
      </main>

      {activeImage ? (
        <div className="lightbox-backdrop" role="presentation" onClick={() => setActiveImage(null)}>
          <div
            className="lightbox-panel"
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.title}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close image viewer"
            >
              Close
            </button>
            <img className="lightbox-image" src={activeImage.src} alt={activeImage.alt} />
            <p className="lightbox-title">{activeImage.title}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
