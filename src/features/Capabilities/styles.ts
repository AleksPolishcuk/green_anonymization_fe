import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
import { CAPABILITIES_LAYOUT } from "shared/constants/capabilities";
import { FONT_WEIGHT } from "constants";

export const CapabilitiesSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.subtle.bg,
  padding: `${CAPABILITIES_LAYOUT.sectionPaddingY}px 0`,
  width: "100%",
}));

export const SectionContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    paddingLeft: CAPABILITIES_LAYOUT.sidePaddingTablet,
    paddingRight: CAPABILITIES_LAYOUT.sidePaddingTablet,
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: CAPABILITIES_LAYOUT.sidePaddingDesktop,
    paddingRight: CAPABILITIES_LAYOUT.sidePaddingDesktop,
  },
}));

export const TitleSectionBlock = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  maxWidth: CAPABILITIES_LAYOUT.titleBlockMaxWidth,
  margin: `0 auto ${CAPABILITIES_LAYOUT.titleBlockMarginBottom}px auto`,
});

export const Subtitle = styled(Typography)(({ theme }) => ({
  display: "block",
  fontSize: CAPABILITIES_LAYOUT.subtitleFontSize,
  fontWeight: FONT_WEIGHT.bold,
  textTransform: "uppercase",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(4),
}));

export const SectionTitle = styled(Typography)({
  marginBottom: 8,
});

export const CardsList = styled("ul")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: CAPABILITIES_LAYOUT.cardsGap,
  listStyle: "none",
  margin: 0,
  padding: 0,
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const CardItem = styled("li")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: CAPABILITIES_LAYOUT.cardPaddingMobile,
  display: "flex",
  flexDirection: "column",
  gap: CAPABILITIES_LAYOUT.cardContentGap,
  boxShadow: CAPABILITIES_LAYOUT.cardBoxShadow,

  opacity: 0,
  transform: "translateY(24px)",
  transition: "opacity 1s ease, transform 1s ease",

  "&.visible": {
    opacity: 1,
    transform: "translateY(0)",
  },
  [theme.breakpoints.up("md")]: {
    padding: CAPABILITIES_LAYOUT.cardPaddingDesktop,
  },
}));

export const IconWrapper = styled("div")<{ $bg: string }>(({ $bg, theme }) => ({
  backgroundColor: $bg,
  width: CAPABILITIES_LAYOUT.iconSize,
  height: CAPABILITIES_LAYOUT.iconSize,
  borderRadius: CAPABILITIES_LAYOUT.iconBorderRadius,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
  "& svg": {
    width: CAPABILITIES_LAYOUT.iconSvgSize,
    height: CAPABILITIES_LAYOUT.iconSvgSize,
    fill: "currentColor",
  },
}));
