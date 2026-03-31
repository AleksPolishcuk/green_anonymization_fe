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
  descriptionTabletMaxWidth: 520,
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

  pillGap: 8,
  pillPaddingY: 9,
  pillPaddingX: 17,
  titleAccentImageBottomOffset: -4,

  actionGap: 12,
  primaryButtonPaddingYMobile: 14,
  primaryButtonPaddingXMobile: 24,
  primaryButtonPaddingYTablet: 17,
  primaryButtonPaddingXTablet: 27,

  visualGridSecondaryMinWidth: 360,
  visualGridSecondaryFraction: "0.9fr",
  contentGridPrimaryFraction: "1.1fr",
  laptopVisualMinWidth: 420,
  laptopVisualMaxWidth: 520,
};

export const heroRadii = {
  pill: 9999,
  button: 14,
  dot: "50%",
};

export const heroTypography = {
  titleMobileFontSize: "32px",
  titleMobileLineHeight: "128%",

  pillFontSize: "12px",
  pillLineHeight: "158%",
  pillLetterSpacing: "-0.01em",

  descriptionFontSize: "18px",
  descriptionLineHeight: "167%",

  primaryButtonFontSizeMobile: "14px",

  statValueFontSizeMobile: "16px",
  statValueFontSizeTablet: "18px",
  statValueFontSizeDesktop: "22px",
  statValueLineHeight: 1.4,
  statValueLetterSpacing: "0.05em",

  statLabelFontSizeMobile: "11px",
  statLabelFontSizeTablet: "12px",
  statLabelLineHeight: 1.5,
};

export const heroAnimation = {
  enterDuration: "2.8s",
  floatDuration: "4.8s",
  floatDelay: "2.8s",
  enterEasing: "cubic-bezier(0.22, 1, 0.36, 1)",
  floatEasing: "ease-in-out",

  enterTranslateX: "190px",
  enterTranslateY: "150px",
  enterRotateStart: "-55deg",
  enterRotateEnd: "360deg",
  enterScaleStart: 0.187,
  enterScaleEnd: 1,

  floatOffsetStart: "0px",
  floatOffsetMiddle: "-10px",
  floatOffsetEnd: "10px",
};

export const heroBreakpoints = {
  laptopMin: 1025,
  laptopMax: 1439,
};

export const heroShadows = {
  primaryButton: `0 4px 8px ${heroColors.buttonShadow}`,
  primaryButtonHover: `0 4px 8px ${heroColors.buttonHoverShadow}`,
  shield: `drop-shadow(0 34px 70px ${heroColors.shieldShadow})`,
};
