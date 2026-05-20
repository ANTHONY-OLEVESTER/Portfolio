import { useEffect, useMemo, useRef, useState } from "react";
import { getScreenGuide } from "../data/screenGuideData";
import CuteRobot from "./CuteRobot";
import GuideSpeechBubble from "./GuideSpeechBubble";

const INITIAL_Y = 220;
const CATCH_UP_FACTOR = 0.085;
const VIEWPORT_FOLLOW_RATIO = 0.56;
const SHELL_EDGE_PADDING = 130;
const GUIDE_AUTOSHOW_COOLDOWN = 9000;
const GUIDE_AUTOCLOSE_DELAY = 11000;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getTargetY() {
  const shell = document.querySelector(".site-shell");
  const shellTop = shell?.getBoundingClientRect().top || 0;
  const shellHeight = shell?.scrollHeight || document.documentElement.scrollHeight;
  const desiredY = -shellTop + window.innerHeight * VIEWPORT_FOLLOW_RATIO;

  return clamp(desiredY, SHELL_EDGE_PADDING, shellHeight - SHELL_EDGE_PADDING);
}

function ScrollCompanionRobot({ activeSection = "hero" }) {
  const [direction, setDirection] = useState("down");
  const [guideIndex, setGuideIndex] = useState(0);
  const [guideOpen, setGuideOpen] = useState(false);
  const companionRef = useRef(null);
  const positionRef = useRef(INITIAL_Y);
  const targetRef = useRef(INITIAL_Y);
  const lastGuideShownAtRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const guides = useMemo(() => getScreenGuide(activeSection), [activeSection]);

  useEffect(() => {
    let frameId = 0;
    let cancelled = false;

    const updateTarget = () => {
      const nextDirection = window.scrollY >= lastScrollYRef.current ? "down" : "up";
      lastScrollYRef.current = window.scrollY;
      targetRef.current = getTargetY();
      setDirection(nextDirection);
    };

    const animate = () => {
      const distance = targetRef.current - positionRef.current;
      positionRef.current += distance * CATCH_UP_FACTOR;

      if (companionRef.current) {
        companionRef.current.style.transform = `translate3d(0, ${positionRef.current}px, 0)`;
      }

      if (!cancelled) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    targetRef.current = getTargetY();
    positionRef.current = targetRef.current - 90;
    lastScrollYRef.current = window.scrollY;
    updateTarget();
    animate();

    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
    };
  }, []);

  useEffect(() => {
    setGuideOpen(false);
    setGuideIndex(0);

    if (Date.now() - lastGuideShownAtRef.current < GUIDE_AUTOSHOW_COOLDOWN) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      lastGuideShownAtRef.current = Date.now();
      setGuideOpen(true);
    }, 900);

    return () => window.clearTimeout(timer);
  }, [activeSection]);

  useEffect(() => {
    if (!guideOpen) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setGuideOpen(false);
    }, GUIDE_AUTOCLOSE_DELAY);

    return () => window.clearTimeout(timer);
  }, [guideOpen, guideIndex]);

  const handleGuideClick = () => {
    lastGuideShownAtRef.current = Date.now();
    setGuideOpen(true);
    setGuideIndex((currentIndex) => (currentIndex + 1) % guides.length);
  };

  return (
    <div
      ref={companionRef}
      className={`scroll-companion-robot scroll-companion-${direction}`}
      style={{ transform: `translate3d(0, ${INITIAL_Y}px, 0)` }}
    >
      <span className="scroll-companion-track" />
      <button
        type="button"
        className="scroll-companion-button"
        onClick={handleGuideClick}
        aria-label="Open portfolio guide note"
      >
        <CuteRobot
          action="walk"
          className="scroll-companion-cute-robot"
          outfit="repair"
          payload="brain"
          pose="front"
          tool="wrench"
        />
      </button>
      <span className="scroll-companion-label">Follow bot</span>
      {guideOpen ? (
        <GuideSpeechBubble
          guide={guides[guideIndex % guides.length]}
          index={guideIndex}
          total={guides.length}
          onClose={() => setGuideOpen(false)}
          onNext={handleGuideClick}
        />
      ) : null}
    </div>
  );
}

export default ScrollCompanionRobot;
