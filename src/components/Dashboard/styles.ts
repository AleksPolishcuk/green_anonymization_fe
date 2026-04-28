import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

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
  [theme.breakpoints.up("xl")]: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "start",
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
    gap: theme.spacing(4),
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: $cols,
  },
  [theme.breakpoints.up("xl")]: {
    display: "contents",
  },
}));
