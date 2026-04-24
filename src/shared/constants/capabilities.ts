export const ACCENT_KEYS = ["blue", "green", "amber", "red", "lilac"] as const;
export type AccentKey = (typeof ACCENT_KEYS)[number];

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

export const cardShadows = {
  card: "0 1px 3px 0 rgba(0, 0, 0, 0.04)",
  cardDark: `
    0 20px 60px rgba(0, 0, 0, 0.6),
    0 8px 24px rgba(0, 0, 0, 0.4),
    0 0 60px rgba(97, 154, 241, 0.22)
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
