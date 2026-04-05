import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

import {
  headerDesktopAuthBreakpointPx,
  keyboardKey,
} from "shared/constants/header";

export function useHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Burger vs inline auth: `headerDesktopAuthBreakpointPx` (1024), not `headerLgBreakpointPx` / `lg` (1440).
  const showBurgerMenu = useMediaQuery(
    `(max-width: ${headerDesktopAuthBreakpointPx - 1}px)`,
  );

  useEffect(() => {
    if (!showBurgerMenu) {
      queueMicrotask(() => {
        closeMenu();
      });
    }
  }, [showBurgerMenu, closeMenu]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === keyboardKey.escape) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return {
    showBurgerMenu,
    isMenuOpen,
    openMenu,
    closeMenu,
  };
}
