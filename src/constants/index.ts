const HIPAA_COLORS = {
  accentColor: "#2563eb",
  badgeBg: "#dbeafe",
  badgeColor: "#1d4ed8",
} as const;

const EU_GDPR_COLORS = {
  accentColor: "#16a34a",
  badgeBg: "#dcfce7",
  badgeColor: "#15803d",
} as const;

const UK_DPI_COLORS = {
  accentColor: "#d97706",
  badgeBg: "#fef3c7",
  badgeColor: "#b45309",
} as const;

const SWISS_FADP_COLORS = {
  accentColor: "#dc2626",
  badgeBg: "#fee2e2",
  badgeColor: "#b91c1c",
} as const;

export const COMPLIANCE_CARDS = [
  { id: "hipaa", ...HIPAA_COLORS, entityCount: 17 },
  { id: "euGdpr", ...EU_GDPR_COLORS, entityCount: 11 },
  { id: "ukDpi", ...UK_DPI_COLORS, entityCount: 9 },
  { id: "swissFadp", ...SWISS_FADP_COLORS, entityCount: 8 },
] as const;

// Temporary font size values — replace with theme typography
// once the theme PR is approved and merged
export const COMPLIANCE_FONT_SIZE = {
  badge: "12px",
  entityCount: "14px",
  title: "16px",
} as const;
