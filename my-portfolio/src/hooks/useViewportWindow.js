import { useEffect, useState } from "react";

function readViewportWindow() {
  if (typeof window === "undefined") {
    return { bottom: 0, center: 0, height: 0, top: 0 };
  }

  return {
    bottom: window.scrollY + window.innerHeight,
    center: window.scrollY + window.innerHeight / 2,
    height: window.innerHeight,
    top: window.scrollY,
  };
}

function useViewportWindow() {
  const [viewportWindow, setViewportWindow] = useState(readViewportWindow);

  useEffect(() => {
    let frameId = 0;
    const updateViewport = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => setViewportWindow(readViewportWindow()));
    };

    updateViewport();
    window.addEventListener("scroll", updateViewport, { passive: true });
    window.addEventListener("resize", updateViewport);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateViewport);
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  return viewportWindow;
}

export default useViewportWindow;
