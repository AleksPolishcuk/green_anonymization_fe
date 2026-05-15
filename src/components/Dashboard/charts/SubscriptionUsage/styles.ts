import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

import {
  USAGE_BAR_BORDER_RADIUS,
  USAGE_BAR_HEIGHT,
  USAGE_BAR_MIN_WIDTH,
  USAGE_BAR_TRACK_ALPHA,
  USAGE_ROOT_BORDER_RADIUS,
} from "constants/PricingPage";

export const UsageRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(3, 4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: USAGE_ROOT_BORDER_RADIUS,
  border: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(4),
  },
}));

export const UsageInfoRow = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(2),
  [theme.breakpoints.up("lg")]: {
    display: "contents",
  },
}));

export const UsageLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,
  whiteSpace: "nowrap",
  flexShrink: 0,
}));

export const UsageCount = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.primary,
  whiteSpace: "nowrap",
  flexShrink: 0,
}));

export const UsageBarWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("lg")]: {
    flex: 1,
    minWidth: USAGE_BAR_MIN_WIDTH,
    width: "auto",
  },
}));

export const UsageBar = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== "$warn",
})<{ $warn: boolean }>(({ theme, $warn }) => ({
  height: USAGE_BAR_HEIGHT,
  borderRadius: USAGE_BAR_BORDER_RADIUS,
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.common.white, USAGE_BAR_TRACK_ALPHA)
      : theme.palette.action.hover,
  "& .MuiLinearProgress-bar": {
    borderRadius: USAGE_BAR_BORDER_RADIUS,
    backgroundColor: $warn
      ? theme.palette.accent.amber
      : theme.palette.primary.main,
  },
}));

export const UpgradeLink = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.primary.main,
  cursor: "pointer",
  whiteSpace: "nowrap",
  flexShrink: 0,
  alignSelf: "flex-end",
  [theme.breakpoints.up("lg")]: {
    alignSelf: "auto",
  },
  "&:hover": {
    textDecoration: "underline",
  },
}));
