import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  STAT_CARD_TREND_PERCENT_COLOR,
  STAT_CARD_TREND_SUFFIX_COLOR,
} from "constants/dashboard";

export const CardsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: theme.spacing(4),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

const statCardShadow =
  "0 1px 2px 0 rgba(16, 24, 40, 0.06), 0 1px 3px 0 rgba(16, 24, 40, 0.1)";

export const Card = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 12,
  padding: theme.spacing(6),
  boxShadow: statCardShadow,
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  minWidth: 0,
}));

export const CardTopRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(6),
}));

export const CardLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: 500,
  color: theme.palette.text.primary,
  lineHeight: 1.45,
}));

export const CardIconWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 34,
  height: 34,
  flexShrink: 0,
});

export const CardSpriteIcon = styled("svg")({
  display: "block",
  width: 34,
  height: 34,
});

export const CardValue = styled(Typography)(({ theme }) => ({
  margin: 0,
  marginBottom: theme.spacing(4),
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize32,
  fontWeight: 600,
  color: theme.palette.text.primary,
  lineHeight: 1.1,
}));

export const TrendRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

export const TrendArrowIcon = styled("svg")({
  display: "block",
  width: 14,
  height: 14,
  flexShrink: 0,
});

export const TrendPercent = styled("span")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  fontWeight: 500,
  color: STAT_CARD_TREND_PERCENT_COLOR,
  lineHeight: theme.typography.lineHeight150,
}));

export const TrendSuffix = styled("span")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  fontWeight: 500,
  color: STAT_CARD_TREND_SUFFIX_COLOR,
  lineHeight: theme.typography.lineHeight150,
}));
