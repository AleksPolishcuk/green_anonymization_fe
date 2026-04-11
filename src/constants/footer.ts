export const footerMainLogoPreserveAspectRatio = "xMinYMid meet";
export const spriteSvgPublicPath = "/sprite.svg";

export const spriteSymbolIds = {
  mainLogo: "icon-main-logo",
  twitter: "icon-Twitter",
  linkedin: "icon-Linkedin",
  github: "icon-GitHub",
} as const;

export const spriteViewBoxes = {
  mainLogo: "0 0 200 36",
  social: "0 0 32 32",
} as const;

/** Brand + description column width on tablet (768px–1024px). */
export const footerBrandBlockWidthTabletPx = 204;

export const footerSocialProfileUrls = {
  x: "https://x.com",
  linkedin: "https://www.linkedin.com",
  github: "https://github.com",
} as const;

export const footerI18nLegalKeys = {
  privacy: "footer.legal.privacy",
  privacyFull: "footer.legal.privacyFull",
  terms: "footer.legal.terms",
  termsFull: "footer.legal.termsFull",
  cookies: "footer.legal.cookies",
  cookiesFull: "footer.legal.cookiesFull",
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
