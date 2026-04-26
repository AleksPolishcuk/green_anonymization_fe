export const headerNavItems = [
  { key: "solution", to: "/#solution" as const },
  { key: "contactUs", to: "/contactus" as const },
] as const;

export const headerRoutes = {
  home: "/",
  dashboard: "/dashboard",
} as const;

const headerAssetPaths = {
  sprite: "/sprite.svg",
} as const;

export const headerSpriteSymbolIds = {
  burger: "icon-burger",
  close: "icon-close",
  dashboardDeIdShield: "icon-WhiteShield",
  dashboardDeIdArrow: "icon-IconArrow",
} as const;

export function headerSpriteRef(symbolId: string): string {
  return `${headerAssetPaths.sprite}#${symbolId}`;
}

export const headerI18nPrefix = "header";

export const headerBreakpoints = {
  desktopAuthPx: 1024,
  tabletPx: 768,
} as const;

export const headerMobileMenuId = "guest-mobile-menu";

export const headerDimensions = {
  layoutHorizontalPaddingPx: 12,
  burgerPanelWidthPx: 375,
  mobileTabletBarHeightPx: 68,
  desktopBarWidthPx: 1216,
  desktopBarHeightPx: 74,
  barBorderRadiusPx: 32,
  logoWidthPx: 200,
  logoHeightPx: 36,
  closeControlSizePx: 36,
} as const;

export const headerLogoSpriteId = "icon-main-logo";

export const headerLogoViewBox = {
  width: headerDimensions.logoWidthPx,
  height: headerDimensions.logoHeightPx,
} as const;
