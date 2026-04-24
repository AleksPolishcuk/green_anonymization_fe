export const heroAssets = {
  waveBottom: "/img/hero/wave-bottom.png",
  waveBottomDark: "/img/hero/dark-wave.png",
  titleAccentIcon: "/img/hero/icon.png",
  shield: "/img/hero/shield.png",
};

export const heroStatsKeys = [
  "stats.hipaa",
  "stats.eugdpr",
  "stats.ukgdpr",
  "stats.fadp",
] as const;

export const heroColors = {
  pillBackground: "rgba(59, 130, 246, 0.08)",
  pillBorder: "rgba(59, 130, 246, 0.15)",
  buttonShadow: "rgba(59, 130, 246, 0.28)",
  buttonHoverShadow: "rgba(59, 130, 246, 0.34)",
  shieldShadow: "rgba(80, 110, 255, 0.18)",
  radialTopLeft: "rgba(197, 202, 245, 0.55)",
  radialBottomRight: "rgba(216, 208, 240, 0.5)",
  radialCenter: "rgba(255, 255, 255, 0.7)",
  gradientStart: "#e8eaf6",
  gradientMiddle: "#f0f2ff",
  gradientEnd: "#ede8f5",
  pillGlowBorder: "transparent",
  pillGlow: "transparent",
};

export const heroDarkColors = {
  pillBackground: "rgba(59, 130, 246, 0.12)",
  pillBorder: "rgba(59, 130, 246, 0.25)",
  buttonShadow: "rgba(59, 130, 246, 0.4)",
  buttonHoverShadow: "rgba(59, 130, 246, 0.5)",
  shieldShadow: "rgba(80, 110, 255, 0.35)",
  radialTopLeft: "rgba(30, 41, 80, 0.6)",
  radialBottomRight: "rgba(40, 30, 70, 0.5)",
  radialCenter: "rgba(15, 23, 42, 0.7)",
  gradientStart: "#081654",
  gradientMiddle: "#050c2e",
  gradientEnd: "#020617",
  pillGlowBorder: "rgba(59,130,246,0.15)",
  pillGlow: "rgba(59,130,246,0.25)",
};

export const heroLayout = {
  contentDesktopMaxWidth: 684,
  titleDesktopMaxWidth: 720,
  descriptionMobileMaxWidth: 302,
  descriptionTabletMaxWidth: 420,
  descriptionDesktopMaxWidth: 500,

  visualTabletMinWidth: 320,
  visualDesktopWidth: 583,
  visualDesktopMinWidth: 583,
  visualTabletHeight: 460,
  visualDesktopHeight: 694,

  heroTopPaddingMobile: 171,
  heroBottomPaddingMobile: 126,
  heroTopPaddingDesktop: 208,
  heroBottomPaddingDesktop: 193,
};

export const heroBreakpoints = {
  laptopMin: 1025,
  laptopMax: 1439,
};
