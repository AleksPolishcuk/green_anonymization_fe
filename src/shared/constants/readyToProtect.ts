export const readyToProtectActionKeys = {
  primary: "readyToProtect.actions.primary",
  secondary: "readyToProtect.actions.secondary",
} as const;

export const readyToProtectColors = {
  backgroundGradient:
    "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #0ea5e9 100%)",
  wrapperShadow: "none",

  primaryButtonBackground: "#ffffff",
  primaryButtonHoverBackground: "#eff6ff",
  primaryButtonBackdropFilter: "none",

  secondaryButtonBackground: "rgba(255,255,255,0.15)",
  secondaryButtonHoverBackground: "rgba(255,255,255,0.15)",
  secondaryButtonBorder: "transparent",
  secondaryButtonHoverBorder: "transparent",
  secondaryButtonBackdropFilter: "blur(8px)",

  buttonHoverTransform: "none",
};

export const readyToProtectDarkColors = {
  backgroundGradient:
    "linear-gradient(135deg, #081654 0%, #155dfc 50%, #020617 100%)",
  wrapperShadow: "0 0 80px rgba(59,130,246,0.18)",

  primaryButtonBackground: "rgba(255,255,255,0.88)",
  primaryButtonHoverBackground: "rgba(255,255,255,0.95)",
  primaryButtonBackdropFilter: "blur(6px)",

  secondaryButtonBackground: "rgba(255,255,255,0.12)",
  secondaryButtonHoverBackground: "rgba(255,255,255,0.18)",
  secondaryButtonBorder: "rgba(255,255,255,0.15)",
  secondaryButtonHoverBorder: "rgba(255,255,255,0.25)",
  secondaryButtonBackdropFilter: "blur(8px)",

  buttonHoverTransform: "translateY(-1px)",
};
