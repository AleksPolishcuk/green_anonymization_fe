import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink, Link } from "react-router-dom";
import { BG_OFF, BG_ON, BOX_SHADOW, BOX_SHADOW_NAV } from "constants/DeidPage";
import { theme } from "shared/theme/theme";

const SIDEBAR_WIDTH = 272;
const LOGO_BOX_SIZE = 40;

export const SidebarRoot = styled("aside")(({ theme }) => ({
  width: SIDEBAR_WIDTH,
  minWidth: SIDEBAR_WIDTH,
  height: "100vh",
  position: "sticky",
  top: 0,
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(3),
  borderRight: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,
  boxShadow: BOX_SHADOW,
}));

export const SidebarLogoRow = styled(Link)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  paddingBottom: theme.spacing(4),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
  textDecoration: "none",
  color: "inherit",
}));

export const SidebarLogoBox = styled(Box)(({ theme }) => ({
  width: LOGO_BOX_SIZE,
  height: LOGO_BOX_SIZE,
  borderRadius: "12px",
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
  stroke: theme.palette.color.white,
}));

export const SidebarTextBlock = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
});

export const SidebarTitle = styled(Typography)({
  marginBottom: 2,
});

export const SidebarSubtitle = styled(Typography)({});

export const SidebarSectionTitle = styled(Typography)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(3),
  fontSize: theme.typography.fontSize11,
  fontWeight: theme.typography.fontWeightBold,
  textTransform: "uppercase",
  color: theme.palette.text.secondary,
}));

export const SidebarNav = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1),
}));

export const SidebarNavItem = styled(NavLink)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
  padding: theme.spacing(2.5, 3),
  borderRadius: 12,
  textDecoration: "none",
  color: theme.palette.text.secondary,
  transition: "all 0.2s ease",

  "&.active": {
    backgroundColor: BG_ON,
    color: theme.palette.text.primary,
    boxShadow: BOX_SHADOW_NAV,
  },

  "&:hover": {
    backgroundColor: BG_OFF,
  },
}));

export const SidebarNavIconBox = styled(Box)({
  width: 28,
  height: 28,
  borderRadius: "8px",
  backgroundColor: theme.palette.background.softGray,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});

export const SidebarNavIcon = styled("svg")({
  width: 15,
  height: 15,
  display: "block",
  fill: "none",
  stroke: theme.palette.text.secondary,
});
