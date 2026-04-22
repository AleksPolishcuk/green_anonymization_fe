import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ChartBodyInner = styled(Box)({
  flex: 1,
  minHeight: 0,
  width: "100%",
});

export const LegendRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(5),
  marginTop: theme.spacing(2),
  flexShrink: 0,
}));

export const LegendItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.secondary,
}));

export const LegendCircle = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$dashed" && prop !== "$color",
})<{ $dashed?: boolean; $color: string }>(({ $dashed, $color }) => ({
  width: 12,
  height: 12,
  borderRadius: "50%",
  backgroundColor: "transparent",
  border: `2px ${$dashed ? "dashed" : "solid"} ${$color}`,
  flexShrink: 0,
}));

export const TooltipLight = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  border: "1px solid #e9edf2",
  borderRadius: 10,
  padding: theme.spacing(1.25, 1.75),
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize12,
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
}));

export const TooltipDate = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(0.75),
}));

export const TooltipRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.75),
  color: theme.palette.text.primary,
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.fontFamily,
}));

export const TooltipDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$color",
})<{ $color: string }>(({ $color }) => ({
  display: "inline-block",
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: $color,
  flexShrink: 0,
}));
