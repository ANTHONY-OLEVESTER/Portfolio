function GuideSpeechBubble({ guide, index, onClose, onNext, total }) {
  if (!guide) {
    return null;
  }

  return (
    <aside className="guide-speech-bubble" aria-live="polite">
      <div className="speech-bubble-head">
        <span>Portfolio guide</span>
        <button type="button" onClick={onClose} aria-label="Close guide note">
          Close
        </button>
      </div>
      <h3>{guide.title}</h3>
      <p>{guide.body}</p>
      {guide.prompt ? <small className="speech-proof">{guide.prompt}</small> : null}
      <div className="speech-bubble-actions">
        <button type="button" onClick={onNext}>
          Next guide note {index + 1}/{total}
        </button>
      </div>
    </aside>
  );
}

export default GuideSpeechBubble;
