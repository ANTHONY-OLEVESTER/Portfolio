export function getDerivedRobotLimit({ averageJobDuration, maxRobots, spawnInterval }) {
  return Math.min(maxRobots, Math.max(2, Math.ceil(averageJobDuration / spawnInterval)));
}

export function createWeightedJobQueue(jobs) {
  return jobs.flatMap((job) => Array.from({ length: Math.max(1, job.priority || 1) }, () => job));
}

function hasActiveCollision(currentRobots, job) {
  return currentRobots.some(
    (robot) =>
      robot.job.id === job.id ||
      robot.job.source === job.source ||
      robot.job.destination === job.destination,
  );
}

function getElementDistanceFromViewport(element, shellRect, viewportWindow) {
  if (!element || !viewportWindow.height) {
    return Number.POSITIVE_INFINITY;
  }

  const rect = element.getBoundingClientRect();
  const elementCenter = rect.top - shellRect.top + rect.height / 2;

  return Math.abs(elementCenter - viewportWindow.center);
}

function getViewportPriority(job, shell, shellRect, viewportWindow) {
  const sourceElement = shell.querySelector(job.source);
  const destinationElement = shell.querySelector(job.destination);
  const sourceDistance = getElementDistanceFromViewport(sourceElement, shellRect, viewportWindow);
  const destinationDistance = getElementDistanceFromViewport(destinationElement, shellRect, viewportWindow);
  const nearestDistance = Math.min(sourceDistance, destinationDistance);
  const nearViewport = viewportWindow.height * 1.35;

  if (nearestDistance < viewportWindow.height * 0.5) {
    return 3;
  }

  if (nearestDistance < nearViewport) {
    return 2;
  }

  return 0;
}

export function pickNextRobotJob({ currentRobots, jobIndex, jobs, shell, shellRect, viewportWindow }) {
  const viewportWeightedJobs = jobs.map((job) => ({
    ...job,
    priority: (job.priority || 1) + getViewportPriority(job, shell, shellRect, viewportWindow),
  }));
  const weightedJobs = createWeightedJobQueue(viewportWeightedJobs);
  const openJobs = weightedJobs.filter((job) => !hasActiveCollision(currentRobots, job));

  if (openJobs.length) {
    return openJobs[jobIndex % openJobs.length];
  }

  const activeJobIds = new Set(currentRobots.map((robot) => robot.job.id));
  const fallbackJobs = jobs.filter((job) => !activeJobIds.has(job.id));
  const fallbackPool = fallbackJobs.length ? fallbackJobs : jobs;

  return fallbackPool[jobIndex % fallbackPool.length];
}
