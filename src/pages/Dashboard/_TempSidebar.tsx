import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

const SIDEBAR_WIDTH = 272;

const Root = styled("aside")(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 10,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: theme.spacing(2, 2),
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxSizing: "border-box",
  [theme.breakpoints.up("md")]: {
    alignSelf: "flex-start",
    flexDirection: "column",
    alignItems: "stretch",
    flex: `0 0 ${SIDEBAR_WIDTH}px`,
    width: SIDEBAR_WIDTH,
    minHeight: "100vh",
    padding: theme.spacing(4, 2),
    borderBottom: "none",
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const LogoBox = styled(Box)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.fontSize16,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(4),
  padding: theme.spacing(0, 1),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(0, 2),
    marginRight: 0,
    marginBottom: theme.spacing(6),
  },
}));

const Nav = styled("nav")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(0.5),
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
  },
}));

const Item = styled(NavLink)(({ theme }) => ({
  padding: theme.spacing(1, 1.5),
  borderRadius: 8,
  textDecoration: "none",
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.secondary,
  whiteSpace: "nowrap",
  "&.active": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  "&:not(.active):hover": {
    backgroundColor: theme.palette.background.softGray,
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(1.5, 2),
    borderRadius: 12,
    fontSize: theme.typography.fontSize14,
  },
}));

export const TempSidebar = () => (
  <Root>
    <LogoBox>GreenAnon</LogoBox>
    <Nav>
      <Item to="/dashboard" end>
        Dashboard
      </Item>
      <Item to="/deidentification">De-Identification</Item>
      <Item to="/syntheticdata">Synthetic Data</Item>
    </Nav>
  </Root>
);
