import { theme } from "shared/theme/theme";

export const headerNavItems = [
  { key: "solution", href: "#solution" },
  { key: "contactUs", href: "#contact-us" },
] as const;

export const headerRoutes = {
  home: "/",
  signInHash: "#sign-in",
} as const;

export const headerAssetPaths = {
  sprite: "/sprite.svg",
} as const;

export const headerSpriteSymbolIds = {
  burger: "icon-burger",
  close: "icon-close",
} as const;

export function headerSpriteRef(symbolId: string): string {
  return `${headerAssetPaths.sprite}#${symbolId}`;
}

export const headerI18nPrefix = "header";

export const headerDesktopAuthBreakpointPx = 1024;

export const headerTabletBreakpointPx = 768;

export const headerLgBreakpointPx = theme.breakpoints.values.lg;

export const headerLayoutHorizontalPaddingPx = 18;

export const headerMobileMenuId = "guest-mobile-menu";

export const keyboardKey = {
  escape: "Escape",
} as const;

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
  buttonBorderRadiusPx: 14,
  signInColor: "#313643",
  getStartedColor: theme.palette.primary.contrastText,
  getStartedPadding: "10px 20px",
  getStartedWidthPx: 119,
  getStartedHeightPx: 41,
  getStartedBoxShadow: "0 4px 14px 0 rgba(59, 130, 246, 0.3)",
  getStartedHoverBackground: "#114fd8",
  getStartedHoverBoxShadow: "0 6px 14px 0 rgba(59, 130, 246, 0.6)",
} as const;

export const headerInteraction = {
  linkNavHoverColor: theme.palette.text.primary,
  navLinkUnderlineColor: theme.palette.primary.main,
  navLinkUnderlineHeightPx: 2,
  navLinkUnderlineTransitionSeconds: 0.28,
  overlayDurationMs: 280,
  panelDurationMs: 300,
  easing: "cubic-bezier(0.32, 0.72, 0, 1)",
  easingStandard: "cubic-bezier(0.4, 0, 0.2, 1)",
  easingOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  focusRingColor: theme.palette.primary.main,
  focusRingWidthPx: 2,
  focusRingOffsetPx: 3,
  focusRingButtonOffsetPx: 2,
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

export const headerLayout = {
  shellZIndex: 20,
  logoSlotZIndex: 1,
  desktopNavCenterZIndex: 0,
} as const;

export const headerModal = {
  overlayMobileBg: "rgba(16, 24, 40, 0.5)",
  overlayTabletBg: "rgba(255, 255, 255, 0.14)",
  overlayTabletFallbackBg: "rgba(248, 250, 255, 0.85)",
  panelTabletShadow: "-12px 0 28px rgba(16, 24, 40, 0.18)",
  headerBg: "#f3f4f6",
  closeControlSizePx: 36,
  overlayZIndex: 30,
  panelZIndex: 1,
  overlayBackdropBlurPx: 28,
  overlayBackdropSaturatePercent: 190,
  overlayBackdropBrightness: 1.05,
  reducedMotionTransitionMs: 0.01,
} as const;

export const headerBar = {
  backdropBlurPx: 6,
  saturatePercent: 140,
  brightness: 1.02,
  background: "rgba(255, 255, 255, 0.1)",
  fallbackBackground: "rgba(255, 255, 255, 0.72)",
  border: "1px solid rgba(255, 255, 255, 0.22)",
  boxShadow: `0 2px 14px rgba(16, 24, 40, 0.055), inset 0 1px 0 rgba(255, 255, 255, 0.28)`,
  fallbackBoxShadowNoBackdrop: "0 3px 18px rgba(16, 24, 40, 0.065)",
  supportsBlurTestPx: 1,
} as const;
