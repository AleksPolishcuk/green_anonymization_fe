import { useEffect, useRef } from "react";

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-item").forEach((item, i) => {
              const element = item as HTMLElement;
              element.style.transitionDelay = `${i * 0.15}s`;
              element.classList.add("firstVisible");
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return ref;
};
