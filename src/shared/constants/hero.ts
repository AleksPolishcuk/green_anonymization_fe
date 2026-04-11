export const heroAssets = {
  waveBottom: "/img/hero/wave-bottom.png",
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

  sidePaddingTablet: 44,
  sidePaddingDesktop: 112,

  columnGapTablet: 24,
  columnGapLaptop: 20,
  columnGapDesktop: 37,

  statsMarginTopMobile: 40,
  statsMarginTopDesktop: 56,
  actionsMarginTop: 42,
  pillMarginBottom: 32,
  descriptionMarginTop: 24,

  statItemGapMobile: 16,
  statItemGapTablet: 18,
  statItemGapDesktop: 28,

  statDividerHeightMobile: 24,
  statDividerHeightTablet: 28,
  statDividerHeightDesktop: 32,
  titleAccentImageBottomOffset: -4,
};

export const heroBreakpoints = {
  laptopMin: 1025,
  laptopMax: 1439,
};
