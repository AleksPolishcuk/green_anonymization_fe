import { useEffect, useRef, useState } from "react";

export const useScrollReveal = () => {
  const ref = useRef<HTMLUListElement>(null);
  const [revealed, setRevealed] = useState(false);

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

  return { ref, revealed };
};
