export const AUTH_STATUS = {
  idle: "idle",
  authenticated: "authenticated",
  unauthenticated: "unauthenticated",
  unregistered: "unregistered",
  error: "error",
} as const;

export type AuthStatus = (typeof AUTH_STATUS)[keyof typeof AUTH_STATUS];

export const signinStats = [
  {
    valueKey: "signIn.hero.stats.clients.value",
    labelKey: "signIn.hero.stats.clients.label",
  },
  {
    valueKey: "signIn.hero.stats.records.value",
    labelKey: "signIn.hero.stats.records.label",
  },
  {
    valueKey: "signIn.hero.stats.uptime.value",
    labelKey: "signIn.hero.stats.uptime.label",
  },
] as const;

export const shieldGrowDuration = 1200;

export const headingDelay = 150;
export const paragraphDelay = 300;

export const statsDelayOne = 450;
export const statsDelayTwo = 600;
export const statsDelayThree = 750;

export const heroRevealDuration = 700;

export const authLightColors = {
  surface: "rgba(255,255,255,0.9)",
  surfaceHover: "rgba(249,250,251,0.95)",

  border: "rgba(208, 213, 221, 0.7)",
  borderHover: "rgba(37, 99, 235, 0.35)",
  borderFocus: "rgba(37, 99, 235, 0.5)",

  shadow: "0 2px 20px rgba(16, 24, 40, 0.06)",
  shadowHover: "0 8px 24px rgba(37, 99, 235, 0.12)",

  icon: "#9CA3AF",
};

export const authDarkColors = {
  surface: "rgba(15, 23, 42, 0.82)",
  surfaceHover: "rgba(30, 41, 59, 0.9)",

  border: "rgba(71, 85, 105, 0.6)",
  borderHover: "rgba(59, 130, 246, 0.45)",
  borderFocus: "rgba(96, 165, 250, 0.55)",

  shadow: `
      0 20px 60px rgba(0,0,0,0.55),
      0 8px 24px rgba(0,0,0,0.35),
      0 0 24px rgba(59,130,246,0.12)
    `,

  shadowHover: `
      0 24px 70px rgba(0,0,0,0.65),
      0 10px 30px rgba(59,130,246,0.2)
    `,

  icon: "#64748B",
};
