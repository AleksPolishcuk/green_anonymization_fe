import { Typography } from "@mui/material";
import {
  statsDelayOne,
  statsDelayTwo,
  statsDelayThree,
  heroRevealDuration,
} from "constants/auth";
import { styled } from "@mui/material/styles";
import { fadeUp } from "features/Auth/components/styles";

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
