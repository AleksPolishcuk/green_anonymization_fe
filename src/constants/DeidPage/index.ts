export const BOX_SHADOW = "0 2px 20px 0 rgba(16, 24, 40, 0.06)";
export const BG_OFF = "rgba(249, 250, 251, 0.6)";
export const BG_ON = "rgba(37, 99, 235, 0.12)";
export const BORDER_OFF = "rgba(208, 213, 221, 0.6)";
export const BORDER_ON = "rgba(37, 99, 235, 0.22)";
export const BOX_SHADOW_ON =
  "0 4px 12px 0 rgba(37, 99, 235, 0.08), 0 0 0 1px rgba(37, 99, 235, 0.22)";

export const CHIP_COLOR_PRESETS = {
  blue: {
    color: "#2563eb",
    bg: "rgba(37, 99, 235, 0.08)",
    border: "rgba(37, 99, 235, 0.22)",
  },
  sky: {
    color: "#0ea5e9",
    bg: "rgba(14, 165, 233, 0.08)",
    border: "rgba(14, 165, 233, 0.22)",
  },
  cyan: {
    color: "#06b6d4",
    bg: "rgba(6, 182, 212, 0.08)",
    border: "rgba(6, 182, 212, 0.22)",
  },
  gray: {
    color: "#667085",
    bg: "rgba(102, 112, 133, 0.08)",
    border: "rgba(102, 112, 133, 0.22)",
  },
} as const;

export const frameworkToneMap = {
  HIPAA_US: "blue",
  GDPR_EU: "sky",
  GDPR_UK: "cyan",
  FADP_CH: "gray",
} as const;
