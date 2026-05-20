import { getRobotDomain } from "../utils/robotDomain";

function RobotModuleBurst({ job, phase, point }) {
  if (!point) {
    return null;
  }

  const domain = getRobotDomain(job);

  return (
    <div
      className={`robot-module-burst robot-module-${domain} robot-module-${phase}`}
      style={{ transform: `translate3d(${point.x}px, ${point.y}px, 0)` }}
      aria-hidden="true"
    >
      <span className="robot-module-token" />
      <span className="robot-module-copy">{phase === "pickup" ? "Module ready" : "Delivered"}</span>
    </div>
  );
}

export default RobotModuleBurst;
