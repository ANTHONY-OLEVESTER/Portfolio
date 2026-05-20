function RobotFace({ pose }) {
  if (pose === "back") {
    return (
      <g className="robot-back-panel">
        <rect x="33" y="29" width="30" height="13" rx="6" />
        <path d="M39 35 H57" />
      </g>
    );
  }

  return (
    <g className="robot-face">
      <rect className="robot-visor" x="33" y="28" width="30" height="13" rx="6.5" />
      <circle className="robot-eye robot-eye-left" cx="42" cy="34.5" r="2.3" />
      <circle className="robot-eye robot-eye-right" cx="54" cy="34.5" r="2.3" />
    </g>
  );
}

function RobotOutfit({ outfit }) {
  return (
    <g className={`robot-outfit robot-outfit-${outfit}`}>
      <path className="outfit-coat" d="M33 52 H63 L59 82 H37 Z" />
      <path className="outfit-belt" d="M31 67 H65" />
      <path className="outfit-vest" d="M35 53 H61 L56 79 H40 Z" />
      <path className="outfit-harness" d="M35 54 L61 80 M61 54 L35 80" />
      <path className="outfit-hardhat" d="M31 20 C37 12, 59 12, 65 20 L66 25 H30 Z" />
    </g>
  );
}

function RobotTool({ tool }) {
  return (
    <g className={`robot-tool robot-tool-${tool}`}>
      <g className="tool-microscope">
        <path d="M72 67 C84 56, 86 48, 78 43" />
        <path d="M77 43 L87 35" />
        <rect x="68" y="78" width="22" height="7" rx="3" />
      </g>
      <g className="tool-wrench">
        <path d="M70 72 L88 54" />
        <path d="M84 54 C88 50, 93 52, 92 58" />
      </g>
      <g className="tool-hammer">
        <path d="M69 71 L87 55" />
        <rect x="83" y="48" width="16" height="8" rx="3" transform="rotate(-35 91 52)" />
      </g>
      <g className="tool-solder">
        <path d="M69 72 L90 61" />
        <path d="M90 61 L94 64" />
        <circle className="tool-hot-tip" cx="91" cy="61" r="2" />
      </g>
      <g className="tool-gauge">
        <circle cx="82" cy="61" r="11" />
        <path className="gauge-needle" d="M82 61 L88 55" />
      </g>
    </g>
  );
}

function CuteRobot({
  action = "idle",
  className = "",
  outfit = "engineer",
  payload = "brain",
  pose = "front",
  tool = "none",
}) {
  const robotClassName = [
    "cute-robot",
    `robot-action-${action}`,
    `robot-outfit-mode-${outfit}`,
    `robot-payload-mode-${payload}`,
    `robot-pose-${pose}`,
    `robot-tool-mode-${tool}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <svg className={robotClassName} viewBox="0 0 112 112" aria-hidden="true" focusable="false">
      <ellipse className="robot-shadow" cx="54" cy="98" rx="33" ry="8" />

      <g className="robot-antenna">
        <path d="M54 18 L54 8" />
        <circle cx="54" cy="6" r="4" />
      </g>

      <g className="robot-backpack">
        <path d="M69 41 H82 C86 41, 88 44, 88 48 V68 C88 72, 86 75, 82 75 H69 Z" />
        <path d="M78 45 L92 36" />
      </g>

      <g className="robot-head">
        <path className="robot-head-shell" d="M30 24 C30 15, 78 15, 78 24 V43 C78 53, 30 53, 30 43 Z" />
        <RobotFace pose={pose} />
      </g>

      <g className="robot-body">
        <path className="robot-body-shell" d="M31 51 H77 C84 58, 81 82, 73 88 H35 C27 82, 24 58, 31 51 Z" />
        <RobotOutfit outfit={outfit} />
        <circle className="robot-status-light" cx="54" cy="72" r="4" />
      </g>

      <g className="robot-arm robot-arm-left">
        <path d="M32 58 C17 61, 17 77, 29 80" />
        <circle cx="29" cy="80" r="4" />
      </g>

      <g className="robot-arm robot-arm-right">
        <path d="M76 58 C93 60, 96 76, 82 82" />
        <circle cx="82" cy="82" r="4" />
        <RobotTool tool={tool} />
      </g>

      <g className={`robot-cargo robot-cargo-${payload}`}>
        <rect x="74" y="78" width="18" height="14" rx="4" />
        <path d="M78 85 H88" />
        <path d="M83 81 V90" />
      </g>

      <g className="robot-treads">
        <path d="M31 88 H48 C51 88, 53 91, 53 94 C53 97, 51 100, 48 100 H31 C28 100, 26 97, 26 94 C26 91, 28 88, 31 88 Z" />
        <path d="M60 88 H77 C80 88, 82 91, 82 94 C82 97, 80 100, 77 100 H60 C57 100, 55 97, 55 94 C55 91, 57 88, 60 88 Z" />
        <path className="tread-line" d="M32 94 H47 M61 94 H76" />
      </g>
    </svg>
  );
}

export default CuteRobot;
