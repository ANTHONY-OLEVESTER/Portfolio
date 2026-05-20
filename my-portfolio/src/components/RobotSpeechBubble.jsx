import { getRobotNarration } from "../data/robotNarrationData";

const BUBBLE_WIDTH = 360;
const EDGE_PADDING = 14;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getBubblePosition(point) {
  const shellWidth = document.querySelector(".site-shell")?.clientWidth || 1180;
  const maxX = Math.max(EDGE_PADDING, shellWidth - BUBBLE_WIDTH - EDGE_PADDING);
  const opensLeft = point.x > shellWidth * 0.58;
  const preferredX = opensLeft ? point.x - BUBBLE_WIDTH - 32 : point.x + 54;
  const x = clamp(preferredX, EDGE_PADDING, maxX);
  const y = Math.max(84, point.y - 140);

  return { opensLeft, x, y };
}

function RobotSpeechBubble({ cycleIndex, onClose, onNext, phase, point, robot }) {
  if (!robot || !point) {
    return null;
  }

  const narration = getRobotNarration(robot.job);
  const cycles = narration.cycles;
  const content = cycles[cycleIndex % cycles.length];
  const bubblePosition = getBubblePosition(point);

  return (
    <aside
      className={`robot-speech-bubble robot-speech-${narration.domain} ${
        bubblePosition.opensLeft ? "bubble-open-left" : "bubble-open-right"
      }`}
      style={{
        "--bubble-x": `${bubblePosition.x}px`,
        "--bubble-y": `${bubblePosition.y}px`,
      }}
      aria-live="polite"
    >
      <div className="speech-bubble-head">
        <span>{content.eyebrow}</span>
        <button type="button" onClick={onClose} aria-label="Close robot explanation">
          Close
        </button>
      </div>
      <h3>{content.title}</h3>
      <p>{content.body}</p>
      {content.metric ? <strong className="speech-metric">{content.metric}</strong> : null}
      {content.proof ? <small className="speech-proof">{content.proof}</small> : null}
      <div className="speech-bubble-actions">
        {content.ctaHref ? (
          <a href={content.ctaHref} target="_blank" rel="noreferrer">
            {content.ctaLabel || "Open proof"}
          </a>
        ) : null}
        <button type="button" onClick={onNext}>
          Next note {cycleIndex + 1}/{cycles.length}
        </button>
      </div>
      <span className="speech-phase">{robot.job.label} / {phase}</span>
    </aside>
  );
}

export default RobotSpeechBubble;
