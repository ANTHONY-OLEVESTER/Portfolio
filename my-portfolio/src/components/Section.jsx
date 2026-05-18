export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}) {
  const sectionClassName = ["section", className].filter(Boolean).join(" ");

  return (
    <section id={id} className={sectionClassName}>
      <div className="section-heading">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
