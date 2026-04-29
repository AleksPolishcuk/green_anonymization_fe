import { IconButton, useMediaQuery } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "store/slices/themeSlice";
import type { RootState } from "store";

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  const isDark = mode === "system" ? prefersDark : mode === "dark";

  return (
    <IconButton onClick={() => dispatch(toggleTheme())}>
      {isDark ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};
