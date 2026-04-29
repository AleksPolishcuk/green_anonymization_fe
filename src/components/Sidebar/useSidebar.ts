import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const useSidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sidebarRef = useRef<HTMLElement | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (!isMobileOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileOpen]);

  const handleSidebarClick = () => {
    if (!isMobile) return;
    setIsMobileOpen((prev) => !prev);
  };

  const handleNavClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsMobileOpen(false);
  };

  return {
    sidebarRef,
    isMobileOpen,
    handleSidebarClick,
    handleNavClick,
  };
};
