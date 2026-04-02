export const headerNavItems = [
  { key: "solution", href: "#solution" },
  { key: "contactUs", href: "#contact-us" },
] as const;

export const headerI18nPrefix = "header";

export const headerBreakpoint = 1440;

export const headerDesktopAuthBreakpointPx = 1024;

export const headerTabletBreakpointPx = 768;

export const headerMobileGlassPaddingPx = 18;

export const headerBurgerPanelWidthPx = 375;

export const headerLogoLockBreakpointPx = headerTabletBreakpointPx;

export const headerMobileTabletBarHeightPx = 68;

export const headerDesktopBar = {
  widthPx: 1216,
  heightPx: 74,
  borderRadiusPx: 32,
} as const;

export const headerLogoSpriteId = "icon-main-logo";

export const headerLogoViewBox = {
  width: 200,
  height: 36,
} as const;

export const headerLogoDesktop = {
  widthPx: 200,
  heightPx: 36,
} as const;

export const headerCta = {
  authActionsGapPx: 16,
  signInColor: "#313643",
  signInFontSizePx: 14,
  signInFontWeight: 500,
  signInLineHeight: 1.5,
  getStartedColor: "#fff",
  getStartedBorderRadiusPx: 14,
  getStartedPadding: "10px 20px",
  getStartedWidthPx: 119,
  getStartedHeightPx: 41,
  getStartedFontSizePx: 14,
  getStartedFontWeight: 600,
  getStartedLineHeight: 1.5,
  getStartedBoxShadow: "0 4px 14px 0 rgba(59, 130, 246, 0.3)",
  getStartedHoverBackground: "#114fd8",
  getStartedHoverBoxShadow: "0 6px 14px 0 rgba(59, 130, 246, 0.6)",
} as const;

/** Hover / focus / motion — aligned with glass header (primary #155dfc). */
export const headerInteraction = {
  /** Nav links hover: text + animated underline. */
  linkNavHoverColor: "#101828",
  navLinkUnderlineColor: "#155dfc",
  navLinkUnderlineHeightPx: 2,
  /** Modal overlay + panel */
  overlayDurationMs: 280,
  panelDurationMs: 300,
  easing: "cubic-bezier(0.32, 0.72, 0, 1)",
  easingStandard: "cubic-bezier(0.4, 0, 0.2, 1)",
  easingOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  focusRingColor: "#155dfc",
  focusRingWidthPx: 2,
  focusRingOffsetPx: 3,
  focusRingButtonOffsetPx: 2,
  /** Soft glow so focus is obvious on glass / white */
  focusRingShadow: "0 0 0 4px rgba(21, 93, 252, 0.22)",
  focusRingStrongShadow: "0 0 0 4px rgba(21, 93, 252, 0.45)",
  linkFocusRadiusPx: 8,
  linkPadY: 6,
  linkPadX: 10,
  navLinkUnderlineBottomPx: 3,
  iconButtonHoverBg: "rgba(16, 24, 40, 0.1)",
  iconButtonHoverBgActive: "rgba(16, 24, 40, 0.14)",
  closeButtonHoverBg: "rgba(16, 24, 40, 0.09)",
  iconButtonScaleHover: 1.06,
  iconButtonScaleActive: 1,
  iconButtonRadiusPx: 10,
  transitionFastSeconds: 0.22,
  transitionButtonSeconds: 0.24,
} as const;

export const headerModal = {
  overlayMobileBg: "rgba(16, 24, 40, 0.5)",
  overlayTabletBg: "rgba(255, 255, 255, 0.14)",
  overlayTabletFallbackBg: "rgba(248, 250, 255, 0.85)",
  panelTabletShadow: "-12px 0 28px rgba(16, 24, 40, 0.18)",
  headerBg: "#f3f4f6",
  bodyBg: "#ffffff",
  navLinkColor: "#4a5565",
  bodyGapPx: 30,
  navGapPx: 24,
  closeControlSizePx: 36,
} as const;

export const headerSurfaceEffect = {
  borderWidth: 0.07,
  brightness: 50,
  opacity: 0.93,
  blur: 2,
  displace: 0,
  backgroundOpacity: 0.12,
  saturation: 1.8,
  distortionScale: -150,
  mixBlendMode: "difference" as const,
} as const;
