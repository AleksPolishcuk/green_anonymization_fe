import { styled } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";

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
  border: `1px solid ${theme.palette.background.softGray}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),

  opacity: 0,
  animation: "fadeSlideIn 0.6s ease forwards",

  "@keyframes fadeSlideIn": {
    from: { opacity: 0, transform: "translateY(24px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
}));

export const EmailIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(10),
  height: theme.spacing(10),
  borderRadius: theme.spacing(3),
  backgroundColor: theme.palette.color.lightBlue,
  color: theme.palette.color.blue,
}));

export const EmailLabel = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSize18,
}));

export const EmailAddress = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.color.grayDark,
}));

export const FormCard = styled("div")(({ theme }) => ({
  padding: theme.spacing(8),
  border: `1px solid ${theme.palette.background.softGray}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,

  opacity: 0,
  animation: "fadeSlideIn 0.6s ease 0.2s forwards",
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
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightSemiBold,
  marginBottom: theme.spacing(1.5),
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.color.charcoal,
}));

export const PhoneInputWrapper = styled("div")(({ theme }) => ({
  position: "relative",

  "& .react-tel-input": {
    border: `1px solid ${theme.palette.background.mediumGray}`,
    borderRadius: "14px",
    backgroundColor: `${theme.palette.background.lightGray}`,

    "&:hover": {
      borderColor: theme.palette.background.mediumGray,
    },

    "&:focus-within": {
      borderColor: theme.palette.color.blue,
    },
  },

  "& .react-tel-input .form-control": {
    width: "100%",
    height: "50px",
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
    borderRight: `1px solid ${theme.palette.background.mediumGray}`,
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
      backgroundColor: `${theme.palette.background.lightGray}`,
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
  color: theme.palette.color.charcoal,
  border: `1px solid ${theme.palette.background.mediumGray}`,
  borderRadius: "14px",
  outline: "none",
  fontFamily: theme.typography.fontFamily,
  backgroundColor: theme.palette.background.lightGray,
  resize: "none",
  minHeight: "120px",
  maxHeight: "240px",
  overflowY: "auto",
  boxSizing: "border-box",

  "&::placeholder": {
    color: theme.palette.color.grayDark,
  },

  "&:hover": {
    borderColor: theme.palette.background.mediumGray,
  },

  "&:focus": {
    borderColor: theme.palette.color.blue,
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  gap: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "200px",
}));

export const FormResultContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(6),
  minHeight: theme.spacing(6),
  display: "flex",
  alignItems: "center",
}));

export const SendIconWrapper = styled("div")<{ $isSubmitting: boolean }>(
  ({ $isSubmitting }) => ({
    opacity: $isSubmitting ? 0 : 1,
    transition: "opacity 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
);

export const ErrorMessageContainer = styled("div")(({ theme }) => ({
  minHeight: theme.spacing(5),
  display: "flex",
  alignItems: "flex-start",
}));

export const ErrorMessage = styled("span")(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.accent.red,
  fontFamily: theme.typography.fontFamily,
  marginTop: theme.spacing(0.5),
  display: "block",
}));

export const FormAlert = styled("div")<{ $type: "error" | "success" }>(
  ({ theme, $type }) => ({
    width: "100%",
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(6),
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize14,
    backgroundColor:
      $type === "error"
        ? theme.palette.accent.lightRed
        : theme.palette.accent.lightGreen,
    color:
      $type === "error" ? theme.palette.accent.red : theme.palette.accent.green,
    border:
      $type === "error"
        ? `1px solid ${theme.palette.accent.red}20`
        : `1px solid ${theme.palette.accent.green}20`,
    boxSizing: "border-box",
  }),
);

export const FieldTextareaError = styled("textarea")<{ $hasError?: boolean }>(
  ({ theme, $hasError }) => ({
    width: "100%",
    padding: `${theme.spacing(3)} ${theme.spacing(3.5)}`,
    fontSize: theme.typography.fontSize14,
    color: theme.palette.color.charcoal,
    border: `1px solid ${$hasError ? theme.palette.accent.red : theme.palette.background.mediumGray}`,
    borderRadius: "14px",
    outline: "none",
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.background.lightGray,
    resize: "none",
    minHeight: "120px",
    maxHeight: "240px",
    overflowY: "auto",
    boxSizing: "border-box",

    "&::placeholder": {
      color: theme.palette.color.grayDark,
    },

    "&:hover": {
      borderColor: $hasError
        ? theme.palette.accent.red
        : theme.palette.background.mediumGray,
    },

    "&:focus": {
      borderColor: $hasError
        ? theme.palette.accent.red
        : theme.palette.color.blue,
    },
  }),
);

export const PhoneInputWrapperError = styled("div")<{ $hasError?: boolean }>(
  ({ theme, $hasError }) => ({
    position: "relative",

    "& .react-tel-input": {
      border: `1px solid ${$hasError ? theme.palette.accent.red : theme.palette.background.mediumGray}`,
      borderRadius: "14px",
      backgroundColor: `${theme.palette.background.lightGray}`,

      "&:hover": {
        borderColor: $hasError
          ? theme.palette.accent.red
          : theme.palette.background.mediumGray,
      },

      "&:focus-within": {
        borderColor: $hasError
          ? theme.palette.accent.red
          : theme.palette.color.blue,
      },
    },

    "& .react-tel-input .form-control": {
      width: "100%",
      height: "50px",
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
      borderRight: `1px solid ${$hasError ? theme.palette.accent.red : theme.palette.background.mediumGray}`,
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
        backgroundColor: `${theme.palette.background.lightGray}`,
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
  }),
);
