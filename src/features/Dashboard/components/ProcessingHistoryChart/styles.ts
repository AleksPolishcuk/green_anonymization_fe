import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const LegendRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(5),
  marginTop: theme.spacing(2),
}));

export const LegendItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$dashed" && prop !== "$color",
})<{ $dashed?: boolean; $color: string }>(({ theme, $dashed, $color }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  fontSize: theme.typography.fontSize11,
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.secondary,
  "&::before": {
    content: '""',
    width: 20,
    height: 2,
    background: $dashed
      ? `repeating-linear-gradient(90deg, ${$color} 0, ${$color} 4px, transparent 4px, transparent 8px)`
      : $color,
    borderRadius: 1,
    flexShrink: 0,
  },
}));
