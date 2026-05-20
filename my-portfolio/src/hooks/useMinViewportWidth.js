import { useEffect, useState } from "react";

function useMinViewportWidth(minWidth) {
  const [matches, setMatches] = useState(() =>
    typeof window === "undefined" ? false : window.innerWidth >= minWidth,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);
    const updateMatch = () => setMatches(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);

    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, [minWidth]);

  return matches;
}

export default useMinViewportWidth;
