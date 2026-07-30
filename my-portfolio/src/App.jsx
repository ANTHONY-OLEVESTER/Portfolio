import { useState } from "react";
import {
  profile,
  proofMetrics,
  engines,
  caseStudies,
  ambiguityCases,
  publications,
  experience,
  capabilities,
  contact,
} from "./data/portfolioData";

function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="section-shell">
      <div className="section-heading">
        <p className="kicker">{kicker}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function App() {
  const [activeCase, setActiveCase] = useState(caseStudies[0]);

  return (
    <div className="site-shell">
      <div className="noise" />
      <header className="topbar">
        <a href="#hero" className="brand">AO</a>
        <nav>
          <a href="#systems">Systems</a>
          <a href="#cases">Case studies</a>
          <a href="#research">Research</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="mini-cta" href={`mailto:${contact.email}`}>Contact</a>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">AI SYSTEMS · RESEARCH · PHYSICAL INTELLIGENCE</p>
            <h1>I turn ambiguous technical problems into systems that can be tested.</h1>
            <p className="hero-lead">
              {profile.name} is an AI Systems & Research Engineer building autonomous software,
              internet-scale intelligence pipelines, scientific learning systems, robotics validation,
              and production AI under incomplete information and hard constraints.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#cases">See the evidence</a>
              <a className="button secondary" href={contact.resume} target="_blank" rel="noreferrer">Resume</a>
            </div>
            <p className="truth-line">No inflated titles. No patent claims. Just systems, experiments, failures, and measurable outcomes.</p>
          </div>

          <aside className="hero-terminal">
            <div className="terminal-head"><span /> <span /> <span /></div>
            <p className="terminal-label">OPERATING MODE</p>
            <h2>Heavy ambiguity</h2>
            <div className="terminal-flow">
              <span>Unknown problem</span><b>→</b><span>System model</span><b>→</b><span>Experiment</span><b>→</b><span>Evidence</span>
            </div>
            <div className="terminal-status">STATUS: BUILDING</div>
          </aside>
        </section>

        <section className="metric-strip" aria-label="Proof metrics">
          {proofMetrics.map((metric) => (
            <article key={metric.value}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </section>

        <Section id="systems" kicker="THE SYSTEM BEHIND THE PROJECTS" title="Three engines. One operating philosophy.">
          <div className="engine-grid">
            {engines.map((engine, index) => (
              <article className="engine-card" key={engine.title}>
                <span className="engine-index">0{index + 1}</span>
                <h3>{engine.title}</h3>
                <p>{engine.description}</p>
                <div className="tag-row">{engine.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="cases" kicker="SELECTED CASE STUDIES" title="Not project cards. Evidence trails.">
          <div className="case-layout">
            <div className="case-tabs">
              {caseStudies.map((item) => (
                <button
                  key={item.title}
                  className={activeCase.title === item.title ? "active" : ""}
                  onClick={() => setActiveCase(item)}
                >
                  <span>{item.status}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>
            <article className="case-detail">
              <div className="case-meta"><span>{activeCase.status}</span><span>{activeCase.domain}</span></div>
              <h3>{activeCase.title}</h3>
              <p className="case-summary">{activeCase.summary}</p>
              <div className="case-grid">
                <div><small>AMBIGUITY</small><p>{activeCase.ambiguity}</p></div>
                <div><small>SYSTEM</small><p>{activeCase.system}</p></div>
                <div><small>VALIDATION</small><p>{activeCase.validation}</p></div>
                <div><small>RESULT</small><p>{activeCase.result}</p></div>
              </div>
            </article>
          </div>
        </Section>

        <Section id="ambiguity" kicker="HOW I WORK" title="Ambiguity is not a personality trait. It is an engineering condition.">
          <div className="ambiguity-grid">
            {ambiguityCases.map((item) => (
              <article key={item.title}>
                <span>{item.phase}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="research" kicker="PUBLICATIONS" title="Research with reproducible artifacts and explicit limits.">
          <div className="publication-grid">
            {publications.map((paper) => (
              <article key={paper.title}>
                <div className="pub-top"><span>{paper.date}</span><span>{paper.type}</span></div>
                <h3>{paper.title}</h3>
                <p>{paper.summary}</p>
                <a href={paper.href} target="_blank" rel="noreferrer">Open record ↗</a>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" kicker="EXPERIENCE" title="Research depth, production constraints, and physical-world engineering.">
          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`}>
                <div><span>{item.period}</span><h3>{item.role}</h3><p>{item.company}</p></div>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="capabilities" kicker="TECHNICAL RANGE" title="The stack is wide because the problems are wide.">
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article key={item.title}><h3>{item.title}</h3><p>{item.items.join(" · ")}</p></article>
            ))}
          </div>
        </Section>

        <section className="closing">
          <p className="kicker">CURRENT THESIS</p>
          <h2>Models are not the final truth. The residual contains intelligence.</h2>
          <p>I am most useful where the problem is unclear, the data is imperfect, and the system still has to work.</p>
          <div className="hero-actions">
            <a className="button primary" href={`mailto:${contact.email}`}>Start a conversation</a>
            <a className="button secondary" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="button secondary" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
