export default function VideoCard({ item, onOpenImage }) {
  const isImageCard = Boolean(item.imageSrc);

  return (
    <article className={`video-card${item.featured ? " featured" : ""}`}>
      <div className="video-frame">
        {item.embedUrl ? (
          <iframe
            src={item.embedUrl}
            title={item.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : null}

        {item.videoSrc ? (
          <video controls preload="metadata" poster={item.poster}>
            <source src={item.videoSrc} type="video/mp4" />
          </video>
        ) : null}

        {item.imageSrc ? <img src={item.imageSrc} alt={item.alt || item.title} /> : null}

        {isImageCard ? (
          <button
            type="button"
            className="image-overlay"
            onClick={() =>
              onOpenImage?.({
                src: item.imageSrc,
                alt: item.alt || item.title,
                title: item.title,
              })
            }
          >
            <span className="image-overlay-copy">
              <strong>Open full image</strong>
              <small>Inspect the complete visual without crop.</small>
            </span>
          </button>
        ) : null}
      </div>

      <div className="video-body">
        {item.tag ? <span className="micro-label">{item.tag}</span> : null}
        <h3>{item.title}</h3>
        <p>{item.description}</p>

        {item.details?.length ? (
          <ul className="detail-list compact">
            {item.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        ) : null}

        {item.href ? (
          <a className="text-link" href={item.href} target="_blank" rel="noreferrer">
            {item.ctaLabel || "Open reference"}
          </a>
        ) : null}
      </div>
    </article>
  );
}
