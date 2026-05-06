import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { TypographyProps } from "@mui/material/Typography";

import {
  BUTTON_SHADOW_DEFAULT,
  BUTTON_SHADOW_FOCUS,
  BUTTON_SHADOW_HOVER,
  BUTTON_TRANSITION_DURATION_S,
  EASING_STANDARD,
  START_DEID_BUTTON_HEIGHT,
  START_DEID_BUTTON_RADIUS,
  START_DEID_BUTTON_WIDTH,
} from "constants/DashboardPage";

export const HeaderRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.up("lg")]: {
    justifyContent: "space-between",
  },
}));

export const HeaderTextGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3.5),
  maxWidth: 720,
  minWidth: 0,
  flex: "1 1 auto",
}));

export const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  margin: 0,
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.fontSize22,
  lineHeight: theme.typography.lineHeight108,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize32,
  },
  [theme.breakpoints.up("lg")]: {
    textAlign: "left",
  },
}));

export const HeaderSubtitle = styled(Typography)(({ theme }) => ({
  margin: 0,
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize14,
  lineHeight: theme.typography.lineHeight175,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize16,
  },
  [theme.breakpoints.up("lg")]: {
    textAlign: "left",
  },
}));

export const StartDeIdButton = styled(Button)(({ theme }) => ({
  boxSizing: "border-box",
  margin: 0,
  flexShrink: 0,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
  width: "100%",
  height: START_DEID_BUTTON_HEIGHT,
  padding: theme.spacing(0, 2.5),
  [theme.breakpoints.up("sm")]: {
    width: START_DEID_BUTTON_WIDTH,
    minWidth: START_DEID_BUTTON_WIDTH,
  },
  borderRadius: START_DEID_BUTTON_RADIUS,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.button.fontWeight,
  textTransform: "none",
  whiteSpace: "nowrap",
  boxShadow: BUTTON_SHADOW_DEFAULT,
  transition: [
    `background-color ${BUTTON_TRANSITION_DURATION_S}s ${EASING_STANDARD}`,
    `box-shadow ${BUTTON_TRANSITION_DURATION_S}s ${EASING_STANDARD}`,
  ].join(", "),

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: BUTTON_SHADOW_HOVER,
  },

  "&:active": {
    backgroundColor: theme.palette.primary.main,
    boxShadow: BUTTON_SHADOW_DEFAULT,
  },

  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.contrastText}`,
    outlineOffset: "2px",
    boxShadow: BUTTON_SHADOW_FOCUS,
  },

  "&:focus:not(:focus-visible)": {
    outline: "none",
  },
}));

export const ButtonSpriteIcon = styled("svg")({
  display: "block",
  flexShrink: 0,
  width: 18,
  height: 18,
});
