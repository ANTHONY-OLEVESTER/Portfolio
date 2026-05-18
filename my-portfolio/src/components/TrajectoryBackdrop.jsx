const sectionModes = {
  hero: "System overview",
  research: "Sim-to-sim validation",
  demos: "Research demos",
  experience: "Engineering timeline",
  work: "Project evidence",
  strengths: "Capability map",
  award: "Recognition signal",
  about: "Profile context",
  contact: "Opportunity vector",
};

function TrajectoryBackdrop({ activeSection = "hero" }) {
  const modeLabel = sectionModes[activeSection] || sectionModes.hero;

  return (
    <div className={`trajectory-layer trajectory-mode-${activeSection}`} aria-hidden="true">
      <div className="trajectory-probe" />
      <svg
        className="trajectory-backdrop"
        viewBox="0 0 1440 1200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="trajectoryFade" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="18%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="82%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g className="trajectory-field trajectory-field-hero">
          <path
            className="trajectory trajectory-reference"
            pathLength="1"
            d="M-40 208 C 178 88, 332 108, 506 238 S 840 438, 1048 302 S 1326 84, 1490 172"
          />
          <path
            className="trajectory trajectory-corrected"
            pathLength="1"
            d="M-30 292 C 162 198, 326 206, 506 318 S 820 468, 1038 374 S 1302 196, 1480 250"
          />
          <path
            className="trajectory trajectory-raw"
            pathLength="1"
            d="M-20 378 C 132 330, 314 282, 486 422 S 792 520, 1018 486 S 1296 304, 1464 378"
          />
        </g>

        <g className="trajectory-field trajectory-field-research">
          <path
            className="trajectory trajectory-reference trajectory-delay-1"
            pathLength="1"
            d="M112 728 C 272 608, 448 642, 596 708 S 862 838, 1052 758 S 1230 602, 1362 664"
          />
          <path
            className="trajectory trajectory-corrected trajectory-delay-2"
            pathLength="1"
            d="M94 832 C 274 764, 438 772, 604 838 S 884 930, 1078 862 S 1246 742, 1374 810"
          />
          <path
            className="trajectory trajectory-pulse trajectory-delay-3"
            pathLength="1"
            d="M88 1000 L 208 1000 L 226 944 L 252 1058 L 278 1000 L 398 1000 L 418 962 L 438 1038 L 462 1000 L 604 1000"
          />
        </g>

        <g className="trajectory-checkpoints">
          <circle className="checkpoint checkpoint-blue" cx="506" cy="238" r="5" />
          <circle className="checkpoint checkpoint-green" cx="1038" cy="374" r="5" />
          <circle className="checkpoint checkpoint-red" cx="486" cy="422" r="4" />
          <circle className="checkpoint checkpoint-yellow" cx="604" cy="838" r="5" />
          <circle className="checkpoint checkpoint-green" cx="1078" cy="862" r="5" />
          <circle className="checkpoint checkpoint-yellow" cx="226" cy="944" r="4" />
          <circle className="checkpoint checkpoint-red" cx="418" cy="962" r="4" />
        </g>
      </svg>

      <div className="trajectory-hud">
        <span className="hud-status-dot" />
        <span>{modeLabel}</span>
      </div>
    </div>
  );
}

export default TrajectoryBackdrop;
