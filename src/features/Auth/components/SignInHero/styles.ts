import { Typography } from "@mui/material";
import {
  shieldGrowDuration,
  headingDelay,
  paragraphDelay,
  statsDelayOne,
  statsDelayTwo,
  statsDelayThree,
  heroRevealDuration,
} from "constants/auth";
import { keyframes, styled } from "@mui/material/styles";
import staggerItem from "features/Auth/utils/staggerItem";
import { fadeUp } from "features/Auth/components/styles";

const shieldGrow = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }

  60% {
    transform: scale(1.15);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const ShieldLogo = styled("div")(({ theme }) => ({
  width: theme.spacing(16),
  height: theme.spacing(16),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transformOrigin: "center",
  animation: `${shieldGrow} ${shieldGrowDuration}ms cubic-bezier(0.2, 0.9, 0.2, 1) both`,
}));

export const WelcomeHeading = styled(Typography)(({ theme }) => ({
  ...staggerItem(headingDelay),

  margin: 0,
  fontFamily: theme.typography.headingFontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize32,
  lineHeight: theme.typography.lineHeight108,
  color: theme.palette.color.white,

  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize28,
  },
}));

export const EnterpriseParagraph = styled(Typography)(({ theme }) => ({
  ...staggerItem(paragraphDelay),

  margin: 0,
  maxWidth: theme.spacing(80.5),
  textAlign: "center",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize16,
  lineHeight: theme.typography.lineHeight167,
  color: theme.palette.accent.lightBlue,

  [theme.breakpoints.down("md")]: {
    maxWidth: theme.spacing(80.5),
    fontSize: theme.typography.fontSize14,
  },
}));

export const Stats = styled("ul")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: theme.spacing(9),
  margin: 0,
  padding: 0,
  listStyle: "none",

  "& li": {
    opacity: 0,
    transform: "translateY(12px)",
    animation: `${fadeUp} ${heroRevealDuration}ms ease forwards`,
  },

  "& li:nth-of-type(1)": {
    animationDelay: `${statsDelayOne}ms`,
  },

  "& li:nth-of-type(2)": {
    animationDelay: `${statsDelayTwo}ms`,
  },

  "& li:nth-of-type(3)": {
    animationDelay: `${statsDelayThree}ms`,
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(3),
  },
}));

export const StatItem = styled("li")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(1),
  textAlign: "center",
}));

export const StatValue = styled(Typography)(({ theme }) => ({
  margin: 0,
  fontFamily: theme.typography.headingFontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize22,
  lineHeight: theme.typography.lineHeight150,
  color: theme.palette.color.white,
}));

export const StatLabel = styled(Typography)(({ theme }) => ({
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize12,
  lineHeight: theme.typography.lineHeight150,
  color: theme.palette.accent.lightBlue,
}));
