import { useEffect, useRef } from "react";

export const useScrollReveal = () => {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-card").forEach((card, i) => {
              (card as HTMLElement).style.transitionDelay = `${i * 0.3}s`;
              card.classList.add("visible");
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return ref;
};
