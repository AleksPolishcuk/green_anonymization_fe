import { styled } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";

import { CARD_BORDER_COLOR } from "constants";

export const ContactLayout = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "280px 1fr",
  gap: theme.spacing(6),
  alignItems: "start",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const EmailCard = styled("div")(({ theme }) => ({
  padding: theme.spacing(6),
  border: `1px solid ${CARD_BORDER_COLOR}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));

export const EmailIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(10),
  height: theme.spacing(10),
  borderRadius: theme.spacing(3),
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
}));

export const EmailLabel = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSize18,
}));

export const EmailAddress = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,
}));

export const FormCard = styled("div")(({ theme }) => ({
  padding: theme.spacing(8),
  border: `1px solid ${CARD_BORDER_COLOR}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

export const FormTitle = styled("h3")(({ theme }) => ({
  fontFamily: theme.typography.h3.fontFamily,
  fontSize: theme.typography.h3.fontSize,
  fontWeight: theme.typography.h3.fontWeight,
  marginBottom: theme.spacing(6),
}));

export const FormGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const FormField = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(4),
}));

export const FieldLabel = styled("span")(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.h6.fontWeight,
  marginBottom: theme.spacing(1.5),
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.primary,
}));

export const PhoneInputWrapper = styled("div")(({ theme }) => ({
  position: "relative",

  "& .react-tel-input": {
    border: `1px solid ${CARD_BORDER_COLOR}`,
    borderRadius: "14px",
    backgroundColor: theme.palette.background.input,

    "&:hover": {
      borderColor: theme.palette.text.primary,
    },

    "&:focus-within": {
      borderColor: theme.palette.primary.main,
    },
  },

  "& .react-tel-input .form-control": {
    width: "100%",
    height: theme.inputHeight,
    fontSize: theme.typography.fontSize14,
    borderRadius: "14px",
    border: "none",
    outline: "none",
    fontFamily: theme.typography.fontFamily,
    paddingLeft: "72px",
    backgroundColor: "transparent",
    boxShadow: "none",

    "&:focus": {
      boxShadow: "none",
      outline: "none",
    },
  },

  "& .react-tel-input .flag-dropdown": {
    width: "68px",
    borderRadius: "14px 0 0 14px",
    border: "none",
    borderRight: `1px solid ${CARD_BORDER_COLOR}`,
    backgroundColor: "transparent",

    "&:hover, &.open": {
      backgroundColor: "transparent",
    },
  },

  "& .react-tel-input .flag-dropdown .selected-flag:hover, & .react-tel-input .flag-dropdown .selected-flag:focus":
    {
      backgroundColor: "transparent",
    },
  "& .react-tel-input .selected-flag": {
    width: "68px",
    borderRadius: "14px 0 0 14px",
    fontFamily: theme.typography.fontFamily,

    "&.open": {
      borderRadius: "14px 0 0 14px !important",
    },
  },
  "& .react-tel-input .flag": {
    backgroundImage: "none !important",
    width: "0 !important",
    height: "0 !important",
    margin: "0 !important",
  },
  "& .react-tel-input .arrow": {
    marginLeft: "15px",
  },
}));

export const DialCodeOverlay = styled("span")(({ theme }) => ({
  position: "absolute",
  left: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: theme.typography.fontSize14,
  fontFamily: theme.typography.fontFamily,
  pointerEvents: "none",
  zIndex: 2,
}));

export const FieldTextarea = styled("textarea")(({ theme }) => ({
  width: "100%",
  padding: `${theme.spacing(3)} ${theme.spacing(3.5)}`,
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.primary,
  border: `1px solid ${CARD_BORDER_COLOR}`,
  borderRadius: "14px",
  outline: "none",
  fontFamily: theme.typography.fontFamily,
  backgroundColor: theme.palette.background.input,
  resize: "none",
  minHeight: "120px",
  maxHeight: "240px",
  overflowY: "auto",
  boxSizing: "border-box",

  "&::placeholder": {
    color: theme.palette.text.secondary,
  },

  "&:hover": {
    borderColor: theme.palette.text.primary,
  },

  "&:focus": {
    borderColor: theme.palette.primary.main,
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  gap: theme.spacing(2),
}));
