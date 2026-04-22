import { theme } from "shared/theme/theme";

export const CHART_COLORS = {
  primary: "#155dfc",
} as const;

export const COMPLIANCE_COLORS: Record<string, string> = {
  HIPAA: "#000000",
  "EU GDPR": "#92bfff",
  "UK GDPR": "#94e9b8",
  FADP: "#aec7ed",
};

export const CHART_BORDER_RADIUS = 4;

export const DASHBOARD_LAYOUT_MAX_WIDTH_PX = 1440;

export const STAT_CARD_TREND_PERCENT_COLOR = "#027a48";
export const STAT_CARD_TREND_SUFFIX_COLOR = "#475467";

export const STAT_CARD_IDS = {
  totalDocs: "total-docs",
  entities: "entities",
  avgEntities: "avg-entities",
  successRate: "success-rate",
} as const;

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
export const ACTIVE_GRADIENT_START = "#306bec";
export const ACTIVE_GRADIENT_END = "#7ca1f3";
export const CONFIDENCE_GRADIENT_ID = "confidenceBarGradient";
export const ACTIVITY_SUCCESS_SPRITE_ID = "icon-IconSuccess";

export const CHART_FONT_FAMILY = "Inter, sans-serif";

export const CHART_GRID_STROKE = "rgba(208, 213, 221, 0.6)";
export const CHART_GRID_DASHARRAY = "4 4";

export const CHART_TOOLTIP_FONT_SIZE = 13;
export const CHART_TOOLTIP_FONT_SIZE_SM = 11;

export const FONT_WEIGHT_MEDIUM = 500;

export const PILL_WIDTH = 44;
export const PILL_HEIGHT = 24;
export const PILL_OFFSET_Y = 8;
export const PILL_RADIUS = 8;
export const PILL_FILL = "#111827";
export const PILL_TEXT_COLOR = "#ffffff";
export const PILL_FONT_SIZE = 12;
export const PILL_FONT_WEIGHT = 700;

export const HIPAA_GRADIENT_ID = "hipaaSegmentGradient";
export const HIPAA_GRADIENT_START = "#000000";
export const HIPAA_GRADIENT_END = "#1c1c1c";

export const tickStyle = {
  fontSize: 12,
  fill: theme.palette.text.secondary,
  fontFamily: CHART_FONT_FAMILY,
};

export const tickStyleSm = {
  fontSize: 10,
  fill: theme.palette.text.secondary,
  fontFamily: CHART_FONT_FAMILY,
};
