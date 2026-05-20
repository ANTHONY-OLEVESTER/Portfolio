import { useCallback, useEffect, useState } from "react";

function useRobotScheduler({
  createRobot,
  disabled = false,
  initialDelay,
  maxRobots,
  spawnInterval,
  spawnJitter = 0,
}) {
  const [robots, setRobots] = useState([]);
  const hasRobotCap = Number.isFinite(maxRobots);

  const removeRobot = useCallback((robotId) => {
    setRobots((currentRobots) => currentRobots.filter((robot) => robot.id !== robotId));
  }, []);

  useEffect(() => {
    if (disabled) {
      setRobots([]);
      return undefined;
    }

    let spawnTimer;
    const spawnRobot = () => {
      setRobots((currentRobots) => {
        if (hasRobotCap && currentRobots.length >= maxRobots) {
          return currentRobots;
        }

        const nextRobot = createRobot(currentRobots);
        return nextRobot ? [...currentRobots, nextRobot] : currentRobots;
      });
    };
    const scheduleNextSpawn = (delay) => {
      spawnTimer = window.setTimeout(() => {
        spawnRobot();
        scheduleNextSpawn(spawnInterval + (Math.random() * 2 - 1) * spawnJitter);
      }, Math.max(1200, delay));
    };

    scheduleNextSpawn(initialDelay);

    return () => {
      window.clearTimeout(spawnTimer);
    };
  }, [createRobot, disabled, hasRobotCap, initialDelay, maxRobots, spawnInterval, spawnJitter]);

  return { removeRobot, robots };
}

export default useRobotScheduler;
