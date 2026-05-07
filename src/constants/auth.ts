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
