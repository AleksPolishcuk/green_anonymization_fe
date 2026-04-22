import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import { DASHBOARD_LAYOUT_MAX_WIDTH_PX } from "constants/dashboard";

export const DashboardShell = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.subtle.bg,
  boxSizing: "border-box",
}));

export const DashboardFrame = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: DASHBOARD_LAYOUT_MAX_WIDTH_PX,
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  flex: "1 0 auto",
  minWidth: 0,
  boxSizing: "border-box",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const MainContent = styled(Box)(({ theme }) => ({
  flex: "1 1 0",
  minWidth: 0,
  padding: theme.spacing(3, 2, 5),
  boxSizing: "border-box",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4, 3, 6),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8, 8, 10),
  },
}));

export const ChartsLayout = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(4),
  },
}));

export const ChartRow = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$cols",
})<{ $cols?: string }>(({ theme, $cols = "1fr 1fr" }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(3),
  alignItems: "start",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: $cols,
    gap: theme.spacing(4),
  },
}));
