import { alpha, Box, Button, styled, Typography } from "@mui/material";
import staggerItem from "features/Auth/utils/staggerItem";
import { submitButtonStyles } from "../styles";

export const RegisterHeading = styled(Typography)(({ theme }) => ({
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

export const RegisterFormBox = styled(Box)(({ theme }) => ({
  ...staggerItem(320),

  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),

  "& form": {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  },
}));

export const FieldWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const NamesRow = styled(Box)(({ theme }) => ({
  ...staggerItem(420),

  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(3),

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const CompanyRow = styled(Box)(({ theme }) => ({
  ...staggerItem(520),

  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const NameLabel = styled("label")(({ theme }) => ({
  display: "inline-block",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightSemiBold,
  fontSize: theme.typography.fontSize14,
  lineHeight: theme.typography.lineHeight150,
  color: theme.palette.text.primary,
}));

export const CompanyIcon = styled("svg")(({ theme }) => ({
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
  display: "block",
  fill: "none",
  color: theme.palette.background.mediumGray,
}));

export const PersonIcon = styled("svg")(({ theme }) => ({
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
  display: "block",
  fill: "none",
  opacity: 1,
  color: theme.palette.background.mediumGray,
}));

export const RegisterButton = styled(Button)(({ theme }) => ({
  ...staggerItem(620),

  width: "100%",
  minHeight: theme.spacing(13),
  padding: theme.spacing(0, 4),
  borderRadius: theme.spacing(3.5),

  backgroundColor: theme.palette.primary.main,
  boxShadow: `0px ${theme.spacing(1)} ${theme.spacing(3.5)} 0px ${alpha(
    theme.palette.accent.blue,
    0.3,
  )}`,

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
    { duration: theme.transitions.duration.shorter },
  ),

  "&.Mui-disabled": {
    cursor: "not-allowed",
    pointerEvents: "auto",

    background: submitButtonStyles.disabledBtnBg,
    color: theme.palette.color.grayDark,
    border: submitButtonStyles.disabledBtnBorder,
    fontWeight: theme.typography.fontWeightLight,
    boxShadow: "none",
  },

  "&:hover": {
    backgroundColor: theme.palette.color.darkBlue,
    transform: "translateY(-2px)",
    boxShadow: `0px ${theme.spacing(2.5)} ${theme.spacing(5)} 0px ${alpha(
      theme.palette.accent.blue,
      0.3,
    )}`,
  },

  "&:active": {
    transform: "translateY(0) scale(0.98)",
  },

  "&:focus-visible": {
    outline: `${theme.spacing(0.75)} solid ${alpha(
      theme.palette.primary.main,
      0.4,
    )}`,
    outlineOffset: theme.spacing(0.5),
  },
}));
