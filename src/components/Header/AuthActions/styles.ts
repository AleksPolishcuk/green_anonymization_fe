import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ctaHeightPx = 41;
const ctaWidthPx = 119;
const ctaPadding = "10px 20px";
const ctaRadiusPx = 14;
const transitionButtonSeconds = 0.24;
const easingStandard = "cubic-bezier(0.4, 0, 0.2, 1)";

export const AuthActionsRow = styled("div", {
  shouldForwardProp: (prop) => prop !== "$isCompact",
})<{ $isCompact: boolean }>(({ $isCompact }) => ({
  display: "inline-flex",
  alignItems: "center",
  ...($isCompact && {
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
  }),
}));

export const GetStartedButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "$isCompact",
})<{ $isCompact?: boolean }>(({ theme, $isCompact }) => ({
  boxSizing: "border-box",
  marginLeft: 8,
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
  minWidth: "unset",
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
