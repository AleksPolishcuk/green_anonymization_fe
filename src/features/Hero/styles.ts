import { styled, keyframes } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";

import {
  heroAnimation,
  heroAssets,
  heroBreakpoints,
  heroColors,
  heroLayout,
  heroRadii,
  heroShadows,
  heroTypography,
} from "shared/constants/hero";

const enterAnimation = keyframes`
  0% {
    transform:
      translate(${heroAnimation.enterTranslateX}, ${heroAnimation.enterTranslateY})
      rotate(${heroAnimation.enterRotateStart})
      scale(${heroAnimation.enterScaleStart});
    opacity: 0.98;
  }
  55% {
    transform:
      translate(0, 0)
      rotate(${heroAnimation.enterRotateEnd})
      scale(${heroAnimation.enterScaleEnd});
    opacity: 1;
  }
  100% {
    transform:
      translate(0, 0)
      rotate(${heroAnimation.enterRotateEnd})
      scale(${heroAnimation.enterScaleEnd});
    opacity: 1;
  }
`;

const floatAnimation = keyframes`
  0%   { transform: translateY(${heroAnimation.floatOffsetStart}); }
  50%  { transform: translateY(${heroAnimation.floatOffsetMiddle}); }
  100% { transform: translateY(${heroAnimation.floatOffsetEnd}); }
`;

export const Section = styled("section")({
  position: "relative",
  padding: 0,
  overflow: "hidden",
  background: `
    url("${heroAssets.waveBottom}") bottom center / 100% auto no-repeat,
    radial-gradient(ellipse at 0% 0%, ${heroColors.radialTopLeft} 0%, transparent 60%),
    radial-gradient(ellipse at 100% 100%, ${heroColors.radialBottomRight} 0%, transparent 55%),
    radial-gradient(ellipse at 55% 40%, ${heroColors.radialCenter} 0%, transparent 45%),
    linear-gradient(135deg, ${heroColors.gradientStart} 0%, ${heroColors.gradientMiddle} 50%, ${heroColors.gradientEnd} 100%)
  `,
});

export const HeroGrid = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  display: "grid",
  gridTemplateColumns: "1fr",
  alignItems: "start",
  paddingTop: heroLayout.heroTopPaddingMobile,
  paddingBottom: heroLayout.heroBottomPaddingMobile,

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "minmax(0, 1.35fr) minmax(220px, 0.65fr)",
    columnGap: 20,
    paddingLeft: 24,
    paddingRight: 24,
    alignItems: "center",
  },

  [`@media (min-width: ${heroBreakpoints.laptopMin}px) and (max-width: ${heroBreakpoints.laptopMax}px)`]:
    {
      gridTemplateColumns: "minmax(0, 1.2fr) minmax(280px, 0.8fr)",
      columnGap: 24,
      paddingLeft: 32,
      paddingRight: 32,
    },

  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: `
      minmax(0, ${heroLayout.contentDesktopMaxWidth}px)
      minmax(0, ${heroLayout.visualDesktopWidth}px)
    `,
    justifyContent: "space-between",
    columnGap: heroLayout.columnGapDesktop,
    paddingTop: heroLayout.heroTopPaddingDesktop,
    paddingBottom: heroLayout.heroBottomPaddingDesktop,
    alignItems: "start",
  },
}));

export const Content = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  maxWidth: "100%",
  minWidth: 0,

  [theme.breakpoints.up("lg")]: {
    maxWidth: heroLayout.contentDesktopMaxWidth,
  },
}));

export const Pill = styled("div")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  marginBottom: heroLayout.pillMarginBottom,
  padding: "9px 17px",
  borderRadius: heroRadii.pill,
  background: heroColors.pillBackground,
  border: `1px solid ${heroColors.pillBorder}`,
  color: theme.palette.primary.dark,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: heroTypography.pillFontSize,
  lineHeight: heroTypography.pillLineHeight,
  letterSpacing: heroTypography.pillLetterSpacing,
}));

export const PillDot = styled("span")(({ theme }) => ({
  titleAccentImageBottomOffset: -4,
  width: 8,
  height: 8,
  borderRadius: heroRadii.dot,
  flexShrink: 0,
  background: theme.palette.primary.dark,
}));

export const Title = styled(Typography)(({ theme }) => ({
  margin: 0,
  maxWidth: "100%",
  minWidth: 0,
  wordBreak: "normal",
  overflowWrap: "normal",
  hyphens: "none",

  [theme.breakpoints.up("lg")]: {
    maxWidth: heroLayout.titleDesktopMaxWidth,
  },
}));

export const TitleAccent = styled("span")({
  position: "relative",
  display: "inline-block",
});

