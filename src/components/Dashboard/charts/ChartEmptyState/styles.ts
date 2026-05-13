import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { CHART_EMPTY_STATE_ICON_SIZE } from "constants/DashboardPage";

export const EmptyStateRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  gap: theme.spacing(1.5),
}));

export const EmptyIconSvg = styled("svg")(({ theme }) => ({
  width: CHART_EMPTY_STATE_ICON_SIZE,
  height: CHART_EMPTY_STATE_ICON_SIZE,
  color: theme.palette.text.disabled,
  flexShrink: 0,
}));

export const EmptyStateText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,
  textAlign: "center",
  maxWidth: 200,
}));
