import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
import type { AccentKey } from "constants/index";
import { cardShadows } from "shared/constants/capabilities";

export const SectionWrapper = styled("section")(({ theme }) => ({
  padding: theme.spacing(20, 0),
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(10, 0),
  },
}));

export const ComplianceContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    paddingLeft: 68,
    paddingRight: 68,
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 144,
    paddingRight: 144,
  },
}));

export const HeaderRow = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(12),
  marginBottom: theme.spacing(12),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(4),
    marginBottom: theme.spacing(8),
  },
}));

export const HeaderRight = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(2),

  [theme.breakpoints.down("md")]: {
    paddingTop: 0,
  },
}));

export const LabelText = styled(Typography)(({ theme }) => ({
  display: "block",
  fontSize: theme.typography.fontSize12,
  letterSpacing: "0.05em",
  fontWeight: theme.typography.fontWeightBold,
  textTransform: "uppercase",
  color: theme.palette.color.blue,
  marginBottom: theme.spacing(4),
}));

export const CardsGrid = styled("ul")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  alignItems: "start",
  gap: theme.spacing(6),
  marginBottom: theme.spacing(6),

  [theme.breakpoints.up("lg")]: {
    "& > *:nth-child(2)": {
      marginTop: theme.spacing(10),
    },

    "& > *:nth-child(4)": {
      marginTop: theme.spacing(10),
    },
  },

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "unset",
    gap: theme.spacing(4),
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const CardWrapper = styled("li", {
  shouldForwardProp: (prop) => prop !== "$revealed" && prop !== "$index",
})<{
  $revealed: boolean;
  $index: number;
}>(({ theme, $revealed, $index }) => ({
  padding: theme.spacing(6),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,

  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),

  boxShadow:
    theme.palette.mode === "dark" ? cardShadows.cardDark : cardShadows.card,

  opacity: $revealed ? 1 : 0,
  transform: $revealed ? "translateY(0)" : "translateY(20px)",

  transition: "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease",
  transitionDelay: $revealed ? `${$index * 0.15}s` : "0s",
}));

export const CardAccentLine = styled("span")<{
  $accentKey: AccentKey;
}>(({ theme, $accentKey }) => ({
  width: "40px",
  height: "4px",
  backgroundColor: theme.palette.accent[$accentKey],
  borderRadius: "2px",

  boxShadow:
    theme.palette.mode === "dark"
      ? `0 0 16px ${theme.palette.accent[$accentKey]}66`
      : "none",
}));

const getLightKey = (key: AccentKey) =>
  `light${key.charAt(0).toUpperCase()}${key.slice(1)}` as
    | "lightBlue"
    | "lightGreen"
    | "lightAmber"
    | "lightRed"
    | "lightLilac";

export const CardBadge = styled("span")<{
  $accentKey: AccentKey;
}>(({ theme, $accentKey }) => {
  const lightKey = getLightKey($accentKey);

  return {
    padding: "3px 10px",
    borderRadius: "20px",
    backgroundColor: theme.palette.accent[lightKey],
    color: theme.palette.accent[$accentKey],
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize14,
    fontWeight: theme.typography.fontWeightBold,
    width: "fit-content",
  };
});

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeightSemiBold,
  color: theme.palette.color.charcoal,
}));

export const CardEntityCount = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.color.grayDark,
}));

export const HeaderDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.grayDark,
}));
