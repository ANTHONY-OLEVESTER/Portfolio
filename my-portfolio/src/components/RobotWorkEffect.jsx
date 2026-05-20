import { getRobotDomain } from "../utils/robotDomain";

const effectLabels = {
  ai: "Pipeline check",
  control: "Loop settling",
  embedded: "Signal lock",
  robotics: "Module assembly",
  simulation: "PASS validation",
};

function SimulationEffect() {
  return (
    <>
      <span className="work-effect-scan" />
      <span className="effect-trajectory">
        <span />
      </span>
      <span className="effect-pass-stamp">PASS</span>
      <span className="effect-chip" />
    </>
  );
}

function RoboticsEffect() {
  return (
    <>
      <span className="work-effect-sparks" />
      <span className="work-effect-sparks delay" />
      <span className="effect-bolt bolt-one" />
      <span className="effect-bolt bolt-two" />
      <span className="effect-arm-link" />
    </>
  );
}

function EmbeddedEffect() {
  return (
    <>
      <span className="effect-waveform" />
      <span className="effect-probe" />
      <span className="work-effect-sparks delay" />
      <span className="effect-sensor-core" />
    </>
  );
}

function ControlEffect() {
  return (
    <>
      <span className="effect-feedback-ring" />
      <span className="effect-gauge">
        <span className="effect-gauge-needle" />
      </span>
      <span className="effect-actuator" />
    </>
  );
}

function AiEffect() {
  return (
    <>
      <span className="effect-neural-grid" />
      <span className="effect-data-packet packet-one" />
      <span className="effect-data-packet packet-two" />
      <span className="effect-data-packet packet-three" />
      <span className="effect-eval-check" />
    </>
  );
}

function DomainEffect({ id }) {
  if (id === "simulation") {
    return <SimulationEffect />;
  }

  if (id === "robotics") {
    return <RoboticsEffect />;
  }

  if (id === "embedded") {
    return <EmbeddedEffect />;
  }

  if (id === "control") {
    return <ControlEffect />;
  }

  return <AiEffect />;
}

function RobotWorkEffect({ job, point }) {
  const domain = getRobotDomain(job);

  return (
    <div
      className={`robot-work-effect robot-work-${domain}`}
      style={{ transform: `translate3d(${point.x}px, ${point.y}px, 0)` }}
      aria-hidden="true"
    >
      <span className="work-effect-label">{effectLabels[domain] || job.label}</span>
      <DomainEffect id={domain} />
    </div>
  );
}

export default RobotWorkEffect;
