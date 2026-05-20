export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function distance(from, to) {
  return Math.hypot(to.x - from.x, to.y - from.y);
}

export function travelTime(from, to, speed) {
  return Math.max(2200, Math.round((distance(from, to) / speed) * 1000));
}

export function pathTravelTime(start, points, speed) {
  let cursor = start;

  return points.reduce((totalTime, point) => {
    const segmentTime = travelTime(cursor, point, speed);
    cursor = point;

    return totalTime + segmentTime;
  }, 0);
}

function readNumberAttribute(element, name, fallback) {
  const rawValue = element.getAttribute(name);
  const parsedValue = Number.parseFloat(rawValue);

  return Number.isFinite(parsedValue) ? parsedValue : fallback;
}

function readAnchorBias(element, kind, fallback) {
  const anchorX = readNumberAttribute(element, "data-robot-anchor-x", fallback.x);
  const anchorY = readNumberAttribute(element, "data-robot-anchor-y", fallback.y);
  const workX = kind === "source" ? readNumberAttribute(element, "data-robot-work-x", anchorX) : anchorX;
  const workY = kind === "source" ? readNumberAttribute(element, "data-robot-work-y", anchorY) : anchorY;

  return {
    x: readNumberAttribute(element, `data-robot-${kind}-x`, workX),
    y: readNumberAttribute(element, `data-robot-${kind}-y`, workY),
  };
}

export function pointWithinShell(element, shellRect, kind, fallbackBias) {
  const rect = element.getBoundingClientRect();
  const bias = readAnchorBias(element, kind, fallbackBias);

  return {
    x: rect.left - shellRect.left + rect.width * bias.x,
    y: rect.top - shellRect.top + rect.height * bias.y,
  };
}

function samePoint(a, b) {
  return Math.abs(a.x - b.x) < 1 && Math.abs(a.y - b.y) < 1;
}

function cleanPath(points) {
  return points.filter((point, index) => index === 0 || !samePoint(point, points[index - 1]));
}

function createEntryPath(from, to) {
  return cleanPath([
    {
      x: to.x,
      y: from.y,
    },
    to,
  ]);
}

function createBetweenCardsPath(from, to) {
  const routeDistance = distance(from, to);
  const verticalDelta = Math.abs(to.y - from.y);
  const horizontalDelta = Math.abs(to.x - from.x);

  if (routeDistance < 520 || verticalDelta < 170 || horizontalDelta < 140) {
    return [to];
  }

  const midpointY = from.y + (to.y - from.y) * 0.52;

  return cleanPath([
    { x: from.x, y: midpointY },
    { x: to.x, y: midpointY },
    to,
  ]);
}

export function createRoute({ destinationElement, job, shell, shellRect, sourceElement }) {
  const source = pointWithinShell(sourceElement, shellRect, "source", job.sourceBias);
  const destination = pointWithinShell(destinationElement, shellRect, "destination", job.destinationBias);
  const sourceEffectElement = sourceElement.closest(".network-node") || sourceElement;
  const destinationEffectElement = destinationElement.closest(".network-node") || destinationElement;
  const pageHeight = Math.max(shell.scrollHeight, shellRect.height);
  const pageWidth = shellRect.width;
  const spawn = {
    x: source.x < pageWidth / 2 ? -96 : pageWidth + 28,
    y: clamp(source.y + job.spawnOffset.y, 24, pageHeight - 100),
  };
  const exit = {
    x: destination.x < pageWidth / 2 ? -120 : pageWidth + 120,
    y: clamp(destination.y + job.exitOffset.y, 24, pageHeight - 90),
  };
  const paths = {
    toSource: createEntryPath(spawn, source),
    toDestination: createBetweenCardsPath(source, destination),
    exit: [exit],
  };

  return {
    destination,
    destinationElement,
    destinationEffectElement,
    exit,
    paths,
    source,
    sourceElement,
    sourceEffectElement,
    spawn,
  };
}
