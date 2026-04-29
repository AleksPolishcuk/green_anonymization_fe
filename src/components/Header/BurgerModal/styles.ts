import { styled } from "@mui/material/styles";
import {
  headerBreakpoints,
  headerDimensions,
  HEADER_ICON_DARK_COLOR,
  MODAL_HEADER_DARK_BG,
  BUTTON_HOVER_SHADOW_DARK,
  BUTTON_HOVER_SHADOW_LIGHT,
  BUTTON_HOVER_BG_DARK,
  BUTTON_HOVER_BG_LIGHT,
  BUTTON_ACTIVE_BG_DARK,
  BUTTON_ACTIVE_BG_LIGHT,
} from "constants/MainPages";
import { Link } from "react-router-dom";

const overlayDurationMs = 280;
const panelDurationMs = 300;
const reducedMotionTransitionMs = 0.01;
const easing = "cubic-bezier(0.32, 0.72, 0, 1)";
const easingStandard = "cubic-bezier(0.4, 0, 0.2, 1)";
const easingOut = "cubic-bezier(0.16, 1, 0.3, 1)";
const navLinkPadX = 10;
const transitionFastSeconds = 0.22;

export const Overlay = styled("div", {
  shouldForwardProp: (prop) => prop !== "$isOpen",
})<{ $isOpen: boolean }>(({ $isOpen }) => ({
  position: "fixed",
  inset: 0,
  zIndex: 30,
  display: "block",
  opacity: $isOpen ? 1 : 0,
  visibility: $isOpen ? "visible" : "hidden",
  pointerEvents: $isOpen ? "auto" : "none",
  transition: `opacity ${overlayDurationMs}ms ${easing}`,
  background: "rgba(16, 24, 40, 0.5)",

  [`@media (min-width: ${headerBreakpoints.tabletPx}px)`]: {
    background: "rgba(255, 255, 255, 0.14)",
    border: "none",
    WebkitBackdropFilter: "blur(28px) saturate(190%) brightness(1.05)",
    backdropFilter: "blur(28px) saturate(190%) brightness(1.05)",
  },

  "@supports not (backdrop-filter: blur(1px))": {
    [`@media (min-width: ${headerBreakpoints.tabletPx}px)`]: {
      background: "rgba(248, 250, 255, 0.85)",
    },
  },

  "@media (prefers-reduced-motion: reduce)": {
    transitionDuration: `${reducedMotionTransitionMs}ms`,
  },
}));

export const Panel = styled("aside", {
  shouldForwardProp: (prop) => prop !== "$isOpen",
})<{ $isOpen: boolean }>(({ $isOpen }) => ({
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  boxSizing: "border-box",
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  minHeight: "100dvh",
  borderRadius: 0,
  background: "transparent",
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  padding: 0,
  gap: 0,
  transform: $isOpen ? "translateX(0)" : "translateX(100%)",
  transition: `transform ${panelDurationMs}ms ${easing}`,
  zIndex: 1,
  overflow: "hidden",

  [`@media (min-width: ${headerBreakpoints.tabletPx}px)`]: {
    left: "auto",
    width: `${headerDimensions.burgerPanelWidthPx}px`,
    maxWidth: `${headerDimensions.burgerPanelWidthPx}px`,
    minHeight: "100vh",
    height: "100vh",
    boxShadow: "-12px 0 28px rgba(16, 24, 40, 0.18)",
    borderRadius: 0,
  },

  "@media (prefers-reduced-motion: reduce)": {
    transitionDuration: `${reducedMotionTransitionMs}ms`,
  },
}));

export const ModalHeader = styled("div")(({ theme }) => ({
  flexShrink: 0,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: `${headerDimensions.mobileTabletBarHeightPx}px`,
  minHeight: `${headerDimensions.mobileTabletBarHeightPx}px`,
  padding: `0 ${headerDimensions.layoutHorizontalPaddingPx}px`,
  background:
    theme.palette.mode === "dark"
      ? MODAL_HEADER_DARK_BG
      : theme.palette.background.softGray,

  [`@media (min-width: ${headerBreakpoints.tabletPx}px)`]: {
    padding: `0 ${theme.spacing(6)}`,
  },
}));

export const ModalLogoIcon = styled("svg")({
  display: "block",
  flexShrink: 0,
  width: `${headerDimensions.logoHeightPx}px`,
  height: `${headerDimensions.logoHeightPx}px`,
});

export const ModalHeaderActions = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const ModalBody = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  flex: "1 1 auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(7.5),
  minHeight: 0,
  padding: `${headerDimensions.layoutHorizontalPaddingPx}px`,
  background: theme.palette.background.default,
  overflow: "auto",

  [`@media (min-width: ${headerBreakpoints.tabletPx}px)`]: {
    padding: theme.spacing(6),
  },
}));

export const CloseButton = styled("button")(({ theme }) => ({
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
    boxShadow: "0 0 0 4px rgba(21, 93, 252, 0.22)",
  },

  "&:focus:not(:focus-visible)": {
    outline: "none",
    boxShadow: "none",
  },

  "&:focus:not(:focus-visible):hover": {
    boxShadow:
      theme.palette.mode === "dark"
        ? BUTTON_HOVER_SHADOW_DARK
        : BUTTON_HOVER_SHADOW_LIGHT,
  },
}));

export const CloseIcon = styled("svg")(({ theme }) => ({
  width: `${headerDimensions.closeControlSizePx}px`,
  height: `${headerDimensions.closeControlSizePx}px`,
  ...(theme.palette.mode === "dark" && {
    ["--close-stroke" as string]: HEADER_ICON_DARK_COLOR,
  }),
}));

export const ModalNav = styled("nav")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  marginTop: theme.spacing(6.5),
}));

export const ModalNavLink = styled(Link)(({ theme }) => ({
  boxSizing: "border-box",
  margin: 0,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2.5),
  width: "100%",
  padding: `${theme.spacing(5)} ${navLinkPadX}px`,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.body1.fontWeight,
  fontSize: theme.typography.body1.fontSize,
  lineHeight: theme.typography.button.lineHeight,
  color: theme.palette.text.primary,
  textDecoration: "none",
  borderBottom: `1px solid ${theme.palette.divider}`,
  transition: `border-bottom-color 0.28s ${easingOut}`,

  "&:hover": {
    borderBottomColor: theme.palette.primary.main,
  },

  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: "-2px",
    boxShadow: "0 0 0 4px rgba(21, 93, 252, 0.22)",
  },

  "&:focus:not(:focus-visible)": {
    outline: "none",
    boxShadow: "none",
  },
}));

export const ModalActions = styled("div")(({ theme }) => ({
  marginTop: "auto",
  marginBottom: theme.spacing(6),
  display: "grid",
  gap: theme.spacing(3),
}));
