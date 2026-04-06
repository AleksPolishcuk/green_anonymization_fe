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

export const COMPLIANCE_BADGE_FONT_SIZE = "12px";

export const CONTACT_MESSAGE_MIN_HEIGHT = "120px";
export const CONTACT_FIELD_HEIGHT = "50px";
export const CONTACT_FIELD_GAP = "20px";
export const CONTACT_INPUT_BORDER_RADIUS = "14px";
export const CONTACT_DIAL_CODE_OFFSET = "10px";
export const DEFAULT_PHONE_COUNTRY_CODE = "US";

export const CONTACT_TITLE_FONT_SIZE = "25px";
