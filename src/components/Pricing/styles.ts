import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import DoNotDisturbOnOutlinedIcon from "@mui/icons-material/DoNotDisturbOnOutlined";

import {
  PRICING_CARD_BACKDROP_BLUR,
  PRICING_CARD_BG_ALPHA,
  PRICING_CARD_BORDER_RADIUS,
  PRICING_CARD_HOVER_SHADOW,
  PRICING_CARD_SHADOW_DARK,
  PRICING_CARD_SHADOW_LIGHT,
  PRICING_CARD_TRANSITION,
  PRICING_CTA_BORDER_RADIUS,
  PRICING_CTA_TRANSITION,
  PRICING_GRID_MAX_WIDTH,
  PRICING_POPULAR_BADGE_BORDER_RADIUS,
  PRICING_PRIMARY_ALPHA,
} from "constants/PricingPage";

export const PRICING_CTA_CLASS = "pricing-cta-btn";

export const PricingGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(6),
  width: "100%",
  maxWidth: PRICING_GRID_MAX_WIDTH,
  margin: "0 auto",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(8),
  },
}));

export const PricingCardRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$isPopular",
})<{ $isPopular: boolean }>(({ theme, $isPopular }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.background.paper, PRICING_CARD_BG_ALPHA),
  backdropFilter: PRICING_CARD_BACKDROP_BLUR,
  borderRadius: PRICING_CARD_BORDER_RADIUS,
  padding: theme.spacing(6),
  border: `1px solid ${$isPopular ? theme.palette.primary.main : theme.palette.divider}`,
  boxShadow:
    theme.palette.mode === "dark"
      ? PRICING_CARD_SHADOW_DARK
      : PRICING_CARD_SHADOW_LIGHT,
  display: "flex",
  flexDirection: "column",
  transition: PRICING_CARD_TRANSITION,

  "&:hover": {
    borderColor: theme.palette.primary.main,
    boxShadow: PRICING_CARD_HOVER_SHADOW,

    [`& .${PRICING_CTA_CLASS}`]: {
      backgroundColor: theme.palette.primary.main,
      borderColor: "transparent",
      color: theme.palette.primary.contrastText,
    },

    [`& .${PRICING_CTA_CLASS}:hover`]: {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export const PopularBadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(4),
  right: theme.spacing(4),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: PRICING_POPULAR_BADGE_BORDER_RADIUS,
  padding: theme.spacing(0.75, 2),
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  lineHeight: theme.typography.lineHeight140,
}));

export const PlanName = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize18,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
}));

export const PlanDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
}));

export const PriceRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3),
}));

export const PriceAmount = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.headingFontFamily,
  fontSize: theme.typography.fontSize44,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
  lineHeight: theme.typography.lineHeight108,
}));

export const PriceMonth = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,
  lineHeight: theme.typography.lineHeight108,
}));

export const DocumentsBadge = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.primary.main, PRICING_PRIMARY_ALPHA)
      : theme.palette.accent.lightBlue,
  color: theme.palette.primary.main,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(0.75, 2),
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: theme.spacing(4),
  alignSelf: "flex-start",
}));

export const FeatureList = styled("ul")(({ theme }) => ({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2.5),
  flex: 1,
  marginBottom: theme.spacing(6),
}));

export const FeatureItem = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const EnabledIcon = styled(CheckRoundedIcon)(({ theme }) => ({
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
  color: theme.palette.primary.main,
  flexShrink: 0,
}));

export const DisabledIcon = styled(DoNotDisturbOnOutlinedIcon)(({ theme }) => ({
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
  color: theme.palette.text.disabled,
  flexShrink: 0,
}));

export const FeatureLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$enabled",
})<{ $enabled: boolean }>(({ theme, $enabled }) => ({
  fontSize: theme.typography.fontSize14,
  color: $enabled ? theme.palette.text.primary : theme.palette.text.disabled,
  lineHeight: theme.typography.lineHeight150,
}));

export const PlanCTA = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2.5, 4),
  borderRadius: PRICING_CTA_BORDER_RADIUS,
  border: `2px solid ${theme.palette.primary.main}`,
  backgroundColor: "transparent",
  color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightMedium,
  textTransform: "none",
  transition: PRICING_CTA_TRANSITION,
  "&.Mui-disabled": {
    borderColor: theme.palette.divider,
    color: theme.palette.text.disabled,
    backgroundColor: "transparent",
  },
}));
