function RobotRouteTrace({ domain, from, to, visible }) {
  if (!visible || !from || !to) {
    return null;
  }

  return (
    <svg className={`robot-route-trace robot-route-${domain}`} aria-hidden="true" focusable="false">
      <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} />
    </svg>
  );
}

export default RobotRouteTrace;
