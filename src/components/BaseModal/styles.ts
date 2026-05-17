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
import {
  MODAL_ACCENT_BORDER_ALPHA,
  MODAL_ACTIVE_SCALE,
  MODAL_BACKDROP_ALPHA_DARK,
  MODAL_BACKDROP_ALPHA_LIGHT,
  MODAL_BACKDROP_BLUR,
  MODAL_BORDER_RADIUS,
  MODAL_CLOSE_BTN_BORDER_RADIUS,
  MODAL_CLOSE_BTN_Z_INDEX,
  MODAL_EASING_OUT,
  MODAL_EASING_STANDARD,
  MODAL_HOVER_SCALE,
  MODAL_MAX_WIDTH,
  MODAL_PAPER_ALPHA_DARK,
  MODAL_PAPER_ALPHA_LIGHT,
  MODAL_PAPER_BLUR,
  MODAL_SHADOW_DARK,
  MODAL_SHADOW_LIGHT,
  MODAL_TOP_LINE_HEIGHT,
  MODAL_TRANSITION_DURATION,
} from "constants/ModalStyles";

export const StyledDialog = styled(Dialog)(({ theme }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;
  const isDark = theme.palette.mode === "dark";

  return {
    "& .MuiBackdrop-root": {
      backdropFilter: MODAL_BACKDROP_BLUR,
      backgroundColor: isDark
        ? alpha(theme.palette.background.default, MODAL_BACKDROP_ALPHA_DARK)
        : alpha(theme.palette.color.charcoal, MODAL_BACKDROP_ALPHA_LIGHT),
    },
    "& .MuiDialog-container": {
      alignItems: "center",
      padding: theme.spacing(4),
    },
    "& .MuiPaper-root": {
      position: "relative",
      borderRadius: MODAL_BORDER_RADIUS,
      overflow: "hidden",
      backdropFilter: MODAL_PAPER_BLUR,
      WebkitBackdropFilter: MODAL_PAPER_BLUR,
      width: "100%",
      maxWidth: MODAL_MAX_WIDTH,
      margin: theme.spacing(4),
      backgroundColor: isDark
        ? alpha(theme.palette.background.paper, MODAL_PAPER_ALPHA_DARK)
        : alpha(theme.palette.background.paper, MODAL_PAPER_ALPHA_LIGHT),
      border: `1px solid ${
        isDark
          ? alpha(theme.palette.accent.blue, MODAL_ACCENT_BORDER_ALPHA)
          : theme.palette.divider
      }`,
      boxShadow: isDark ? MODAL_SHADOW_DARK : MODAL_SHADOW_LIGHT,

      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: MODAL_TOP_LINE_HEIGHT,
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
  borderRadius: MODAL_CLOSE_BTN_BORDER_RADIUS,
  padding: 0,
  background: "transparent",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "inherit",
  zIndex: MODAL_CLOSE_BTN_Z_INDEX,
  transition: [
    `background-color ${MODAL_TRANSITION_DURATION}s ${MODAL_EASING_STANDARD}`,
    `transform ${MODAL_TRANSITION_DURATION}s ${MODAL_EASING_OUT}`,
    `box-shadow ${MODAL_TRANSITION_DURATION}s ${MODAL_EASING_STANDARD}`,
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
    transform: MODAL_HOVER_SCALE,
  },

  "&:active": {
    transform: MODAL_ACTIVE_SCALE,
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
