export const footerMainLogoPreserveAspectRatio = "xMinYMid meet";
export const spriteSvgPublicPath = "/sprite.svg";

export const spriteSymbolIds = {
  mainLogo: "icon-main-logo",
} as const;

export const spriteViewBoxes = {
  mainLogo: "0 0 200 36",
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
