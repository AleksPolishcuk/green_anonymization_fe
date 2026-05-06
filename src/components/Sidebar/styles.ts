import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink, Link } from "react-router-dom";

import { deidColors, deidDarkColors } from "constants/DeidPage";

const SIDEBAR_WIDTH = 272;
const SIDEBAR_COLLAPSED_WIDTH = 72;
const LOGO_BOX_SIZE = 40;

export const SidebarRoot = styled("aside", {
  shouldForwardProp: (prop) => prop !== "$isMobileOpen",
})<{ $isMobileOpen: boolean }>(({ theme, $isMobileOpen }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;

  return {
    width: $isMobileOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
    minWidth: $isMobileOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 20,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.default,
    boxShadow: colors.boxShadow,
    overflow: "hidden",
    transition: "width 0.25s ease, min-width 0.25s ease",

    [theme.breakpoints.up("md")]: {
      width: SIDEBAR_WIDTH,
      position: "sticky",
    },
  };
});

export const SidebarLogoRow = styled(Link)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingLeft: 0,
  paddingBottom: theme.spacing(4),

  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),

  textDecoration: "none",
  color: "inherit",

  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(2),
  },
}));

export const SidebarLogoBox = styled(Box)(({ theme }) => ({
  width: LOGO_BOX_SIZE,
  height: LOGO_BOX_SIZE,
  borderRadius: theme.spacing(1.5),

  backgroundColor: theme.palette.primary.main,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  flexShrink: 0,
}));

export const SidebarLogoIcon = styled("svg")(({ theme }) => ({
  width: 20,
  height: 20,
  display: "block",

  fill: theme.palette.primary.main,
  stroke: theme.palette.common.white,
}));

export const SidebarTextBlock = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$isMobileOpen",
})<{ $isMobileOpen: boolean }>(({ theme, $isMobileOpen }) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  opacity: $isMobileOpen ? 1 : 0,
  visibility: $isMobileOpen ? "visible" : "hidden",
  whiteSpace: "nowrap",
  transition: "opacity 0.2s ease, visibility 0.2s ease",

  [theme.breakpoints.up("md")]: {
    opacity: 1,
    visibility: "visible",
  },
}));

export const SidebarTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(0.5),
}));

export const SidebarSubtitle = styled(Typography)({});

export const SidebarSectionTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$isMobileOpen",
})<{ $isMobileOpen: boolean }>(({ theme, $isMobileOpen }) => ({
  paddingLeft: theme.spacing(2),
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(3),
  fontSize: theme.typography.fontSize11,
  fontWeight: theme.typography.fontWeightBold,
  textTransform: "uppercase",
  color: theme.palette.text.secondary,
  opacity: $isMobileOpen ? 1 : 0,
  visibility: $isMobileOpen ? "visible" : "hidden",
  whiteSpace: "nowrap",
  transition: "opacity 0.2s ease, visibility 0.2s ease",

  [theme.breakpoints.up("md")]: {
    opacity: 1,
    visibility: "visible",
  },
}));

export const SidebarNav = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1),
}));

export const SidebarNavItem = styled(NavLink, {
  shouldForwardProp: (prop) => prop !== "$isMobileOpen",
})<{ $isMobileOpen?: boolean }>(({ theme, $isMobileOpen }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;

  return {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(3),
    padding: theme.spacing(2.5),
    borderRadius: theme.spacing(1.5),
    textDecoration: "none",
    color: theme.palette.text.secondary,

    "&.active": {
      backgroundColor: colors.bgOn,
      color: theme.palette.text.primary,
      boxShadow: colors.boxShadowNav,
    },

    "&:hover": {
      backgroundColor: colors.bgOff,
    },

    "& .MuiTypography-root": {
      whiteSpace: "nowrap",
      opacity: $isMobileOpen ? 1 : 0,
      visibility: $isMobileOpen ? "visible" : "hidden",
      transition: "opacity 0.2s ease, visibility 0.2s ease",
    },

    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2.5, 3),

      "& .MuiTypography-root": {
        opacity: 1,
        visibility: "visible",
      },
    },
  };
});

export const SidebarNavIconBox = styled(Box)(({ theme }) => ({
  width: 28,
  height: 28,
  borderRadius: theme.spacing(1),

  backgroundColor: theme.palette.background.softGray,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  flexShrink: 0,
}));

export const SidebarNavIcon = styled("svg")(({ theme }) => ({
  width: 15,
  height: 15,
  display: "block",

  fill: "none",
  stroke: theme.palette.text.secondary,
}));

export const SidebarProfileContainer = styled("div")(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,

  marginTop: "auto",
  padding: theme.spacing(3),

  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),

  minHeight: theme.spacing(14),
}));

export const SidebarProfileIcon = styled("div")(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),

  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: `linear-gradient(135deg, ${theme.palette.accent.blue} 0%, ${theme.palette.accent.lilac} 100%)`,
  boxShadow: `0px 2px 8px 0px rgba(37, 99, 235, 0.28)`,

  color: theme.palette.color.white,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.fontSize14,

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const SidebarProfileTextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const SidebarProFileTextHeading = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.fontSize12,
  lineHeight: theme.typography.lineHeight116,

  color: theme.palette.text.primary,
}));

export const SidebarProFileTextSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize11,
  lineHeight: theme.typography.lineHeight140,

  color: theme.palette.text.secondary,
}));

export const SidebarExitIcon = styled("svg")(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
  color: theme.palette.text.secondary,
  fill: "none",
  flexShrink: 0,
  cursor: "pointer",
  borderRadius: 8,

  "&:hover": {
    backgroundColor: theme.palette.background.softGray,
    color: theme.palette.text.primary,
  },

  "&:active": {
    transform: "scale(0.92)",
    backgroundColor: theme.palette.background.softGray,
  },

  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
}));
