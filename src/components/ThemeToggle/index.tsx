import { IconButton, useMediaQuery } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "store/slices/themeSlice";
import type { RootState } from "store";
import { useTranslation } from "react-i18next";

export const ThemeToggle = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  const isDark = mode === "system" ? prefersDark : mode === "dark";

  return (
    <IconButton
      onClick={() => dispatch(toggleTheme())}
      aria-label={isDark ? t("themeToggle.light") : t("themeToggle.dark")}
    >
      {isDark ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};
