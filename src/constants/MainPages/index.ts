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
  dashboardDeIdShield: "icon-WhiteShild",
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

export const HEADER_ICON_DARK_COLOR = "#2563FF";
export const MODAL_HEADER_DARK_BG = "#101D46";
export const BUTTON_HOVER_SHADOW_DARK = "0 0 0 2px rgba(79, 140, 255, 0.35)";
export const BUTTON_HOVER_SHADOW_LIGHT = "0 0 0 2px #DCE3F8";
export const BUTTON_HOVER_BG_DARK = "rgba(255, 255, 255, 0.08)";
export const BUTTON_HOVER_BG_LIGHT = "rgba(16, 24, 40, 0.09)";
export const BUTTON_ACTIVE_BG_DARK = "rgba(255, 255, 255, 0.14)";
export const BUTTON_ACTIVE_BG_LIGHT = "rgba(16, 24, 40, 0.14)";
export const boxShadow = "0 0 0 4px rgba(21, 93, 252, 0.22)";

export const headerLogoViewBox = {
  width: headerDimensions.logoWidthPx,
  height: headerDimensions.logoHeightPx,
} as const;

export const ACCENT_KEYS = ["blue", "green", "amber", "red", "lilac"] as const;
export type AccentKey = (typeof ACCENT_KEYS)[number];

export const heroAssets = {
  waveBottom: "/img/hero/wave-bottom.png",
  waveBottomDark: "/img/hero/dark-wave.png",
  titleAccentIcon: "/img/hero/icon.png",
  shield: "/img/hero/shield.webp",
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
  waveFill: "rgb(248, 250, 252)",
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
  waveFill: "rgb(2, 6, 23)",
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

export type AccentLightKey =
  | "lightBlue"
  | "lightGreen"
  | "lightAmber"
  | "lightRed"
  | "lightLilac";

export const ACCENT_LIGHT_MAP: Record<AccentKey, AccentLightKey> = {
  blue: "lightBlue",
  green: "lightGreen",
  amber: "lightAmber",
  red: "lightRed",
  lilac: "lightLilac",
};

export const REVEAL_ANIMATION = {
  durationS: 0.6,
  staggerDelayS: 0.15,
  hoverDurationS: 0.2,
} as const;

export const cardShadows = {
  card: "0 1px 3px 0 rgba(0, 0, 0, 0.04)",
  cardHover: "0 8px 24px rgba(0, 0, 0, 0.08)",
  cardDark: `
    0 20px 60px rgba(0, 0, 0, 0.6),
    0 8px 24px rgba(0, 0, 0, 0.4),
    0 0 60px rgba(97, 154, 241, 0.22)
  `,
  cardDarkHover:
    "0 25px 70px rgba(0,0,0,0.7), 0 10px 30px rgba(0,0,0,0.5), 0 0 60px rgba(59,130,246,0.35)",
} as const;

export const cardShadowsLight = {
  card: "0 1px 3px 0 rgba(0, 0, 0, 0.04)",
  cardDark: `
    0 20px 60px rgba(0, 0, 0, 0.6),
    0 8px 24px rgba(0, 0, 0, 0.4),
    0 0 15px rgba(97, 154, 241, 0.22)
  `,
} as const;

export const CAPABILITIES_CARDS = [
  {
    id: "pii",
    iconId: "#pii",
    accentKey: "blue",
    titleKey: "capabilities.cards.pii.title",
    descKey: "capabilities.cards.pii.description",
  },
  {
    id: "synthetic",
    iconId: "#synthetic",
    accentKey: "lilac",
    titleKey: "capabilities.cards.synthetic.title",
    descKey: "capabilities.cards.synthetic.description",
  },
  {
    id: "framework",
    iconId: "#framework",
    accentKey: "green",
    titleKey: "capabilities.cards.framework.title",
    descKey: "capabilities.cards.framework.description",
  },
  {
    id: "anonymization",
    iconId: "#ai-anonymization",
    accentKey: "amber",
    titleKey: "capabilities.cards.anonymization.title",
    descKey: "capabilities.cards.anonymization.description",
  },
] as const;

export const COMPLIANCE_CARDS = [
  {
    id: "hipaa",
    accentKey: "blue",
    entityCount: 17,
  },
  {
    id: "euGdpr",
    accentKey: "green",
    entityCount: 11,
  },
  {
    id: "ukGdpr",
    accentKey: "amber",
    entityCount: 9,
  },
  {
    id: "swissFadp",
    accentKey: "red",
    entityCount: 8,
  },
] as const;

export const DEFAULT_PHONE_COUNTRY_CODE = "US";

export const readyToProtectActionKeys = {
  primary: "readyToProtect.actions.primary",
  secondary: "readyToProtect.actions.secondary",
} as const;

export const readyToProtectColors = {
  backgroundGradient:
    "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #0ea5e9 100%)",
  wrapperShadow: "none",

  primaryButtonBackground: "#ffffff",
  primaryButtonHoverBackground: "#eff6ff",
  primaryButtonBackdropFilter: "none",

  secondaryButtonBackground: "rgba(255,255,255,0.15)",
  secondaryButtonHoverBackground: "rgba(255,255,255,0.15)",
  secondaryButtonBorder: "transparent",
  secondaryButtonHoverBorder: "transparent",
  secondaryButtonBackdropFilter: "blur(8px)",

  buttonHoverTransform: "none",
};

export const readyToProtectDarkColors = {
  backgroundGradient:
    "linear-gradient(135deg, #081654 0%, #155dfc 50%, #020617 100%)",
  wrapperShadow: "0 0 80px rgba(59,130,246,0.18)",

  primaryButtonBackground: "rgba(255,255,255,0.88)",
  primaryButtonHoverBackground: "rgba(255,255,255,0.95)",
  primaryButtonBackdropFilter: "blur(6px)",

  secondaryButtonBackground: "rgba(255,255,255,0.12)",
  secondaryButtonHoverBackground: "rgba(255,255,255,0.18)",
  secondaryButtonBorder: "rgba(255,255,255,0.15)",
  secondaryButtonHoverBorder: "rgba(255,255,255,0.25)",
  secondaryButtonBackdropFilter: "blur(8px)",

  buttonHoverTransform: "translateY(-1px)",
};

export const footerMainLogoPreserveAspectRatio = "xMinYMid meet";
export const spriteSvgPublicPath = "/sprite.svg";

export const spriteSymbolIds = {
  mainLogo: "icon-main-logo",
} as const;

export const spriteViewBoxes = {
  mainLogo: "0 0 36 36",
} as const;
const footerInternalPaths = {
  pricing: "/pricing",
  support: "/support",
  contact: "/contactus",
} as const;

export type FooterNavLinkItem = {
  labelKey: string;
  to: string;
};

export const footerNavLinks: FooterNavLinkItem[] = [
  { labelKey: "footer.company.pricing", to: footerInternalPaths.pricing },
  { labelKey: "footer.company.support", to: footerInternalPaths.support },
  { labelKey: "footer.company.contact", to: footerInternalPaths.contact },
];

export const footerNavColumnTitleKey = "footer.columns.info";
