import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function useHomeHashScroll() {
  const location = useLocation();
  const prevPathnameRef = useRef<string | undefined>(undefined);

  useLayoutEffect(() => {
    const prevPath = prevPathnameRef.current;

    const id = location.hash.replace(/^#/, "");
    if (!id) {
      prevPathnameRef.current = location.pathname;
      return;
    }

    const el = document.getElementById(id);
    if (!el) {
      prevPathnameRef.current = location.pathname;
      return;
    }

    const useInstant = prevPath === undefined || prevPath !== location.pathname;
    const behavior: ScrollBehavior = useInstant ? "auto" : "smooth";

    el.scrollIntoView({ behavior, block: "start" });
    prevPathnameRef.current = location.pathname;
  }, [location.hash, location.pathname]);
}
