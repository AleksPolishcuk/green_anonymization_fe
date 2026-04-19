import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BOX_SHADOW } from "constants/DeidPage";

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
