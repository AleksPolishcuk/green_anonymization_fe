export type ThemeMode = "light" | "dark" | "system";

const VALID_THEMES: readonly ThemeMode[] = ["light", "dark", "system"];

export const isValidTheme = (value: unknown): value is ThemeMode => {
  return typeof value === "string" && VALID_THEMES.includes(value as ThemeMode);
};

export const getStoredTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "system";
  const storedTheme = localStorage.getItem("theme");
  return isValidTheme(storedTheme) ? storedTheme : "system";
};

export const saveTheme = (mode: ThemeMode): void => {
  if (typeof window === "undefined") return;

  localStorage.setItem("theme", mode);
};
