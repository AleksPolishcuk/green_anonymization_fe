export const CAPABILITIES_LAYOUT = {
  titleBlockMaxWidth: 760,
  titleBlockMarginBottom: 64,
  subtitleFontSize: "12px",
  subtitleLetterSpacing: "0.05em",
  cardsGap: 20,
  cardPaddingMobile: "32px",
  cardPaddingDesktop: "32px 128px 32px 32px",
  cardContentGap: 16,
  cardBoxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.04)",
  iconSize: 44,
  iconBorderRadius: 8,
  iconSvgSize: 20,
} as const;

export const CAPABILITIES_ICON_BACKGROUNDS = {
  pii: "#eff6ff",
  synthetic: "#f5f3ff",
  framework: "#ecfdf5",
  anonymization: "#fffbeb",
} as const;

export const CAPABILITIES_CARDS = [
  {
    id: "pii",
    iconId: "#pii",
    iconBg: CAPABILITIES_ICON_BACKGROUNDS.pii,
    titleKey: "capabilities.cards.pii.title",
    descKey: "capabilities.cards.pii.description",
  },
  {
    id: "synthetic",
    iconId: "#synthetic",
    iconBg: CAPABILITIES_ICON_BACKGROUNDS.synthetic,
    titleKey: "capabilities.cards.synthetic.title",
    descKey: "capabilities.cards.synthetic.description",
  },
  {
    id: "framework",
    iconId: "#framework",
    iconBg: CAPABILITIES_ICON_BACKGROUNDS.framework,
    titleKey: "capabilities.cards.framework.title",
    descKey: "capabilities.cards.framework.description",
  },
  {
    id: "anonymization",
    iconId: "#ai-anonymization",
    iconBg: CAPABILITIES_ICON_BACKGROUNDS.anonymization,
    titleKey: "capabilities.cards.anonymization.title",
    descKey: "capabilities.cards.anonymization.description",
  },
] as const;
