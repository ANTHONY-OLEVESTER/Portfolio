import { useEffect, useState } from "react";
import MicroRobotArm from "./components/MicroRobotArm";
import RobotEcosystemLayer from "./components/RobotEcosystemLayer";
import ScrollCompanionRobot from "./components/ScrollCompanionRobot";
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
  navigation,
  profile,
  researchFigures,
  selectedWork,
  strengths,
} from "./data/portfolioData";

const networkLabels = {
  ai: "AI / ML signal path",
  robotics: "Robotics build path",
  simulation: "Simulation validation path",
  control: "Control systems path",
  embedded: "Embedded device path",
  research: "Research execution path",
};

function getNetworkKind(...values) {
  const text = values.join(" ").toLowerCase();

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

  if (text.includes("ai") || text.includes("ml") || text.includes("learning")) {
    return "ai";
  }

  return "research";
}

function App() {
  const [navHidden, setNavHidden] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [activeNetwork, setActiveNetwork] = useState(null);
  const siteClassName = [
    "site-shell",
    activeNetwork ? "is-networking" : "",
    activeNetwork ? `system-network-${activeNetwork}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const activateNetwork = (network) => setActiveNetwork(network);
  const clearNetwork = () => setActiveNetwork(null);

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
    <div className={siteClassName}>
      <TrajectoryBackdrop activeSection={activeSection} />
      <RobotEcosystemLayer />
      <ScrollCompanionRobot activeSection={activeSection} />

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

      <div className="systems-console" aria-live="polite">
        <span className="systems-console-label">Live systems mesh</span>
        <strong>{activeNetwork ? networkLabels[activeNetwork] : "Hover technical cards to trace connections"}</strong>
      </div>

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
            <p className="hero-eyebrow">Applied AI, robotics, control, and simulation</p>
            <h1>Engineering intelligent systems for the physical world.</h1>
            <p className="hero-lead">
              Anthony Olevester is an Applied AI & Robotics Engineer building across control
              systems, embedded engineering, robotics simulation, and applied AI/ML. The focus
              is on reliable systems, engineering evidence, and technical depth.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#research">
                View flagship research
              </a>
              <a className="button secondary" href={contact.resume} target="_blank" rel="noreferrer">
                Download resume
              </a>
            </div>
            <p className="hero-note">
              Priority for Hyderabad, Bengaluru, and remote roles in AI, robotics, embedded,
              control, and simulation-heavy engineering teams.
            </p>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-grid">
              {heroMetrics.map((metric) => {
                const network = getNetworkKind(metric.value, metric.label);

                return (
                <article
                  key={metric.value}
                  className={`metric-card network-node network-${network}`}
                  onMouseEnter={() => activateNetwork(network)}
                  onMouseLeave={clearNetwork}
                  onFocus={() => activateNetwork(network)}
                  onBlur={clearNetwork}
                >
                  <h2>{metric.value}</h2>
                  <p>{metric.label}</p>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="credibility-strip" aria-label="Credibility highlights">
          {credibilityItems.map((item) => {
            const network = getNetworkKind(item);

            return (
            <div
              key={item}
              className={`credibility-item network-node network-${network}`}
              onMouseEnter={() => activateNetwork(network)}
              onMouseLeave={clearNetwork}
            >
              {item}
            </div>
            );
          })}
        </section>

        <Section
          id="research"
          eyebrow={flagshipResearch.eyebrow}
          title={flagshipResearch.title}
          description={flagshipResearch.impact}
        >
          <div className="research-layout">
            <article
              className="panel panel-feature network-node network-simulation"
              onMouseEnter={() => activateNetwork("simulation")}
              onMouseLeave={clearNetwork}
              onFocus={() => activateNetwork("simulation")}
              onBlur={clearNetwork}
            >
              <span
                className="robot-card-anchor robot-card-anchor-source"
                data-robot-source="simulation"
                data-robot-node="source"
              />
              <span
                className="robot-card-anchor robot-card-anchor-destination"
                data-robot-destination="research"
                data-robot-node="destination"
              />
              <MicroRobotArm />
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

        <section id="demos" className="section">
          <div className="demo-grid">
            {demoVideos.map((item) => (
              <VideoCard
                key={`${item.title}-${item.tag}`}
                item={item}
                network={getNetworkKind(item.title, item.tag, item.description, ...(item.details || []))}
                onActivateNetwork={activateNetwork}
                onClearNetwork={clearNetwork}
                onOpenImage={setActiveImage}
              />
            ))}
          </div>
        </section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Built across product constraints, research rigor, and applied delivery."
          description="The through-line is systems thinking: understanding the stack end to end, validating behavior, and shipping work that can survive contact with reality."
        >
          <div className="timeline">
            {experienceItems.map((item) => (
              <article
                key={item.company}
                className={`timeline-card network-node network-${getNetworkKind(
                  item.company,
                  item.role,
                  item.summary,
                  ...item.highlights,
                )}`}
                onMouseEnter={() =>
                  activateNetwork(getNetworkKind(item.company, item.role, item.summary, ...item.highlights))
                }
                onMouseLeave={clearNetwork}
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
          id="work"
          eyebrow="Selected work"
          title="Projects aligned to AI, robotics, control, and engineering execution."
          description="The selected work is now tightened around the projects that most directly support deep-tech hiring conversations."
        >
          <div className="card-grid">
            {selectedWork.map((item) => {
              const network = getNetworkKind(item.title, item.category, item.description, ...item.tags);

              return (
                <article
                  key={item.title}
                  className={`panel work-card network-node network-${network}`}
                  onMouseEnter={() => activateNetwork(network)}
                  onMouseLeave={clearNetwork}
                  onFocus={() => activateNetwork(network)}
                  onBlur={clearNetwork}
                >
                  <span
                    className="robot-card-anchor robot-card-anchor-source"
                    data-robot-source={network}
                    data-robot-node="source"
                  />
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
          id="strengths"
          eyebrow="Technical strengths"
          title="A profile shaped by reliability, systems behavior, and execution depth."
          description="The strongest fit is where applied AI, robotics, simulation, and real engineering constraints overlap."
        >
          <div className="strength-grid">
            {strengths.map((item) => {
              const network = getNetworkKind(item.title, item.description);
              const destinationNetworks =
                item.title === "Robotics simulation" ? ["simulation", "robotics"] : [network];

              return (
              <article
                key={item.title}
                className={`panel strength-card network-node network-${network}`}
                onMouseEnter={() => activateNetwork(network)}
                onMouseLeave={clearNetwork}
                onFocus={() => activateNetwork(network)}
                onBlur={clearNetwork}
              >
                {destinationNetworks.map((destinationNetwork, index) => (
                  <span
                    key={destinationNetwork}
                    className={`robot-card-anchor robot-card-anchor-destination destination-anchor-${index}`}
                    data-robot-destination={destinationNetwork}
                    data-robot-node="destination"
                  />
                ))}
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
                Recognition matters most when it comes from environments with real technical
                expectations. This award is positioned here as a trust signal tied to delivery and
                contribution.
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
                    <button
                      type="button"
                      className="image-overlay"
                      onClick={() => setActiveImage(image)}
                    >
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
          title="An engineering profile built for serious technical teams."
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
          title="Open to roles where technical depth and execution both matter."
          description="Especially relevant for applied AI companies, robotics startups, simulation and control teams, and professors looking for research-heavy engineering support."
        >
          <div
            className="contact-panel panel"
          >
            <span
              className="robot-card-anchor robot-card-anchor-destination contact-anchor"
              data-robot-destination="contact"
              data-robot-node="destination"
            />
            <div>
              <h3>Start a conversation</h3>
              <p className="body-copy">
                The best opportunities are ones where rigorous engineering, learning systems,
                and physical-world constraints intersect.
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
        <div
          className="lightbox-backdrop"
          role="presentation"
          onClick={() => setActiveImage(null)}
        >
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
