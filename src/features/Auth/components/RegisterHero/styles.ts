import { Box, styled, Typography, alpha } from "@mui/material";
import staggerItem from "features/Auth/utils/staggerItem";

export const TestimonialCard = styled(Box)(({ theme }) => ({
  ...staggerItem(420),

  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),

  width: "100%",
  maxWidth: theme.typography.pxToRem(352),

  padding: theme.spacing(6),
  borderRadius: theme.shape.borderRadius,

  background: alpha(theme.palette.color.white, 0.1),
  border: `1px solid ${alpha(theme.palette.color.white, 0.15)}`,
}));

export const TestimonialText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontStyle: "italic",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize16,
  lineHeight: theme.typography.lineHeight167,

  textAlign: "left",
  color: theme.palette.color.white,
}));

export const ProfileRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
}));

export const ProfileCircle = styled(Box)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "50%",
  background: alpha(theme.palette.color.white, 0.2),
}));

export const ProfileInitials = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSize14,
  lineHeight: theme.typography.lineHeight150,

  color: theme.palette.color.white,
}));

export const ProfileTextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
}));

export const ProfileName = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightSemiBold,
  fontSize: theme.typography.fontSize14,
  lineHeight: theme.typography.lineHeight150,
  textAlign: "left",
  color: theme.palette.color.white,
}));

export const ProfileRole = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize12,
  lineHeight: theme.typography.lineHeight150,

  color: theme.palette.accent.lightBlue,
}));
