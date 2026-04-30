import { useEffect, useRef, useState } from "react";
import { REVEAL_ANIMATION } from "constants/MainPages";

export const useScrollReveal = (totalItems = 4) => {
  const ref = useRef<HTMLUListElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [animDone, setAnimDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [revealed]);

  useEffect(() => {
    if (!revealed) return;

    const lastCardDelay = (totalItems - 1) * REVEAL_ANIMATION.staggerDelayS;
    const animationDuration = REVEAL_ANIMATION.durationS;
    const timeout = window.setTimeout(
      () => setAnimDone(true),
      (lastCardDelay + animationDuration) * 1000,
    );

    return () => clearTimeout(timeout);
  }, [revealed, totalItems]);

  return { ref, revealed, animDone };
};
