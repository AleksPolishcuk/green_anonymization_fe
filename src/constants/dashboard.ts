import { theme } from "shared/theme/theme";

export const CHART_COLORS = {
  primary: "#155dfc",
  blue: "#3B82F6",
  teal: "#10B981",
  amber: "#F59E0B",
  lilac: "#7F22FE",
  gray: "#D1D5DB",
  activeBar: "#155dfc",
  inactiveBar: "#D1D5DB",
} as const;

export const COMPLIANCE_COLORS: Record<string, string> = {
  HIPAA: "#000000",
  "EU GDPR": "#92bfff",
  "UK GDPR": "#94e9b8",
  FADP: "#aec7ed",
};

export const DEID_METHOD_COLORS: Record<string, string> = {
  Redact: CHART_COLORS.inactiveBar,
  Replace: CHART_COLORS.inactiveBar,
  Mask: CHART_COLORS.inactiveBar,
  Hash: CHART_COLORS.primary,
  Synthetic: CHART_COLORS.inactiveBar,
};

export const ENTITY_TYPE_COLORS: Record<string, string> = {
  PERSON: "#111827",
  DATE_TIME: "#3B82F6",
  LOCATION: "#10B981",
  PHONE: "#F59E0B",
  EMAIL: "#155dfc",
  MRN: "#7F22FE",
  SSN: "#EF4444",
  OTHER: "#9CA3AF",
};

export const CONFIDENCE_BAR_COLORS = [
  "#155dfc",
  "#3B82F6",
  "#60A5FA",
  "#93C5FD",
  "#BFDBFE",
] as const;

export const CHART_BORDER_RADIUS = 4;

export const DASHBOARD_LAYOUT_MAX_WIDTH_PX = 1440;

export const STAT_CARD_TREND_PERCENT_COLOR = "#027a48";
export const STAT_CARD_TREND_SUFFIX_COLOR = "#475467";

export const STAT_CARD_SPRITE_IDS: Record<
  "icon-document" | "icon-shield" | "icon-activity" | "icon-chart",
  string
> = {
  "icon-document": "icon-IconList",
  "icon-shield": "icon-IconShield",
  "icon-activity": "icon-IconWave",
  "icon-chart": "icon-IconArrowUp",
};

export const STAT_CARD_TREND_ARROW_SPRITE_ID = "icon-GreenArrowUp";

export const BAR_WIDTH = 58;
export const BAR_RADIUS = 10;
export const INACTIVE_COLOR = "rgba(0, 0, 0, 0.24)";
export const ACTIVE_GRADIENT_ID = "activeBarGradient";
export const CHART_HEIGHT = 260;

export const tickStyle = {
  fontSize: 12,
  color: theme.palette.text.secondary,
  fontFamily: "Inter, sans-serif",
};
