import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  CHART_CARD_BORDER_RADIUS,
  CHART_CARD_HEIGHT,
  CHART_CARD_HEIGHT_MD,
  CHART_CARD_HEIGHT_MD_TALL,
  CHART_CARD_HEIGHT_SM,
  CHART_CARD_HEIGHT_SM_TALL,
  CHART_CARD_HEIGHT_TALL,
  CHART_CARD_SHADOW,
  TOOLTIP_DARK_SHADOW,
} from "constants/DashboardPage";
import { BOX_SHADOW_NAV } from "constants/DeidPage";

export const ChartCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$tall",
})<{ $tall?: boolean }>(({ theme, $tall }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: CHART_CARD_SHADOW,
  borderRadius: CHART_CARD_BORDER_RADIUS,
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  height: $tall ? CHART_CARD_HEIGHT_TALL : CHART_CARD_HEIGHT,
  transition: "box-shadow 0.2s ease",
  "&:hover": {
    boxShadow: BOX_SHADOW_NAV,
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
    height: $tall ? CHART_CARD_HEIGHT_SM_TALL : CHART_CARD_HEIGHT_SM,
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6),
    height: $tall ? CHART_CARD_HEIGHT_MD_TALL : CHART_CARD_HEIGHT_MD,
  },
  [theme.breakpoints.up("xl")]: {
    height: CHART_CARD_HEIGHT_MD_TALL,
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
  borderRadius: 14,
  padding: theme.spacing(0.75, 1.5),
  fontSize: theme.typography.fontSize14,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  boxShadow: TOOLTIP_DARK_SHADOW,
}));
