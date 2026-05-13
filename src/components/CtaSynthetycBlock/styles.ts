import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { cardShadows, REVEAL_ANIMATION } from "constants/MainPages";

export const SyntheticDataCta = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 954,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: theme.spacing(4),
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  background:
    "linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(99, 102, 241, 0.04) 100%)",
  boxShadow:
    theme.palette.mode === "dark" ? cardShadows.cardDark : cardShadows.card,
  transition: `transform ${REVEAL_ANIMATION.hoverDurationS}s ease, box-shadow ${REVEAL_ANIMATION.hoverDurationS}s ease`,

  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow:
      theme.palette.mode === "dark"
        ? cardShadows.cardDarkHover
        : cardShadows.cardHover,
  },

  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(4),
    padding: theme.spacing(6),
  },
}));

export const SyntheticDataCtaLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(3),

  [theme.breakpoints.up("md")]: {
    alignItems: "center",
    gap: theme.spacing(4),
  },
}));

export const SyntheticDataIconBox = styled(Box)(({ theme }) => {
  return {
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    borderRadius: theme.spacing(3),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.color.blue,

    "& svg": {
      width: 24,
      height: 24,
    },
  };
});

export const SyntheticDataCtaTitle = styled(Typography)(() => ({}));

export const SyntheticDataCtaText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  maxWidth: 520,
  fontSize: theme.typography.fontSize12,
  color: theme.palette.text.secondary,
}));

export const SyntheticDataButton = styled(Button)(({ theme }) => ({
  width: "100%",
  flexShrink: 0,
  textTransform: "none",
  fontSize: theme.typography.fontSize14,
  padding: theme.spacing(2.5, 4),
  borderRadius: theme.spacing(3),
  color: theme.palette.common.white,
  backgroundColor: theme.palette.color.blue,

  "&:hover": {
    backgroundColor: theme.palette.color.darkBlue,
  },

  [theme.breakpoints.up("md")]: {
    maxWidth: 249,
    margin: "0 auto",
  },
}));
