import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
import {
  ACCENT_LIGHT_MAP,
  cardShadows,
  type AccentKey,
} from "constants/MainPages";

export const CapabilitiesSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.subtle.bg,
  padding: "80px 0",
  width: "100%",

  [theme.breakpoints.up("md")]: {
    padding: "128px 0",
  },
}));

export const SectionContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    paddingLeft: 68,
    paddingRight: 68,
  },

  [theme.breakpoints.up("lg")]: {
    paddingLeft: 144,
    paddingRight: 144,
  },
}));

export const TitleSectionBlock = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  maxWidth: 760,
  margin: `0 auto ${theme.spacing(16)} auto`,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  display: "block",
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightBold,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(4),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: 8,
  color: theme.palette.text.primary,
}));

export const CardsList = styled("ul")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: theme.spacing(5),
  listStyle: "none",
  margin: 0,
  padding: 0,

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const CardItem = styled("li")<{
  $revealed: boolean;
  $index: number;
}>(({ theme, $revealed, $index }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  boxShadow:
    theme.palette.mode === "dark" ? cardShadows.cardDark : cardShadows.card,

  opacity: $revealed ? 1 : 0,
  transform: $revealed ? "translateY(0)" : "translateY(24px)",
  transition: "opacity 1s ease, transform 1s ease, box-shadow 0.3s ease",
  transitionDelay: $revealed ? `${$index * 0.15}s` : "0s",

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8, 32, 8, 8),
  },
}));

export const IconWrapper = styled("div")<{ $accentKey: AccentKey }>(({
  theme,
  $accentKey,
}) => {
  const lightAccentKey =
    ACCENT_LIGHT_MAP[$accentKey as keyof typeof ACCENT_LIGHT_MAP];

  return {
    backgroundColor: theme.palette.accent[lightAccentKey],
    width: 44,
    height: 44,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& svg": {
      width: 20,
      height: 20,
      fill: "none",
      stroke: theme.palette.accent[$accentKey],
      strokeWidth: 1,
    },
  };
});
