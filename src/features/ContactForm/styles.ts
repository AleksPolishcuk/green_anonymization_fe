import { styled } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";

import {
  CARD_BORDER_COLOR,
  CONTACT_DIAL_CODE_OFFSET,
  CONTACT_FIELD_GAP,
  CONTACT_FIELD_HEIGHT,
  CONTACT_INPUT_BORDER_RADIUS,
  CONTACT_MESSAGE_MIN_HEIGHT,
  CONTACT_TITLE_FONT_SIZE,
  FONT_WEIGHT,
} from "constants";

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
  fontWeight: FONT_WEIGHT.bold,
  fontSize: theme.typography.body1.fontSize,
}));

export const EmailAddress = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
}));

export const FormCard = styled("div")(({ theme }) => ({
  padding: theme.spacing(8),
  border: `1px solid ${CARD_BORDER_COLOR}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  fontWeight: FONT_WEIGHT.semiBold,
  fontSize: CONTACT_TITLE_FONT_SIZE,
  marginBottom: theme.spacing(6),
}));

export const FormGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: CONTACT_FIELD_GAP,

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
  fontWeight: FONT_WEIGHT.semiBold,
  marginBottom: theme.spacing(1.5),
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.primary,
}));

export const PhoneInputWrapper = styled("div")(({ theme }) => ({
  position: "relative",

  "& .react-tel-input .form-control": {
    width: "100%",
    height: CONTACT_FIELD_HEIGHT,
    fontSize: theme.typography.h6.fontSize,
    borderRadius: CONTACT_INPUT_BORDER_RADIUS,
    border: `1px solid ${CARD_BORDER_COLOR}`,
    fontFamily: theme.typography.fontFamily,
    paddingLeft: "72px",
  },
  "& .react-tel-input .flag-dropdown": {
    width: "68px",
    borderRadius: `${CONTACT_INPUT_BORDER_RADIUS} 0 0 ${CONTACT_INPUT_BORDER_RADIUS}`,
    border: `1px solid ${CARD_BORDER_COLOR}`,
    backgroundColor: "transparent",
  },
  "& .react-tel-input .selected-flag": {
    width: "68px",
    borderRadius: `${CONTACT_INPUT_BORDER_RADIUS} 0 0 ${CONTACT_INPUT_BORDER_RADIUS}`,
    fontFamily: theme.typography.fontFamily,
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
  left: CONTACT_DIAL_CODE_OFFSET,
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: theme.typography.h6.fontSize,
  fontFamily: theme.typography.fontFamily,
  pointerEvents: "none",
  zIndex: 2,
}));

export const FieldTextarea = styled("textarea")(({ theme }) => ({
  width: "100%",
  padding: `${theme.spacing(3)} ${theme.spacing(3.5)}`,
  fontSize: theme.typography.h6.fontSize,
  color: theme.palette.text.primary,
  border: `1px solid ${CARD_BORDER_COLOR}`,
  borderRadius: CONTACT_INPUT_BORDER_RADIUS,
  outline: "none",
  fontFamily: theme.typography.fontFamily,
  backgroundColor: theme.palette.background.paper,
  resize: "vertical",
  minHeight: CONTACT_MESSAGE_MIN_HEIGHT,

  "&::placeholder": {
    color: theme.palette.text.secondary,
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
