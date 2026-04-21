import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const DonutWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(10),
  "@media (max-width: 900px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export const LegendList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.25),
  flexShrink: 0,
}));

export const LegendItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const LegendDot = styled(Box)<{ $color: string }>(({ $color }) => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  backgroundColor: $color,
  flexShrink: 0,
}));

export const LegendLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  color: theme.palette.text.secondary,
  lineHeight: 1.4,
  minWidth: 60,
}));

export const LegendValue = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
}));
