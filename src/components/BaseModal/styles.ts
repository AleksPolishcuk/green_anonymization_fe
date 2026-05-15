import { alpha, styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import {
  BUTTON_ACTIVE_BG_DARK,
  BUTTON_ACTIVE_BG_LIGHT,
  BUTTON_HOVER_BG_DARK,
  BUTTON_HOVER_BG_LIGHT,
  BUTTON_HOVER_SHADOW_DARK,
  BUTTON_HOVER_SHADOW_LIGHT,
  HEADER_ICON_DARK_COLOR,
  headerDimensions,
} from "constants/MainPages";
import { deidColors, deidDarkColors } from "constants/DeidPage";

const transitionFastSeconds = 0.22;
const easingStandard = "cubic-bezier(0.4, 0, 0.2, 1)";
const easingOut = "cubic-bezier(0.16, 1, 0.3, 1)";

export const StyledDialog = styled(Dialog)(({ theme }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;

  return {
    "& .MuiBackdrop-root": {
      backdropFilter: "blur(6px)",
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(2, 6, 23, 0.75)"
          : "rgba(16, 24, 40, 0.45)",
    },
    "& .MuiDialog-container": {
      alignItems: "center",
      padding: theme.spacing(4),
    },
    "& .MuiPaper-root": {
      position: "relative",
      borderRadius: 20,
      overflow: "hidden",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      width: "100%",
      maxWidth: 400,
      margin: theme.spacing(4),
      backgroundColor:
        theme.palette.mode === "dark"
          ? alpha(theme.palette.background.paper, 0.88)
          : alpha(theme.palette.background.paper, 0.97),
      border: `1px solid ${
        theme.palette.mode === "dark"
          ? "rgba(59, 130, 246, 0.18)"
          : theme.palette.divider
      }`,
      boxShadow:
        theme.palette.mode === "dark"
          ? `0 32px 80px rgba(0,0,0,0.7), 0 12px 32px rgba(0,0,0,0.5), 0 0 40px rgba(59,130,246,0.12)`
          : `0 24px 64px rgba(16, 24, 40, 0.12), 0 8px 24px rgba(16, 24, 40, 0.07)`,

      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 3,
        background: colors.topLine,
        zIndex: 1,
      },
    },
  };
});

export const CloseButton = styled("button")(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(3),
  right: theme.spacing(3),
  width: `${headerDimensions.closeControlSizePx}px`,
  height: `${headerDimensions.closeControlSizePx}px`,
  border: "none",
  borderRadius: "10px",
  padding: 0,
  background: "transparent",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "inherit",
  zIndex: 2,
  transition: [
    `background-color ${transitionFastSeconds}s ${easingStandard}`,
    `transform ${transitionFastSeconds}s ${easingOut}`,
    `box-shadow ${transitionFastSeconds}s ${easingStandard}`,
  ].join(", "),

  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? BUTTON_HOVER_BG_DARK
        : BUTTON_HOVER_BG_LIGHT,
    boxShadow:
      theme.palette.mode === "dark"
        ? BUTTON_HOVER_SHADOW_DARK
        : BUTTON_HOVER_SHADOW_LIGHT,
    transform: "scale(1.06)",
  },

  "&:active": {
    transform: "scale(1)",
    backgroundColor:
      theme.palette.mode === "dark"
        ? BUTTON_ACTIVE_BG_DARK
        : BUTTON_ACTIVE_BG_LIGHT,
  },

  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: "3px",
    boxShadow: BUTTON_HOVER_SHADOW_DARK,
  },

  "&:focus:not(:focus-visible)": {
    outline: "none",
    boxShadow: "none",
  },
}));

export const CloseIcon = styled("svg")(({ theme }) => ({
  width: `${headerDimensions.closeControlSizePx}px`,
  height: `${headerDimensions.closeControlSizePx}px`,
  ...(theme.palette.mode === "dark" && {
    ["--close-stroke" as string]: HEADER_ICON_DARK_COLOR,
  }),
}));
