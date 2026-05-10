import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import DoNotDisturbOnOutlinedIcon from "@mui/icons-material/DoNotDisturbOnOutlined";

export const PRICING_CTA_CLASS = "pricing-cta-btn";

export const PricingGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(6),
  width: "100%",
  maxWidth: 820,
  margin: "0 auto",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(8),
  },
}));

export const PricingCardRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.background.paper, 0.55),
  backdropFilter: "blur(6px)",
  borderRadius: 16,
  padding: theme.spacing(6),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 2px 16px rgba(0, 0, 0, 0.25)"
      : "0 2px 16px rgba(16, 24, 40, 0.06)",
  display: "flex",
  flexDirection: "column",
  transition: "border-color 0.22s ease, box-shadow 0.22s ease",

  "&:hover": {
    borderColor: theme.palette.primary.main,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 6px 28px rgba(0, 0, 0, 0.4)"
        : "0 6px 28px rgba(16, 24, 40, 0.12)",

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
  borderRadius: 20,
  padding: theme.spacing(0.75, 2),
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  lineHeight: 1.4,
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
  lineHeight: 1,
}));

export const PriceMonth = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,
  lineHeight: 1,
}));

export const DocumentsBadge = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(21, 93, 252, 0.18)"
      : theme.palette.accent.lightBlue,
  color: theme.palette.primary.main,
  borderRadius: 8,
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

export const FeatureItem = styled("li")({
  display: "flex",
  alignItems: "center",
  gap: 8,
});

export const EnabledIcon = styled(CheckRoundedIcon)(({ theme }) => ({
  width: 18,
  height: 18,
  color: theme.palette.primary.main,
  flexShrink: 0,
}));

export const DisabledIcon = styled(DoNotDisturbOnOutlinedIcon)(({ theme }) => ({
  width: 18,
  height: 18,
  color: theme.palette.text.disabled,
  flexShrink: 0,
}));

export const FeatureLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$enabled",
})<{ $enabled: boolean }>(({ theme, $enabled }) => ({
  fontSize: theme.typography.fontSize14,
  color: $enabled ? theme.palette.text.primary : theme.palette.text.disabled,
  lineHeight: 1.5,
}));

export const PlanCTA = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2.5, 4),
  borderRadius: 10,
  border: `2px solid ${theme.palette.primary.main}`,
  backgroundColor: "transparent",
  color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightMedium,
  textTransform: "none",
  transition:
    "background-color 0.22s ease, border-color 0.22s ease, color 0.22s ease",
}));
