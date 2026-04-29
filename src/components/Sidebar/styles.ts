import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink, Link } from "react-router-dom";
import { deidColors, deidDarkColors } from "constants/DeidPage";

const SIDEBAR_WIDTH = 272;
const LOGO_BOX_SIZE = 40;

export const SidebarRoot = styled("aside")(({ theme }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;

  return {
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
    boxShadow: colors.boxShadow,
  };
});

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

export const SidebarNavItem = styled(NavLink)(({ theme }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;

  return {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(3),
    padding: theme.spacing(2.5, 3),
    borderRadius: theme.spacing(1.5),
    textDecoration: "none",
    color: theme.palette.text.secondary,
    transition:
      "background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",

    "&.active": {
      backgroundColor: colors.bgOn,
      color: theme.palette.text.primary,
      boxShadow: colors.boxShadowNav,
    },

    "&:hover": {
      backgroundColor: colors.bgOff,
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
}));

export const SidebarProfileTextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

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
