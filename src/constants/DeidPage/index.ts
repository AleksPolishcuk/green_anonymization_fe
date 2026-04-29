export const deidColors = {
  boxShadow: "0 2px 20px 0 rgba(16, 24, 40, 0.06)",
  bgOff: "rgba(249, 250, 251, 0.6)",
  bgOn: "rgba(37, 99, 235, 0.12)",
  borderOff: "rgba(208, 213, 221, 0.6)",
  borderOn: "rgba(37, 99, 235, 0.22)",
  boxShadowOn:
    "0 4px 12px 0 rgba(37, 99, 235, 0.08), 0 0 0 1px rgba(37, 99, 235, 0.22)",
  boxShadowNav: "0 4px 16px 0 rgba(37, 99, 235, 0.16)",
  topLine:
    "linear-gradient(90deg, #2563eb 0%, #3b82f6 50%, rgba(14, 165, 233, 0.3) 100%)",
};

export const deidDarkColors = {
  boxShadow: `
    0 20px 60px rgba(0, 0, 0, 0.6),
    0 8px 24px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(59,130,246,0.15)
  `,
  bgOff: "rgba(30, 41, 59, 0.4)",
  bgOn: "rgba(37, 99, 235, 0.18)",
  borderOff: "rgba(71, 85, 105, 0.5)",
  borderOn: "rgba(59, 130, 246, 0.35)",
  boxShadowOn: `
    0 25px 70px rgba(0, 0, 0, 0.7),
    0 10px 30px rgba(0, 0, 0, 0.5),
    0 0 50px rgba(59,130,246,0.25)
  `,
  boxShadowNav: "0 6px 24px rgba(59,130,246,0.25)",
  topLine:
    "linear-gradient(90deg, #3b82f6 0%, #60a5fa 50%, rgba(14, 165, 233, 0.5) 100%)",
};

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
