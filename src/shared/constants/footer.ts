export const footerBackground = "#F9FAFB";

export const footerRootBorderTopColor = "#F3F4F6";
export const footerHeadingColor = "#111827";

export const footerNavColumnHeadingColor = "#101828";
export const footerNavColumnHeadingFontSizePx = 14;
export const footerNavColumnHeadingLineHeight = 1.53;
export const footerBodyColor = "#4B5563";
export const footerMutedColor = "#9CA3AF";
export const footerSocialButtonBackground = "#F3F4F6";
export const footerSocialButtonHoverBackground = "#E5E7EB";
export const footerDividerColor = "#E5E7EB";

export const footerSocialIconButtonPx = 36;
export const footerSocialIconBorderRadiusPx = 8;
export const footerSocialIconGapPx = 8;

export const footerMainLogoMaxWidthPx = 200;
export const footerMainLogoHeightPx = 36;

export const footerDesktopContainerMaxWidthPx = 1152;

export const footerDesktopMainBlockMinHeightPx = 280;

export const spriteSymbolIds = {
  mainLogo: "icon-main-logo",
  twitter: "icon-Twitter",
  linkedin: "icon-Linkedin",
  github: "icon-GitHub",
} as const;

export const spriteViewBoxes = {
  mainLogo: "7 0 100 32",
  social: "0 0 32 32",
} as const;

export const footerSocialProfileUrls = {
  x: "https://x.com",
  linkedin: "https://www.linkedin.com",
  github: "https://github.com",
} as const;

export const footerInternalPaths = {
  features: "/features",
  pricing: "/pricing",
  api: "/api",
  integrations: "/integrations",
  documentation: "/documentation",
  guides: "/guides",
  blog: "/blog",
  support: "/support",
  about: "/about",
  careers: "/careers",
  contact: "/contact",
  legal: "/legal",
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
} as const;

export type FooterNavLinkItem = {
  labelKey: string;
  to: string;
};

export type FooterNavGroup = {
  columnTitleKey: string;
  links: FooterNavLinkItem[];
};

export const footerNavGroups: FooterNavGroup[] = [
  {
    columnTitleKey: "footer.columns.product",
    links: [
      { labelKey: "footer.product.features", to: footerInternalPaths.features },
      { labelKey: "footer.product.pricing", to: footerInternalPaths.pricing },
      { labelKey: "footer.product.api", to: footerInternalPaths.api },
      {
        labelKey: "footer.product.integrations",
        to: footerInternalPaths.integrations,
      },
    ],
  },
  {
    columnTitleKey: "footer.columns.resources",
    links: [
      {
        labelKey: "footer.resources.documentation",
        to: footerInternalPaths.documentation,
      },
      { labelKey: "footer.resources.guides", to: footerInternalPaths.guides },
      { labelKey: "footer.resources.blog", to: footerInternalPaths.blog },
      { labelKey: "footer.resources.support", to: footerInternalPaths.support },
    ],
  },
  {
    columnTitleKey: "footer.columns.company",
    links: [
      { labelKey: "footer.company.about", to: footerInternalPaths.about },
      { labelKey: "footer.company.careers", to: footerInternalPaths.careers },
      { labelKey: "footer.company.contact", to: footerInternalPaths.contact },
      { labelKey: "footer.company.legal", to: footerInternalPaths.legal },
    ],
  },
];
