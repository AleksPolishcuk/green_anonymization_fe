const mainBlue = "#2563eb";
const lightBlue = "#dbeafe";
const darkBlue = "#1d4ed8";

const mainGreen = "#16a34a";
const lightGreen = "#dcfce7";
const darkGreen = "#15803d";

const mainAmber = "#d97706";
const lightAmber = "#fef3c7";
const darkAmber = "#b45309";

const mainRed = "#dc2626";
const lightRed = "#fee2e2";
const darkRed = "#b91c1c";

export const CARD_BORDER_COLOR = "#e5e7eb";

export const COMPLIANCE_CARDS = [
  {
    id: "hipaa",
    accentColor: mainBlue,
    badgeBg: lightBlue,
    badgeColor: darkBlue,
    entityCount: 17,
  },
  {
    id: "euGdpr",
    accentColor: mainGreen,
    badgeBg: lightGreen,
    badgeColor: darkGreen,
    entityCount: 11,
  },
  {
    id: "ukDpi",
    accentColor: mainAmber,
    badgeBg: lightAmber,
    badgeColor: darkAmber,
    entityCount: 9,
  },
  {
    id: "swissFadp",
    accentColor: mainRed,
    badgeBg: lightRed,
    badgeColor: darkRed,
    entityCount: 8,
  },
] as const;

// Temporary font size values — replace with theme typography
// once the theme PR is approved and merged
export const COMPLIANCE_FONT_SIZE = {
  badge: "12px",
  entityCount: "14px",
  title: "16px",
} as const;

export const FONT_WEIGHT = {
  regular: 400,
  semiBold: 600,
  bold: 700,
} as const;
