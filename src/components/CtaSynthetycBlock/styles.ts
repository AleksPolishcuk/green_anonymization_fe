import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

export const SyntheticDataCta = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(4),
  padding: theme.spacing(6),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,
}));

export const SyntheticDataCtaLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
}));

export const SyntheticDataIconBox = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  borderRadius: theme.spacing(3),
  color: theme.palette.color.blue,
  backgroundColor: theme.palette.accent.lightBlue,
}));

export const SyntheticDataCtaTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
}));

export const SyntheticDataCtaText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,
}));

export const SyntheticDataButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: theme.spacing(2.5, 4),
  borderRadius: theme.spacing(3),
}));