export const TitleAccentImage = styled("img")(({ theme }) => ({
  position: "absolute",
  left: 0,
  bottom: heroLayout.titleAccentImageBottomOffset,
  display: "block",
  width: "100%",
  maxWidth: "100%",
  height: "auto",
  pointerEvents: "none",
  userSelect: "none",

  [theme.breakpoints.up("md")]: {
    bottom: -6,
  },

  [theme.breakpoints.up("lg")]: {
    bottom: heroLayout.titleAccentImageBottomOffset,
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  margin: `${heroLayout.descriptionMarginTop}px 0 0`,
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize18,
  lineHeight: heroTypography.descriptionLineHeight,
  maxWidth: heroLayout.descriptionMobileMaxWidth,

  [theme.breakpoints.up("md")]: {
    maxWidth: 420,
    fontSize: theme.typography.fontSize16,
  },

  [theme.breakpoints.up("lg")]: {
    maxWidth: heroLayout.descriptionDesktopMaxWidth,
    fontSize: theme.typography.fontSize18,
  },
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: theme.typography.fontSize14,
  marginTop: heroLayout.actionsMarginTop,
  padding: "14px 24px",
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  boxShadow: heroShadows.primaryButton,

  "&:hover": {
    background: theme.palette.primary.dark,
    boxShadow: heroShadows.primaryButtonHover,
  },

  [theme.breakpoints.up("md")]: {
    padding: "17px 27px",
    fontSize: theme.typography.fontSize16,
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.button.fontSize,
  },
}));

export const StatsRow = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  gap: 12,
  marginTop: heroLayout.statsMarginTopMobile,
  maxWidth: 240,

  [theme.breakpoints.up("md")]: {
    gap: 14,
    maxWidth: "none",
  },

  [theme.breakpoints.up("lg")]: {
    flexWrap: "nowrap",
    gap: 0,
    maxWidth: "none",
    marginTop: heroLayout.statsMarginTopDesktop,
  },
}));

export const StatItem = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: 84,
  maxWidth: 110,

  [theme.breakpoints.up("md")]: {
    position: "relative",
    minWidth: 82,
    maxWidth: 96,

    "&:not(:last-of-type)": {
      marginRight: 14,
      paddingRight: 14,
    },

    "&:not(:last-of-type)::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      right: 0,
      width: 1,
      height: heroLayout.statDividerHeightDesktop,
      background: theme.palette.divider,
      transform: "translateY(-50%)",
    },
  },

  [theme.breakpoints.up("lg")]: {
    flex: "0 1 auto",
    minWidth: 0,
    maxWidth: "none",

    "&:not(:last-of-type)": {
      marginRight: heroLayout.statItemGapDesktop,
      paddingRight: heroLayout.statItemGapDesktop,
    },

    "&:not(:last-of-type)::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      right: 0,
      width: 1,
      height: heroLayout.statDividerHeightDesktop,
      background: theme.palette.divider,
      transform: "translateY(-50%)",
    },
  },
}));

export const StatValue = styled(Typography)(({ theme }) => ({
  margin: 0,
  color: theme.palette.text.primary,
  fontFamily: theme.typography.h1.fontFamily,
  fontWeight: theme.typography.h1.fontWeight,
  fontSize: theme.typography.fontSize16,
  lineHeight: heroTypography.statValueLineHeight,
  letterSpacing: heroTypography.statValueLetterSpacing,

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize18,
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: heroTypography.statValueFontSizeDesktop,
  },
}));

export const StatLabel = styled(Typography)(({ theme }) => ({
  margin: 0,
  color: theme.palette.text.secondary,
  fontSize: heroTypography.statLabelFontSizeMobile,
  lineHeight: heroTypography.statLabelLineHeight,
  wordBreak: "normal",
  overflowWrap: "anywhere",

  [theme.breakpoints.up("md")]: {
    fontSize: heroTypography.pillFontSize,
  },
}));

export const Visual = styled("div")(({ theme }) => ({
  display: "none",
  position: "relative",
  minWidth: 0,

  [theme.breakpoints.up("md")]: {
    display: "block",
    width: "100%",
    minWidth: 220,
    height: 290,
    alignSelf: "center",
    justifySelf: "end",
    overflow: "visible",
  },

  [`@media (min-width: ${heroBreakpoints.laptopMin}px) and (max-width: ${heroBreakpoints.laptopMax}px)`]:
    {
      minWidth: 280,
      height: 380,
    },

  [theme.breakpoints.up("lg")]: {
    width: heroLayout.visualDesktopWidth,
    minWidth: heroLayout.visualDesktopMinWidth,
    height: heroLayout.visualDesktopHeight,
    alignSelf: "start",
  },
}));

export const ShieldAnimationWrap = styled("div")({
  position: "absolute",
  inset: 0,
  background: "transparent",
  transformOrigin: "center center",
  animation: `${enterAnimation} ${heroAnimation.enterDuration} ${heroAnimation.enterEasing} forwards`,
});

export const ShieldFloatLayer = styled("div")({
  width: "100%",
  height: "100%",
  background: "transparent",
  filter: heroShadows.shield,
  animation: `${floatAnimation} ${heroAnimation.floatDuration} ${heroAnimation.floatEasing} ${heroAnimation.floatDelay} infinite alternate`,
});

export const ShieldImage = styled("img")(({ theme }) => ({
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "contain",
  objectPosition: "center",
  userSelect: "none",
  pointerEvents: "none",
  background: "transparent",

  [theme.breakpoints.up("md")]: {
    transform: "scale(0.88)",
    transformOrigin: "center center",
  },

  [`@media (min-width: ${heroBreakpoints.laptopMin}px) and (max-width: ${heroBreakpoints.laptopMax}px)`]:
    {
      transform: "scale(1)",
    },

  [theme.breakpoints.up("lg")]: {
    transform: "none",
  },
}));
