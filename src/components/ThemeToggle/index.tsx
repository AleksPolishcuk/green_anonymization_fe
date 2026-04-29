import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "store/slices/themeSlice";
import type { RootState } from "store";

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  const isDark = mode === "dark";

  return (
    <IconButton onClick={() => dispatch(toggleTheme())}>
      {isDark ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};
