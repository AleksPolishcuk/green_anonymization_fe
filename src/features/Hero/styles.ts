import { styled, keyframes, type Theme } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import { TaskAlt as TaskAltIcon } from "@mui/icons-material";
import {
  heroBreakpoints,
  heroColors,
  heroDarkColors,
  heroLayout,
} from "constants/MainPages";

const getHeroColors = (theme: Theme) =>
  theme.palette.mode === "dark" ? heroDarkColors : heroColors;

const enterAnimation = keyframes`
  0% {
    transform:
      translate(190px, 150px)
      rotate(-55deg)
      scale(0.187);
    opacity: 0.98;
  }
  55% {
    transform:
      translate(0, 0)
      rotate(360deg)
      scale(1);
    opacity: 1;
  }
  100% {
    transform:
      translate(0, 0)
      rotate(360deg)
      scale(1);
    opacity: 1;
  }
`;

const floatAnimation = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-10px); }
  100% { transform: translateY(10px); }
`;

const waveAnimation = keyframes`
  0%   { background-position-x: 0; }
  100% { background-position-x: 1600px; }
`;

const wavePath =
  "M0,35 C267,15 533,55 800,30 C1067,5 1333,50 1600,35 L1600,70 L0,70 Z";

export const Section = styled("section")(({ theme }: { theme: Theme }) => {
  const colors = getHeroColors(theme);
  const makeSvgUrl = (path: string, fill: string) =>
    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 70' preserveAspectRatio='none'%3E%3Cpath d='${path}' fill='${encodeURIComponent(fill)}'/%3E%3C/svg%3E")`;

  return {
    position: "relative",
    padding: 0,
    overflow: "hidden",
    background: `
      radial-gradient(ellipse at 0% 0%, ${colors.radialTopLeft} 0%, transparent 60%),
      radial-gradient(ellipse at 100% 100%, ${colors.radialBottomRight} 0%, transparent 55%),
      radial-gradient(ellipse at 55% 40%, ${colors.radialCenter} 0%, transparent 45%),
      linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientMiddle} 50%, ${colors.gradientEnd} 100%)
    `,

    "&::before, &::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "200%",
      height: 50,
      backgroundRepeat: "repeat-x",
      backgroundSize: "1600px 70px",
      pointerEvents: "none",
      zIndex: 0,
    },

    "&::before": {
      backgroundImage: makeSvgUrl(wavePath, colors.waveFill),
      animation: `${waveAnimation} 12s linear infinite`,
    },
  };
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
    columnGap: theme.spacing(9),
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

export const Pill = styled("div")(({ theme }) => {
  const colors = getHeroColors(theme);

  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    marginBottom: theme.spacing(8),
    padding: "9px 17px",
    borderRadius: 9999,

    background: colors.pillBackground,
    border: `1px solid ${colors.pillBorder}`,

    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.fontSize12,
    lineHeight: theme.typography.lineHeight158,

    backdropFilter: theme.palette.mode === "dark" ? "blur(6px)" : "none",

    boxShadow:
      theme.palette.mode === "dark"
        ? `
          0 0 0 1px ${colors.pillGlowBorder},
          0 0 12px ${colors.pillGlow}
        `
        : "none",

    transition: "all 0.2s ease",
  };
});

export const PillDot = styled("span")(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  flexShrink: 0,
  background: theme.palette.primary.main,
}));

export const Title = styled(Typography)(({ theme }) => ({
  margin: 0,
  maxWidth: "100%",
  minWidth: 0,
  wordBreak: "normal",
  overflowWrap: "normal",
  hyphens: "none",
  color: theme.palette.text.primary,

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
  bottom: -4,
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
    bottom: -4,
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(6, 0, 0),
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize18,
  lineHeight: theme.typography.lineHeight167,
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

export const PrimaryButton = styled(Button)(({ theme }) => {
  const colors = getHeroColors(theme);

  return {
    textTransform: "none",
    fontSize: theme.typography.fontSize14,
    marginTop: theme.spacing(10.5),
    padding: "14px 24px",
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    boxShadow: `0 4px 8px ${colors.buttonHoverShadow}`,

    "&:hover": {
      background: theme.palette.color.darkBlue,
      boxShadow: `0 4px 8px ${colors.buttonHoverShadow}`,
    },

    [theme.breakpoints.up("md")]: {
      padding: "17px 27px",
      fontSize: theme.typography.fontSize16,
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: theme.typography.button.fontSize,
    },
  };
});

export const StatsRow = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: theme.spacing(5),
  marginTop: theme.spacing(10),

  [theme.breakpoints.up("lg")]: {
    gap: theme.spacing(7),
    marginTop: theme.spacing(14),
  },
}));

export const StatItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.6),
}));

export const TaskAlt = styled(TaskAltIcon)(({ theme }) => ({
  fontSize: 20,
  color: theme.palette.primary.main,
  flexShrink: 0,

  display: "flex",
  alignItems: "center",

  transition: "transform 0.2s ease, filter 0.2s ease",

  filter:
    theme.palette.mode === "dark"
      ? `
      drop-shadow(0 0 6px rgba(59,130,246,0.4))
      drop-shadow(0 0 12px rgba(59,130,246,0.3))
      drop-shadow(0 0 20px rgba(59,130,246,0.2))
    `
      : "none",

  "&:hover": {
    transform: "scale(1.1)",
  },
}));

export const StatText = styled(Typography)(({ theme }) => ({
  margin: 0,
  whiteSpace: "nowrap",
  letterSpacing: "0.09em",

  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.fontSize18,
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
  animation: `${enterAnimation} 2.8s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
});

export const ShieldFloatLayer = styled("div")(({ theme }) => {
  const colors = getHeroColors(theme);

  return {
    width: "100%",
    height: "100%",
    background: "transparent",
    filter: `drop-shadow(0 34px 70px ${colors.shieldShadow})`,
    animation: `${floatAnimation} 4.8s ease-in-out 2.8s infinite alternate`,
  };
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
