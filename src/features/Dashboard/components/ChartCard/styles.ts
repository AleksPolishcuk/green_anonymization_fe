import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { CHART_TOOLTIP_FONT_SIZE } from "constants/dashboard";

export const ChartCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$tall",
})<{ $tall?: boolean }>(({ theme, $tall }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0 2px 24px 0 rgba(16, 24, 40, 0.05)",
  borderRadius: "12px",
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  height: $tall ? 300 : 280,
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
    height: $tall ? 340 : 320,
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6),
    height: $tall ? 388 : 358,
  },
}));

export const ChartTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize18,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.primary,
  flexShrink: 0,
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize22,
  },
}));

export const ChartSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1.5),
  flexShrink: 0,
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize14,
    marginBottom: theme.spacing(2),
  },
}));

export const ChartBody = styled(Box)({
  width: "100%",
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
});

export const TooltipDark = styled(Box)(({ theme }) => ({
  background: theme.palette.text.primary,
  color: theme.palette.color.white,
  borderRadius: 8,
  padding: theme.spacing(0.75, 1.5),
  fontSize: CHART_TOOLTIP_FONT_SIZE,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
}));
