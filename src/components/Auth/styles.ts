import {
  alpha,
  Button,
  keyframes,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import {
  shieldGrowDuration,
  headingDelay,
  paragraphDelay,
} from "constants/auth";
import { cardShadows } from "constants/MainPages";
import staggerItem from "components/Auth/utils/staggerItem";
import { Link } from "react-router-dom";

export const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
  borderRadius: theme.spacing(4),

  background:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.color.grayDark, 0.12)
      : alpha(theme.palette.color.white, 0.15),

  border: `1px solid ${
    theme.palette.mode === "dark"
      ? alpha(theme.palette.primary.main, 0.22)
      : alpha(theme.palette.color.white, 0.2)
  }`,

  boxShadow:
    theme.palette.mode === "dark"
      ? `0px 8px 32px ${alpha(theme.palette.common.black, 0.24)}`
      : "none",
}));

export const WelcomeHeading = styled(Typography)(({ theme }) => ({
  ...staggerItem(headingDelay),

  margin: 0,
  fontFamily: theme.typography.headingFontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize32,
  lineHeight: theme.typography.lineHeight108,

  color:
    theme.palette.mode === "dark"
      ? theme.palette.text.primary
      : theme.palette.color.white,

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

  color: theme.palette.common.white,

  [theme.breakpoints.down("md")]: {
    maxWidth: theme.spacing(80.5),
    fontSize: theme.typography.fontSize14,
  },
}));

export const ShieldIcon = styled("svg")(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  display: "block",
  fill: "none",

  color: theme.palette.common.white,
}));

export const RightArrowIcon = styled("svg")(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
  display: "block",
  fill: "none",
  color: "currentColor",
}));

export const submitButtonStyles = {
  width: "100%",
  background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
  disabledBtnBorder: "2px solid rgba(37, 99, 235, 0.22)",
  disabledBtnBg: "rgba(37, 99, 235, 0.12)",
  insetBoxShadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.15)",
  boxShadowSize: "0px 4px 16px 0px",
  clickTransform: "translateY(0) scale(0.95)",
};

export const SubmitButton = styled(Button)(({ theme }) => ({
  width: submitButtonStyles.width,
  height: theme.spacing(13),
  padding: "0 24px",

  background: submitButtonStyles.background,

  color: theme.palette.common.white,
  border: "2px solid transparent",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,

  textTransform: "none",

  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSize16,
  lineHeight: theme.typography.lineHeight150,

  borderRadius: theme.shape.borderRadius,

  boxShadow: `
      ${submitButtonStyles.insetBoxShadow},
      ${submitButtonStyles.boxShadowSize} ${alpha(theme.palette.primary.main, theme.palette.mode === "dark" ? 0.5 : 0.35)}
    `,

  transition: theme.transitions.create(
    ["transform", "box-shadow", "background", "color", "border", "opacity"],
    {
      duration: 300,
      easing: theme.transitions.easing.easeInOut,
    },
  ),

  "&.MuiButton-root": {
    color: theme.palette.common.white,
  },

  "&:hover": {
    background: `linear-gradient(135deg, ${theme.palette.color.darkBlue} 0%, ${theme.palette.primary.main} 100%)`,
    transform: "translateY(-2px)",
    boxShadow: `
        ${submitButtonStyles.insetBoxShadow},
        ${submitButtonStyles.boxShadowSize} ${alpha(theme.palette.primary.main, theme.palette.mode === "dark" ? 0.58 : 0.4)}
      `,
  },

  "&.Mui-disabled": {
    cursor: "not-allowed",
    pointerEvents: "auto",

    background: submitButtonStyles.disabledBtnBg,
    color: theme.palette.color.grayDark,
    border: submitButtonStyles.disabledBtnBorder,
    fontWeight: theme.typography.fontWeightLight,
    boxShadow: "none",
  },

  "&:active": {
    transform: submitButtonStyles.clickTransform,
  },

  "&:focus-visible": {
    outline: `${theme.spacing(0.75)} solid ${alpha(
      theme.palette.primary.main,
      0.4,
    )}`,
    outlineOffset: theme.spacing(0.5),
  },
}));

export const FormInputField = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(5),

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },

  "& .MuiOutlinedInput-root": {
    height: 50,
    borderRadius: theme.shape.borderRadius,
    paddingLeft: theme.spacing(4),

    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.background.lightGray
        : theme.palette.background.paper,

    boxShadow:
      theme.palette.mode === "dark"
        ? `0px 4px 18px ${alpha(theme.palette.common.black, 0.18)}`
        : "none",

    transition: `box-shadow 160ms ease, background-color 160ms ease`,

    "& fieldset": {
      borderColor: theme.palette.divider,
      transition: `border-color 160ms ease`,
    },

    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },

    "&.Mui-focused": {
      boxShadow:
        theme.palette.mode === "dark" ? cardShadows.cardDark : cardShadows.card,
    },

    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },

    "& input:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 100px ${
        theme.palette.mode === "dark"
          ? theme.palette.background.lightGray
          : theme.palette.color.lightBlue
      } inset !important`,
      WebkitTextFillColor: theme.palette.text.primary,
      transition: "background-color 9999s ease-out 0s",
    },
  },

  "& input": {
    padding: 0,
    color: theme.palette.text.primary,
    transition: `background-color 200ms ease`,
  },

  "& .MuiFormHelperText-root.Mui-error": {
    color: theme.palette.error.main,
  },

  "& input::placeholder": {
    color: theme.palette.text.secondary,
    opacity: 1,
  },
}));

export const GoHomeButton = styled(Link)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(4),
  left: theme.spacing(4),
  zIndex: 10,

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  padding: theme.spacing(1, 1.5),

  textDecoration: "none",
  textTransform: "none",

  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeightMedium,

  borderRadius: theme.spacing(2),

  backgroundColor: "transparent",
  color: theme.palette.common.white,

  transition: theme.transitions.create(
    ["background-color", "border-color", "transform"],
    { duration: 180 },
  ),

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    transform: "translateY(-1px)",
  },
}));

export const HomeArrowIconWrapper = styled("svg")(({ theme }) => ({
  width: 13,
  height: 13,
  marginRight: theme.spacing(1.25),
  display: "block",
  fill: "none",
  color: "currentColor",
  transform: "scaleX(-1)",
}));
