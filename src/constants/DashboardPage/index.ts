import { theme } from "shared/theme/theme";

export const COMPLIANCE_COLORS: Record<string, string> = {
  HIPAA: "#6366F1",
  "EU GDPR": "#92bfff",
  "UK GDPR": "#94e9b8",
  FADP: "#aec7ed",
};

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

export const BAR_WIDTH = 40;
export const BAR_RADIUS = 8;
export const ACTIVE_GRADIENT_ID = "activeBarGradient";
export const ACTIVE_GRADIENT_HOVER_ID = "activeBarGradientHover";
export const ACTIVE_GRADIENT_START = "#306bec";
export const ACTIVE_GRADIENT_END = "#7ca1f3";
export const CONFIDENCE_GRADIENT_ID = "confidenceBarGradient";
export const CONFIDENCE_GRADIENT_HOVER_ID = "confidenceBarGradientHover";
export const ACTIVITY_SUCCESS_SPRITE_ID = "icon-IconSuccess";

export const CHART_BAR_HOVER_TRANSITION = "opacity 0.3s ease";

export const CHART_GRID_STROKE = "rgba(208, 213, 221, 0.6)";
export const CHART_GRID_DASHARRAY = "4 4";
export const CHART_GRID_STROKE_WIDTH = 1;
export const CHART_TICK_COUNT = 5;

export const CHART_LINE_STROKE_WIDTH = 2;
export const CHART_LINE_DOT_RADIUS = 5;
export const CHART_LINE_ACTIVE_DOT_RADIUS = 6;
export const CHART_LINE_DASH_ARRAY = "5 4";
export const CHART_DOT_DASH_ARRAY = "3 2";

export const ENTITY_DE_ID_CHART_MARGIN = {
  top: 40,
  right: 2,
  left: -26,
  bottom: 0,
} as const;

export const PROCESSING_HISTORY_CHART_MARGIN = {
  top: 8,
  right: 2,
  left: -34,
  bottom: 0,
} as const;
export const CHART_Y_AXIS_RIGHT_WIDTH = 36;

export const CONFIDENCE_CHART_MARGIN = {
  top: 8,
  right: 50,
  left: -10,
  bottom: 0,
} as const;
export const CONFIDENCE_BAR_CATEGORY_GAP = "25%";
export const CONFIDENCE_BAR_SIZE = 40;
export const CONFIDENCE_Y_AXIS_WIDTH = 72;

export const BAR_SIZE_DESKTOP = 40;
export const BAR_SIZE_TABLET = 20;
export const BAR_SIZE_MOBILE = 16;

export const STAT_CARD_SHADOW =
  "0 1px 2px 0 rgba(16, 24, 40, 0.06), 0 1px 3px 0 rgba(16, 24, 40, 0.1)";
export const CHART_CARD_SHADOW = "0 2px 24px 0 rgba(16, 24, 40, 0.05)";
export const CHART_CARD_HOVER_TRANSITION = "box-shadow 0.2s ease";
export const TOOLTIP_DARK_SHADOW = "0 4px 12px rgba(0, 0, 0, 0.15)";

export const CHART_CARD_BORDER_RADIUS = 12;
export const DONUT_COLUMN_LAYOUT_MAX_PX = 900;
export const CHART_CARD_HEIGHT = 280;
export const CHART_CARD_HEIGHT_TALL = 300;
export const CHART_CARD_HEIGHT_SM = 320;
export const CHART_CARD_HEIGHT_SM_TALL = 340;
export const CHART_CARD_HEIGHT_MD = 358;
export const CHART_CARD_HEIGHT_MD_TALL = 388;

export const START_DEID_BUTTON_WIDTH = 237;
export const START_DEID_BUTTON_HEIGHT = 40;
export const START_DEID_BUTTON_RADIUS = 12;
export const BUTTON_TRANSITION_DURATION_S = 0.24;
export const EASING_STANDARD = "cubic-bezier(0.4, 0, 0.2, 1)";
export const BUTTON_SHADOW_DEFAULT = "0 4px 14px 0 rgba(59, 130, 246, 0.3)";
export const BUTTON_SHADOW_HOVER = "0 6px 14px 0 rgba(59, 130, 246, 0.6)";
export const BUTTON_SHADOW_FOCUS =
  "0 4px 14px 0 rgba(59, 130, 246, 0.3), 0 0 0 4px rgba(21, 93, 252, 0.45)";

export const PILL_WIDTH = 58;
export const PILL_HEIGHT = 24;
export const PILL_MIN_WIDTH = 28;
export const CONFIDENCE_PILL_WIDTH = 44;
export const CONFIDENCE_PILL_WIDTH_TABLET = 36;
export const CONFIDENCE_PILL_WIDTH_MOBILE = 30;
export const PILL_OFFSET_Y = 8;
export const PILL_OFFSET_X = 8;
export const PILL_FONT_SIZE = 10;
export const PILL_BG_COLOR = "#000000";
export const PILL_GRADIENT_ID = "pillLabelGradient";
export const PILL_GRADIENT_START_OPACITY = 0.05;
export const PILL_GRADIENT_END_OPACITY = 0.4;

export const HIPAA_GRADIENT_ID = "hipaaSegmentGradient";
export const HIPAA_GRADIENT_END = "#1c1c1c";
export const HIPAA_GRADIENT_END_OPACITY = 0.6;

export const DONUT_INNER_RADIUS = 35;
export const DONUT_OUTER_RADIUS = 70;
export const DONUT_ACTIVE_OUTER_RADIUS = 76;
export const DONUT_PADDING_ANGLE = 2;
export const DONUT_CORNER_RADIUS = 4;
export const DONUT_SECTOR_ANIMATION_DURATION = 0.2;

export const tickStyle = {
  fontSize: 12,
  fill: theme.palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
};

export const tickStyleSm = {
  fontSize: 10,
  fill: theme.palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
};

export const CHART_X_TICK_ANGLE = -40;
export const CHART_X_TICK_MAX_CHARS = 10;
export const CHART_X_TICK_HEIGHT = 68;
export const CHART_X_TICK_HEIGHT_DESKTOP = 30;
export const CHART_X_TICK_FONT_SIZE = 10;
export const CHART_X_TICK_DESKTOP_FONT_SIZE = 12;
export const CHART_X_TICK_DY_DESKTOP = 12;
export const CHART_X_TICK_DX_MOBILE = -4;
export const CHART_X_TICK_DY_MOBILE = 4;

export const CHART_BAR_CATEGORY_GAP = "20%";

export const CHART_ROW_COLS_WIDE = "1.70fr 1fr";
export const CHART_ROW_COLS_EQUAL = "1fr 1fr";

export const DONUT_CHART_WIDTH = 180;
export const DONUT_START_ANGLE = 90;
export const DONUT_END_ANGLE = -270;
export const DONUT_SMALL_SCREEN_MAX_PX = 425;

export const HIPAA_FRAMEWORK_KEY = "HIPAA";

export const FRAMEWORK_CODE_TO_NAME: Record<string, string> = {
  HIPAA_US: "HIPAA",
  GDPR_EU: "EU GDPR",
  GDPR_UK: "UK GDPR",
  FADP_CH: "FADP",
};

export const CHART_EMPTY_STATE_ICON_SIZE = 40;
export const CHART_EMPTY_STATE_SPRITE_ID = "icon-ChartEmptyState";
export const CHART_EMPTY_STATE_VIEWBOX = "0 0 486.44 486.44";
