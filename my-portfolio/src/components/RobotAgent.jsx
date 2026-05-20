import { useEffect, useState } from "react";
import { robotEcosystemConfig } from "../data/robotEcosystemData";
import { getRobotDomain } from "../utils/robotDomain";
import { travelTime } from "../utils/robotRouting";
import CuteRobot from "./CuteRobot";
import RobotModuleBurst from "./RobotModuleBurst";
import RobotPackage from "./RobotPackage";
import RobotRouteTrace from "./RobotRouteTrace";
import RobotWorkEffect from "./RobotWorkEffect";

function getPose(phase, position, previousPosition) {
  if (phase === "working" || phase === "pickup" || phase === "handoff") {
    return "front";
  }

  const previousPoint = previousPosition || position;
  const dx = position.x - previousPoint.x;
  const dy = position.y - previousPoint.y;

  if (Math.abs(dx) > Math.abs(dy) * 0.7) {
    return dx > 0 ? "right" : "left";
  }

  return dy < -40 ? "back" : "front";
}

function RobotAgent({ robot, onDone, onSelect, selected, showDebug = false, viewportWindow }) {
  const domain = getRobotDomain(robot.job);
  const [phase, setPhase] = useState("spawn");
  const [position, setPosition] = useState(robot.route.spawn);
  const [previousPosition, setPreviousPosition] = useState(robot.route.spawn);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const timers = [];
    const schedule = (delay, task) => {
      const timer = window.setTimeout(() => {
        if (!cancelled) {
          task();
        }
      }, delay);
      timers.push(timer);
    };
    const schedulePath = ({ from, path, phaseName, startAt }) => {
      let elapsed = startAt;
      let cursor = from;

      path.forEach((point) => {
        const segmentTime = travelTime(cursor, point, robotEcosystemConfig.robotSpeed);
        const segmentStart = cursor;

        schedule(elapsed, () => {
          setPhase(phaseName);
          setPreviousPosition(segmentStart);
          setDuration(segmentTime);
          setPosition(point);
        });

        elapsed += segmentTime;
        cursor = point;
      });

      return elapsed;
    };
    let elapsed = 80;
    const pickupTime = 1500;
    const handoffTime = 1700;
    const deliveredBadgeTime = 4200;

    schedule(40, () => {
      setPreviousPosition(robot.route.spawn);
    });

    elapsed = schedulePath({
      from: robot.route.spawn,
      path: robot.route.paths.toSource,
      phaseName: "to-source",
      startAt: 40,
    });

    schedule(elapsed, () => {
      robot.route.sourceEffectElement?.classList.add("is-robot-working");
      setPhase("working");
      setDuration(0);
    });

    elapsed += robot.job.workTime;
    schedule(elapsed, () => {
      robot.route.sourceEffectElement?.classList.remove("is-robot-working");
      robot.route.sourceEffectElement?.classList.add("is-robot-producing");
      setPhase("pickup");
      setDuration(0);
    });

    elapsed += pickupTime;
    schedule(elapsed, () => {
      robot.route.sourceEffectElement?.classList.remove("is-robot-producing");
    });

    elapsed = schedulePath({
      from: robot.route.source,
      path: robot.route.paths.toDestination,
      phaseName: "to-destination",
      startAt: elapsed,
    });

    schedule(elapsed, () => {
      robot.route.destinationEffectElement?.setAttribute("data-robot-delivery", robot.job.label);
      robot.route.destinationEffectElement?.classList.add("is-robot-receiving");
      robot.route.destinationEffectElement?.classList.add("is-robot-delivered");
      setPhase("handoff");
      setDuration(0);
    });

    schedule(elapsed + deliveredBadgeTime, () => {
      robot.route.destinationEffectElement?.classList.remove("is-robot-delivered");
      robot.route.destinationEffectElement?.removeAttribute("data-robot-delivery");
    });

    elapsed += handoffTime;
    schedule(elapsed, () => {
      robot.route.destinationEffectElement?.classList.remove("is-robot-receiving");
    });

    elapsed = schedulePath({
      from: robot.route.destination,
      path: robot.route.paths.exit,
      phaseName: "exit",
      startAt: elapsed,
    });

    schedule(elapsed + 300, () => onDone(robot.id));

    return () => {
      cancelled = true;
      timers.forEach(window.clearTimeout);
      robot.route.sourceEffectElement?.classList.remove("is-robot-working");
      robot.route.sourceEffectElement?.classList.remove("is-robot-producing");
      robot.route.destinationEffectElement?.classList.remove("is-robot-receiving");
      robot.route.destinationEffectElement?.classList.remove("is-robot-delivered");
      robot.route.destinationEffectElement?.removeAttribute("data-robot-delivery");
    };
  }, [onDone, robot]);

  const isMoving = phase === "to-source" || phase === "exit";
  const isCarrying = phase === "pickup" || phase === "to-destination" || phase === "handoff";
  const action = phase === "working" ? "work" : isCarrying ? "carry" : isMoving ? "walk" : "idle";
  const isNearViewport =
    !viewportWindow?.height ||
    (position.y > viewportWindow.top - viewportWindow.height * 0.7 &&
      position.y < viewportWindow.bottom + viewportWindow.height * 0.7);

  return (
    <>
      <RobotRouteTrace
        domain={domain}
        from={previousPosition}
        to={position}
        visible={isNearViewport && (phase === "to-source" || phase === "to-destination" || phase === "exit")}
      />
      {showDebug ? (
        <div
          className={`robot-debug-point robot-debug-current robot-debug-current-${domain} robot-debug-domain-${domain}`}
          style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
          aria-hidden="true"
        >
          <span>{`current: ${robot.job.id} / ${phase}`}</span>
          <small>{`${Math.round(position.x)}, ${Math.round(position.y)}`}</small>
        </div>
      ) : null}
      {isNearViewport && phase === "working" ? <RobotWorkEffect job={robot.job} point={position} /> : null}
      {isNearViewport && phase === "pickup" ? <RobotModuleBurst job={robot.job} phase="pickup" point={position} /> : null}
      {isNearViewport && phase === "handoff" ? (
        <RobotModuleBurst job={robot.job} phase="delivered" point={position} />
      ) : null}
      <button
        type="button"
        className={`robot-agent robot-domain-${domain} robot-agent-${phase}${
          isNearViewport ? " is-viewport-near" : " is-viewport-away"
        }${selected ? " is-robot-selected" : ""}`}
        style={{
          transform: `translate3d(${position.x - 38}px, ${position.y - 82}px, 0)`,
          transitionDuration: `${duration}ms`,
        }}
        tabIndex={isNearViewport ? 0 : -1}
        aria-label={`Explain ${robot.job.label} robot`}
        onClick={(event) => {
          event.stopPropagation();
          onSelect(robot, position, phase);
        }}
      >
        <CuteRobot
          action={action}
          outfit={robot.job.outfit}
          payload={robot.job.payload}
          pose={getPose(phase, position, previousPosition)}
          tool={phase === "working" ? robot.job.tool : "none"}
        />
        {isCarrying ? <RobotPackage job={robot.job} /> : null}
      </button>
    </>
  );
}

export default RobotAgent;
