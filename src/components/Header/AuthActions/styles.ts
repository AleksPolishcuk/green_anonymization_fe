import { styled } from "@mui/material/styles";

const ctaHeightPx = 41;
const ctaWidthPx = 119;
const ctaPadding = "10px 20px";
const ctaRadiusPx = 14;
const transitionButtonSeconds = 0.24;
const easingStandard = "cubic-bezier(0.4, 0, 0.2, 1)";

export const AuthActionsRow = styled("div", {
  shouldForwardProp: (prop) => prop !== "$isCompact",
})<{ $isCompact: boolean }>(({ theme, $isCompact }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(4),
  ...($isCompact && {
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
  }),
}));

export const SignInLink = styled("a")(({ theme }) => ({
  boxSizing: "border-box",
  margin: 0,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: `${ctaHeightPx}px`,
  padding: ctaPadding,
  borderRadius: `${ctaRadiusPx}px`,
  border: "1px solid transparent",
  background: "transparent",
  color: theme.palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
  textDecoration: "none",
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightMedium,
  whiteSpace: "nowrap",
  transition: [
    `background-color ${transitionButtonSeconds}s ${easingStandard}`,
    `border-color ${transitionButtonSeconds}s ${easingStandard}`,
    `box-shadow ${transitionButtonSeconds}s ${easingStandard}`,
    `color ${transitionButtonSeconds}s ${easingStandard}`,
  ].join(", "),

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    borderColor: theme.palette.primary.dark,
    boxShadow: "0 6px 14px 0 rgba(59, 130, 246, 0.6)",
    color: theme.palette.primary.contrastText,
  },

  "&:active": {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    boxShadow: "0 4px 14px 0 rgba(59, 130, 246, 0.3)",
    color: theme.palette.primary.contrastText,
  },

  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: "3px",
    boxShadow: "0 0 0 4px rgba(21, 93, 252, 0.22)",
  },

  "&:focus:not(:focus-visible)": {
    outline: "none",
    boxShadow: "none",
  },
}));

export const GetStartedButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "$isCompact",
})<{ $isCompact?: boolean }>(({ theme, $isCompact }) => ({
  boxSizing: "border-box",
  margin: 0,
  border: "none",
  appearance: "none",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: `${ctaRadiusPx}px`,
  padding: ctaPadding,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.button.fontWeight,
  whiteSpace: "nowrap",
  boxShadow: "0 4px 14px 0 rgba(59, 130, 246, 0.3)",
  textTransform: "none",
  flexShrink: 0,
  ...($isCompact
    ? {
        width: "100%",
        height: "auto",
        minHeight: `${ctaHeightPx}px`,
      }
    : {
        width: `${ctaWidthPx}px`,
        height: `${ctaHeightPx}px`,
      }),
  transition: [
    `background-color ${transitionButtonSeconds}s ${easingStandard}`,
    `box-shadow ${transitionButtonSeconds}s ${easingStandard}`,
  ].join(", "),

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: "0 6px 14px 0 rgba(59, 130, 246, 0.6)",
  },

  "&:active": {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0 4px 14px 0 rgba(59, 130, 246, 0.3)",
  },

  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.contrastText}`,
    outlineOffset: "2px",
    boxShadow:
      "0 4px 14px 0 rgba(59, 130, 246, 0.3), 0 0 0 4px rgba(21, 93, 252, 0.45)",
  },

  "&:focus:not(:focus-visible)": {
    outline: "none",
  },
}));
