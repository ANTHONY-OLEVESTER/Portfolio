function MicroRobotArm() {
  return (
    <svg
      className="micro-robot-arm"
      viewBox="0 0 168 118"
      aria-hidden="true"
      focusable="false"
    >
      <path className="arm-cable" d="M14 92 C 44 54, 76 64, 102 34 S 144 22, 158 42" />
      <g className="arm-base">
        <rect x="18" y="78" width="40" height="18" rx="9" />
        <circle cx="38" cy="78" r="14" />
      </g>
      <g className="arm-link arm-link-one">
        <path d="M42 72 L76 50" />
        <circle cx="76" cy="50" r="9" />
      </g>
      <g className="arm-link arm-link-two">
        <path d="M82 48 L118 36" />
        <circle cx="118" cy="36" r="8" />
      </g>
      <g className="arm-gripper">
        <path d="M123 35 L145 31" />
        <path d="M145 31 L154 24" />
        <path d="M145 31 L156 38" />
      </g>
      <circle className="arm-signal" cx="76" cy="50" r="4" />
      <circle className="arm-signal arm-signal-late" cx="118" cy="36" r="3" />
    </svg>
  );
}

export default MicroRobotArm;
