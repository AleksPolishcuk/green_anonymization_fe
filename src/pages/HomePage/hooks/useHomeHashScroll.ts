import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function useHomeHashScroll() {
  const location = useLocation();

  useLayoutEffect(() => {
    const id = location.hash.replace(/^#/, "");
    if (!id) return;
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash, location.pathname]);
}
