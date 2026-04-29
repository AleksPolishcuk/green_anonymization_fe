import { useEffect, useRef, useState } from "react";

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

    const lastCardDelay = (totalItems - 1) * 0.15;
    const animationDuration = 0.6;
    const timeout = window.setTimeout(
      () => setAnimDone(true),
      (lastCardDelay + animationDuration) * 1000,
    );

    return () => clearTimeout(timeout);
  }, [revealed, totalItems]);

  return { ref, revealed, animDone };
};
