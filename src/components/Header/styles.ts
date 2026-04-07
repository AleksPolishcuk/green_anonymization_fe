import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

import {
  headerBreakpoints,
  headerDimensions,
  headerLogoViewBox,
} from "constants/header";

const logoViewW = headerLogoViewBox.width;
const logoViewH = headerLogoViewBox.height;
const headerLogoLockBreakpointPx = headerBreakpoints.tabletPx;
const fastTransitionSeconds = 0.22;
const easingStandard = "cubic-bezier(0.4, 0, 0.2, 1)";
const easingOut = "cubic-bezier(0.16, 1, 0.3, 1)";
export const HeaderShell = styled("header")(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 20,
  paddingTop: theme.spacing(4),
}));

export const HeaderLayout = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  width: "100%",
  padding: `0 ${headerDimensions.layoutHorizontalPaddingPx}px`,

  [theme.breakpoints.up("md")]: {
    padding: `0 ${theme.spacing(6)}`,
  },

  [theme.breakpoints.up("lg")]: {
    padding: `0 ${theme.spacing(8)}`,
  },
}));

export const HeaderBar = styled("div")(({ theme }) => ({
  position: "relative",
  boxSizing: "border-box",
  overflow: "hidden",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  minHeight: `${headerDimensions.mobileTabletBarHeightPx}px`,
  borderRadius: `${headerDimensions.barBorderRadiusPx}px`,
  padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
  background: "rgba(255, 255, 255, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.22)",
  boxShadow:
    "0 2px 14px rgba(16, 24, 40, 0.055), inset 0 1px 0 rgba(255, 255, 255, 0.28)",
  WebkitBackdropFilter: "blur(6px) saturate(140%) brightness(1.02)",
  backdropFilter: "blur(6px) saturate(140%) brightness(1.02)",

  "@supports not (backdrop-filter: blur(1px))": {
    background: "rgba(255, 255, 255, 0.72)",
    boxShadow: "0 3px 18px rgba(16, 24, 40, 0.065)",
  },

  [theme.breakpoints.up("lg")]: {
    height: `${headerDimensions.desktopBarHeightPx}px`,
    maxWidth: `${headerDimensions.desktopBarWidthPx}px`,
    minHeight: "unset",
    padding: `${theme.spacing(4)} ${theme.spacing(8)}`,
  },
}));

export const HeaderFrame = styled("div")(({ theme }) => ({
  position: "relative",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(4),
  width: "100%",
  minWidth: 0,
  minHeight: 0,

  [`@media (min-width: ${headerBreakpoints.desktopAuthPx}px)`]: {
    position: "relative",
    height: "100%",
  },

  [theme.breakpoints.up("lg")]: {
    padding: 0,
  },
}));

export const DesktopNavCenter = styled("div")({
  display: "none",
  pointerEvents: "none",

  [`@media (min-width: ${headerBreakpoints.desktopAuthPx}px)`]: {
    display: "block",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 0,
    pointerEvents: "auto",
  },
});

export const LogoSlot = styled("div")({
  position: "relative",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  minWidth: 0,
  flex: "1 1 0",

  [`@media (min-width: ${headerLogoLockBreakpointPx}px)`]: {
    flex: `0 0 ${headerDimensions.logoWidthPx}px`,
    width: `${headerDimensions.logoWidthPx}px`,
    minWidth: `${headerDimensions.logoWidthPx}px`,
    flexShrink: 0,
  },
});

export const HeaderTrailing = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: theme.spacing(3),
  flexShrink: 0,
  flexGrow: 0,
}));

export const DesktopNav = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(5.5),
}));

export const LogoLink = styled("a")({
  display: "inline-flex",
  alignItems: "center",
  minWidth: 0,
  maxWidth: `${headerDimensions.logoWidthPx}px`,
  width: "100%",
  textDecoration: "none",
  lineHeight: 0,
  outline: "none",

  "&:focus, &:focus-visible": {
    outline: "none",
  },

  flexShrink: 1,

  [`@media (min-width: ${headerLogoLockBreakpointPx}px)`]: {
    width: `${headerDimensions.logoWidthPx}px`,
    maxWidth: "none",
    height: `${headerDimensions.logoHeightPx}px`,
    flexShrink: 0,
  },
});

export const LogoIcon = styled("svg")({
  display: "block",
  overflow: "visible",
  width: "100%",
  maxWidth: `${headerDimensions.logoWidthPx}px`,
  height: "auto",
  aspectRatio: `${logoViewW} / ${logoViewH}`,
  flexShrink: 1,

  [`@media (min-width: ${headerLogoLockBreakpointPx}px)`]: {
    width: `${headerDimensions.logoWidthPx}px`,
    minWidth: `${headerDimensions.logoWidthPx}px`,
    height: `${headerDimensions.logoHeightPx}px`,
    minHeight: `${headerDimensions.logoHeightPx}px`,
    maxWidth: "none",
    flexShrink: 0,
    aspectRatio: "unset",
  },
});

export const MobileOnlyBurgerButton = styled(IconButton)(({ theme }) => ({
  flexShrink: 0,
  padding: 0,
  borderRadius: "10px",
  color: "inherit",
  transition: [
    `background-color ${fastTransitionSeconds}s ${easingStandard}`,
    `transform ${fastTransitionSeconds}s ${easingOut}`,
    `box-shadow ${fastTransitionSeconds}s ${easingStandard}`,
  ].join(", "),

  "&:hover": {
    backgroundColor: "rgba(16, 24, 40, 0.1)",
    transform: "scale(1.06)",
  },

  "&:active": {
    transform: "scale(1)",
    backgroundColor: "rgba(16, 24, 40, 0.14)",
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

  [`@media (min-width: ${headerBreakpoints.desktopAuthPx}px)`]: {
    display: "none",
  },
}));

export const BurgerIcon = styled("svg")({
  width: `${headerDimensions.closeControlSizePx}px`,
  height: `${headerDimensions.closeControlSizePx}px`,
});
