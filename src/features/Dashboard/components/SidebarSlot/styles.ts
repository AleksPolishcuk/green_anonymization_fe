import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link, NavLink } from "react-router-dom";

export const SIDEBAR_WIDTH_PX = 272;

export const SidebarAside = styled("aside")(({ theme }) => ({
  position: "sticky",
  top: 0,
  alignSelf: "flex-start",
  flex: `0 0 ${SIDEBAR_WIDTH_PX}px`,
  width: SIDEBAR_WIDTH_PX,
  minHeight: "100vh",
  maxHeight: "100vh",
  overflowY: "auto",
  zIndex: theme.zIndex.drawer,
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(3, 2),
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
  boxSizing: "border-box",
  [theme.breakpoints.down("md")]: {
    position: "relative",
    top: "auto",
    alignSelf: "stretch",
    flex: "none",
    width: "100%",
    minHeight: 0,
    maxHeight: "none",
    overflowY: "visible",
    height: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    borderRight: "none",
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(2),
  },
}));

export const LogoLink = styled(Link)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  minWidth: 0,
  marginBottom: 32,
  textDecoration: "none",
  lineHeight: 0,
  [theme.breakpoints.down("md")]: {
    marginBottom: 0,
    marginRight: theme.spacing(2),
  },
}));

export const LogoIcon = styled("svg")(({ theme }) => ({
  display: "block",
  width: "100%",
  maxWidth: 200,
  height: "auto",
  color: theme.palette.text.primary,
}));

export const NavStack = styled("nav")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  flex: 1,
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: "1 1 auto",
    alignItems: "center",
  },
}));

export const NavItem = styled(NavLink)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  borderRadius: 12,
  textDecoration: "none",
  fontSize: theme.typography.fontSize14,
  fontWeight: 500,
  color: theme.palette.text.secondary,
  "&.active": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  "&:not(.active):hover": {
    backgroundColor: theme.palette.background.softGray,
  },
}));

export const NavItemDisabled = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  borderRadius: 12,
  fontSize: theme.typography.fontSize14,
  fontWeight: 500,
  color: theme.palette.background.mediumGray,
  cursor: "not-allowed",
}));

export const SidebarFooter = styled(Box)(({ theme }) => ({
  marginTop: "auto",
  paddingTop: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down("md")]: {
    marginTop: 0,
    paddingTop: 0,
    marginLeft: "auto",
    borderTop: "none",
    maxWidth: "40%",
  },
}));

export const UserEmail = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  color: theme.palette.text.secondary,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}));
