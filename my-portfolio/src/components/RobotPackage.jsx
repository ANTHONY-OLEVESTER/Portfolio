import { getRobotDomain } from "../utils/robotDomain";

function RobotPackage({ job }) {
  const domain = getRobotDomain(job);

  return (
    <span className={`robot-package robot-package-${domain}`}>
      <span className="robot-package-core" />
      <span className="robot-package-label">{job.label}</span>
    </span>
  );
}

export default RobotPackage;
