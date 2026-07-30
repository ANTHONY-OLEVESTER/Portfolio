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
  { id: "research", label: "Research" },
  { id: "demos", label: "Evidence" },
  { id: "strengths", label: "Strengths" },
  { id: "award", label: "Award" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function getNetworkKind(...values) {
  const text = values.join(" ").toLowerCase();

  if (
    text.includes("agent") ||
    text.includes("llm") ||
    text.includes("ai") ||
    text.includes("ml") ||
    text.includes("learning") ||
    text.includes("intelligence")
  ) {
    return "ai";
  }

  if (text.includes("sim") || text.includes("mujoco") || text.includes("pybullet")) {
    return "simulation";
  }

  if (text.includes("robot") || text.includes("arm") || text.includes("opencv")) {
    return "robotics";
  }

  if (text.includes("control") || text.includes("actuation") || text.includes("motor")) {
    return "control";
  }

  if (text.includes("embedded") || text.includes("kicad") || text.includes("device") || text.includes("pen")) {
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

            <p className="hero-eyebrow">Production AI, agentic systems, scientific ML, and technical intelligence</p>
            <h1>Building AI systems that survive ambiguity.</h1>
            <p className="hero-lead">
              Anthony Olevester builds production AI workflows, autonomous software systems,
              internet-scale technical-intelligence pipelines, and scientific learning systems.
              The work is judged by execution, validation, measurable effect, and failure boundaries—not by demos alone.
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
              Priority for AI systems, applied research, agentic engineering, scientific ML, and technically demanding product teams.
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

        <section className="credibility-strip" aria-label="AI and engineering credibility highlights">
          {credibilityItems.map((item) => (
            <div key={item} className={`credibility-item network-node network-${getNetworkKind(item)}`}>
              {item}
            </div>
          ))}
        </section>

        <Section
          id="work"
          eyebrow="AI systems"
          title="Systems built for scale, autonomy, correction, and production use."
          description="The portfolio now leads with software AI and scientific machine learning. Robotics, control, and embedded work remain as supporting evidence of engineering depth."
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
          eyebrow="Experience"
          title="AI systems delivery backed by physical-engineering discipline."
          description="The through-line is end-to-end ownership: define the unclear problem, build the architecture, instrument it, validate it, and state the limits honestly."
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
          eyebrow="Evidence"
          title="Working systems, public research artifacts, and implementation proof."
          description="The emphasis is on inspectable output: deployed workflows, research records, numerical evidence, code, and physical prototypes."
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
          eyebrow="Technical strengths"
          title="AI architecture, evaluation, and execution—not isolated model calls."
          description="The strongest fit is where ambiguous requirements, complex data, autonomous execution, scientific validation, and real operating constraints overlap."
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

        <Section
          id="award"
          eyebrow="Recognition"
          title={award.title}
          description={award.body}
        >
          <div className="award-layout">
            <article className="panel award-copy">
              <p className="body-copy">
                The award is retained as evidence that the engineering work was trusted inside a high-accountability environment—not as the centre of the portfolio.
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
                        <small>View the complete Biocon recognition visual.</small>
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
          title="A systems engineer focused on making AI useful, testable, and defensible."
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
          title="Open to AI systems and research roles with real technical ownership."
          description="Especially relevant for agentic AI, applied research, scientific ML, AI infrastructure, technical-intelligence platforms, and production AI teams."
        >
          <div className="contact-panel panel">
            <div>
              <h3>Start a conversation</h3>
              <p className="body-copy">
                The best fit is a team that needs someone to turn an incomplete technical problem into an architecture, working system, validation plan, and honest result.
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
