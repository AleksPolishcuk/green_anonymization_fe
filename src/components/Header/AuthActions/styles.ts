import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { boxShadow, MODAL_HEADER_DARK_BG } from "constants/MainPages";

const transitionButtonSeconds = 0.24;
const easingStandard = "cubic-bezier(0.4, 0, 0.2, 1)";
const boxShadowHover = "0 6px 14px 0 rgba(59, 130, 246, 0.6)";
const boxShadowHoverDark = "0 6px 14px 0 rgba(59, 130, 246, 0.3)";

export const AuthActionsRow = styled("div", {
  shouldForwardProp: (prop) => prop !== "$isCompact",
})<{ $isCompact: boolean }>(({ $isCompact, theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  ...($isCompact && {
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
    gap: theme.spacing(3),
  }),
}));

export const GetStartedButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "$isCompact" && prop !== "$isLogout",
})<{ $isCompact?: boolean; $isLogout?: boolean }>(({
  theme,
  $isCompact,
  $isLogout,
}) => {
  const bg = $isLogout ? MODAL_HEADER_DARK_BG : theme.palette.primary.main;
  const bgHover = theme.palette.primary.dark;
  const bgActive = bg;
  const shadow = boxShadowHoverDark;
  const shadowHover = $isLogout ? boxShadowHoverDark : boxShadowHover;

  return {
    boxSizing: "border-box",
    marginLeft: $isCompact ? 0 : 8,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2.5, 5),
    backgroundColor: bg,
    border: $isLogout ? `1px solid ${theme.palette.divider}` : "none",
    color: theme.palette.primary.contrastText,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize14,
    fontWeight: theme.typography.button.fontWeight,
    whiteSpace: "nowrap",
    boxShadow: shadow,
    textTransform: "none",
    flexShrink: 0,
    minWidth: "unset",
    ...($isCompact
      ? {
          width: "100%",
          height: "auto",
          minHeight: theme.spacing(5),
        }
      : {
          width: theme.spacing(30),
          height: theme.spacing(10),
        }),
    transition: [
      `background-color ${transitionButtonSeconds}s ${easingStandard}`,
      `box-shadow ${transitionButtonSeconds}s ${easingStandard}`,
    ].join(", "),

    "&:hover": {
      backgroundColor: bgHover,
      boxShadow: shadowHover,
    },

    "&:active": {
      backgroundColor: bgActive,
      boxShadow: shadow,
    },

    "&:focus-visible": {
      outline: `1px solid ${theme.palette.primary.main}`,
      outlineOffset: "-2px",
      boxShadow: boxShadow,
    },

    "&:focus:not(:focus-visible)": {
      outline: "none",
    },
  };
});
