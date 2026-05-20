import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { robotEcosystemConfig, robotJobs } from "../data/robotEcosystemData";
import useMinViewportWidth from "../hooks/useMinViewportWidth";
import useReducedMotion from "../hooks/useReducedMotion";
import useRobotScheduler from "../hooks/useRobotScheduler";
import useViewportWindow from "../hooks/useViewportWindow";
import { createRoute } from "../utils/robotRouting";
import { pickNextRobotJob } from "../utils/robotScheduling";
import RobotAgent from "./RobotAgent";
import RobotDebugLayer from "./RobotDebugLayer";
import RobotSpeechBubble from "./RobotSpeechBubble";

function RobotEcosystemLayer() {
  const layerRef = useRef(null);
  const jobIndexRef = useRef(0);
  const [selectedRobot, setSelectedRobot] = useState(null);
  const reducedMotion = useReducedMotion();
  const hasEnoughSpace = useMinViewportWidth(robotEcosystemConfig.minDesktopWidth);
  const viewportWindow = useViewportWindow();
  const disabled = reducedMotion || !hasEnoughSpace;
  const shellRelativeViewport = useMemo(() => {
    const shell = layerRef.current?.closest(".site-shell");
    const shellTop = shell?.getBoundingClientRect().top || 0;
    const top = -shellTop;

    return {
      bottom: top + viewportWindow.height,
      center: top + viewportWindow.height / 2,
      height: viewportWindow.height,
      top,
    };
  }, [viewportWindow]);

  const createRobot = useCallback((currentRobots) => {
    const layer = layerRef.current;
    const shell = layer?.closest(".site-shell");

    if (!layer || !shell || disabled) {
      return null;
    }

    const shellRect = shell.getBoundingClientRect();
    const job = pickNextRobotJob({
      currentRobots,
      jobIndex: jobIndexRef.current,
      jobs: robotJobs,
      shell,
      shellRect,
      viewportWindow: shellRelativeViewport,
    });
    jobIndexRef.current += 1;

    const sourceElement = shell.querySelector(job.source);
    const destinationElement = shell.querySelector(job.destination);

    if (!sourceElement || !destinationElement) {
      return null;
    }

    const route = createRoute({
      destinationElement,
      job,
      shell,
      shellRect,
      sourceElement,
    });

    return {
      id: `${job.id}-${Date.now()}-${Math.round(Math.random() * 1000)}`,
      job,
      route,
    };
  }, [disabled, shellRelativeViewport]);

  const { removeRobot, robots } = useRobotScheduler({
    createRobot,
    disabled,
    initialDelay: robotEcosystemConfig.initialDelay,
    maxRobots: robotEcosystemConfig.maxRobots,
    spawnInterval: robotEcosystemConfig.spawnInterval,
    spawnJitter: robotEcosystemConfig.spawnJitter,
  });

  useEffect(() => {
    if (selectedRobot && !robots.some((robot) => robot.id === selectedRobot.robot.id)) {
      setSelectedRobot(null);
    }
  }, [robots, selectedRobot]);

  useEffect(() => {
    if (!selectedRobot) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setSelectedRobot(null);
    }, 12000);

    return () => window.clearTimeout(timer);
  }, [selectedRobot]);

  const handleRobotSelect = useCallback((robot, point, phase) => {
    setSelectedRobot((currentSelection) => {
      const isSameRobot = currentSelection?.robot.id === robot.id;

      return {
        cycleIndex: isSameRobot ? currentSelection.cycleIndex + 1 : 0,
        phase,
        point,
        robot,
      };
    });
  }, []);

  const handleNextNarration = useCallback(() => {
    setSelectedRobot((currentSelection) =>
      currentSelection
        ? {
            ...currentSelection,
            cycleIndex: currentSelection.cycleIndex + 1,
          }
        : currentSelection,
    );
  }, []);

  return (
    <div ref={layerRef} className="robot-ecosystem-layer" aria-label="Live project robot narration layer">
      {robotEcosystemConfig.debug ? <RobotDebugLayer robots={robots} /> : null}
      {robots.map((robot) => (
        <RobotAgent
          key={robot.id}
          robot={robot}
          selected={selectedRobot?.robot.id === robot.id}
          showDebug={robotEcosystemConfig.debug}
          viewportWindow={shellRelativeViewport}
          onDone={removeRobot}
          onSelect={handleRobotSelect}
        />
      ))}
      <RobotSpeechBubble
        cycleIndex={selectedRobot?.cycleIndex || 0}
        phase={selectedRobot?.phase}
        point={selectedRobot?.point}
        robot={selectedRobot?.robot}
        onClose={() => setSelectedRobot(null)}
        onNext={handleNextNarration}
      />
    </div>
  );
}

export default RobotEcosystemLayer;
