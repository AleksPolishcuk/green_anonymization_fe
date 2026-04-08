import { theme } from "shared/theme/theme";

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

export const CAPABILITIES_CARDS = [
  {
    id: "pii",
    iconId: "#pii",
    iconStroke: theme.palette.accent.blue,
    iconBg: theme.palette.accent.lightBlue,
    titleKey: "capabilities.cards.pii.title",
    descKey: "capabilities.cards.pii.description",
  },
  {
    id: "synthetic",
    iconId: "#synthetic",
    iconStroke: theme.palette.accent.lilac,
    iconBg: theme.palette.accent.lightLilac,
    titleKey: "capabilities.cards.synthetic.title",
    descKey: "capabilities.cards.synthetic.description",
  },
  {
    id: "framework",
    iconId: "#framework",
    iconStroke: theme.palette.accent.green,
    iconBg: theme.palette.accent.lightGreen,
    titleKey: "capabilities.cards.framework.title",
    descKey: "capabilities.cards.framework.description",
  },
  {
    id: "anonymization",
    iconId: "#ai-anonymization",
    iconStroke: theme.palette.accent.amber,
    iconBg: theme.palette.accent.lightAmber,
    titleKey: "capabilities.cards.anonymization.title",
    descKey: "capabilities.cards.anonymization.description",
  },
] as const;
