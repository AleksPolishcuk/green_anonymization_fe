import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

import { headerBreakpoints } from "constants/header";

export function useHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const showBurgerMenu = useMediaQuery(
    `(max-width: ${headerBreakpoints.desktopAuthPx - 1}px)`,
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

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return {
    showBurgerMenu,
    isMenuOpen,
    openMenu,
    closeMenu,
  };
}
