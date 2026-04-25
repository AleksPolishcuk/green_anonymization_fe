import { alpha, Box, Button, styled, Typography } from "@mui/material";
import staggerItem from "features/Auth/utils/staggerItem";
import { submitButton } from "../styles";

export const SigninHeading = styled(Typography)(({ theme }) => ({
  ...staggerItem(200),

  margin: 0,
  fontFamily: theme.typography.headingFontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize32,
  lineHeight: theme.typography.lineHeight108,
  color: theme.palette.text.primary,

  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize28,
  },
}));

export const SigninSubtext = styled(Typography)(({ theme }) => ({
  ...staggerItem(320),

  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize14,
  lineHeight: theme.typography.lineHeight150,
  color: theme.palette.text.secondary,
}));

export const SigninFormBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),

  "& form": {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  },
}));

export const EmailLabel = styled("label")(({ theme }) => ({
  display: "inline-block",
  paddingBottom: theme.spacing(2),
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightSemiBold,
  fontSize: theme.typography.fontSize14,
  lineHeight: theme.typography.lineHeight150,
  color: theme.palette.text.primary,
}));

export const EmailIcon = styled("svg")(({ theme }) => ({
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
  display: "block",
  fill: "none",
  color: theme.palette.background.mediumGray,
}));

export const SigninBtn = styled(Button)(({ theme }) => ({
  width: "100%",
  minHeight: theme.spacing(13),
  padding: theme.spacing(0, 4),
  borderRadius: theme.spacing(3.5),
  backgroundColor: theme.palette.primary.main,
  boxShadow: `0px 4px 14px 0px ${alpha(theme.palette.accent.blue, 0.3)}`,
  color: theme.palette.color.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightSemiBold,
  fontSize: theme.typography.fontSize16,
  lineHeight: theme.typography.lineHeight150,
  textTransform: "none",
  transition: theme.transitions.create(
    ["transform", "box-shadow", "background-color"],
    {
      duration: theme.transitions.duration.shorter,
    },
  ),

  "&.Mui-disabled": {
    cursor: "not-allowed",
    pointerEvents: "auto",

    background: submitButton.disabledBtnBg,
    color: theme.palette.color.grayDark,
    border: submitButton.disabledBtnBorder,
    fontWeight: theme.typography.fontWeightLight,
    boxShadow: "none",
  },

  "&:hover": {
    backgroundColor: theme.palette.color.darkBlue,
    transform: "translateY(-2px)",
    boxShadow: `0px 10px 20px 0px ${alpha(theme.palette.accent.blue, 0.3)}`,
  },

  "&:active": {
    transform: "translateY(0) scale(0.98)",
  },

  "&:focus-visible": {
    outline: `${theme.spacing(0.75)} solid ${alpha(theme.palette.primary.main, 0.4)}`,
    outlineOffset: theme.spacing(0.5),
  },
}));

export const BottomText = styled("span")(({ theme }) => ({
  display: "block",
  margin: 0,
  padding: 0,
  textAlign: "center",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize12,
  lineHeight: theme.typography.lineHeight150,
  color: theme.palette.text.secondary,

  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(8),
  },
}));

export const BottomLinkText = styled("span")(({ theme }) => ({
  textDecoration: "underline",
  color: theme.palette.text.primary,
}));
