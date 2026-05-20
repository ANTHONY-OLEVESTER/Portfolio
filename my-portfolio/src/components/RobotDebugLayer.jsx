import { getRobotDomain } from "../utils/robotDomain";

function formatPoint(point) {
  return `${Math.round(point.x)}, ${Math.round(point.y)}`;
}

function getNodeLabel(element) {
  if (!element) {
    return "missing";
  }

  const card = element.closest(".network-node") || element;
  const source = element.getAttribute("data-robot-source");
  const destination = element.getAttribute("data-robot-destination");
  const node = element.getAttribute("data-robot-node");
  const heading = card.querySelector("h3, h2")?.textContent?.trim();

  return [source || destination, node, heading].filter(Boolean).join(" / ");
}

function DebugPoint({ domain, label, point, type }) {
  return (
    <div
      className={`robot-debug-point robot-debug-${type} robot-debug-domain-${domain}`}
      style={{ transform: `translate3d(${point.x}px, ${point.y}px, 0)` }}
    >
      <span>{label}</span>
      <small>{formatPoint(point)}</small>
    </div>
  );
}

function buildSegments(route) {
  const points = [
    route.spawn,
    ...route.paths.toSource,
    route.source,
    ...route.paths.toDestination,
    route.destination,
    ...route.paths.exit,
  ];

  return points.slice(1).map((point, index) => ({
    from: points[index],
    to: point,
  }));
}

function RobotDebugLayer({ robots }) {
  return (
    <div className="robot-debug-layer" aria-hidden="true">
      {robots.map((robot) => (
        <div key={`debug-${robot.id}`} className={`robot-debug-route robot-debug-route-${getRobotDomain(robot.job)}`}>
          <svg className="robot-debug-svg" focusable="false">
            {buildSegments(robot.route).map((segment, index) => (
              <line
                key={`${robot.id}-segment-${index}`}
                x1={segment.from.x}
                y1={segment.from.y}
                x2={segment.to.x}
                y2={segment.to.y}
              />
            ))}
          </svg>
          <DebugPoint
            domain={getRobotDomain(robot.job)}
            label={`${robot.job.id} spawn`}
            point={robot.route.spawn}
            type="spawn"
          />
          <DebugPoint
            domain={getRobotDomain(robot.job)}
            label={`${robot.job.id} source: ${getNodeLabel(robot.route.sourceElement)}`}
            point={robot.route.source}
            type="source"
          />
          <DebugPoint
            domain={getRobotDomain(robot.job)}
            label={`${robot.job.id} dest: ${getNodeLabel(robot.route.destinationElement)}`}
            point={robot.route.destination}
            type="destination"
          />
          <DebugPoint
            domain={getRobotDomain(robot.job)}
            label={`${robot.job.id} exit`}
            point={robot.route.exit}
            type="exit"
          />
        </div>
      ))}
    </div>
  );
}

export default RobotDebugLayer;
