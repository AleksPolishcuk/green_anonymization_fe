import { keyframes, styled, TextField } from "@mui/material";

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

export const FormInputField = styled(TextField)(({ theme }) => ({
  width: "100%",
  maxWidth: theme.typography.pxToRem(448),
  marginBottom: theme.spacing(5),

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },

  "& .MuiOutlinedInput-root": {
    height: 50,
    borderRadius: theme.shape.borderRadius,
    paddingLeft: theme.spacing(4),

    transition: `box-shadow 160ms ease, background-color 160ms ease`,

    "& fieldset": {
      borderColor: theme.palette.divider,
      transition: `border-color 160ms ease`,
    },

    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },

    "&.Mui-focused": {
      boxShadow: "0 0 0 4px rgba(59,130,246,0.15)",
    },

    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },

    "& input:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 100px ${theme.palette.color.lightBlue} inset !important`,
      WebkitTextFillColor: theme.palette.text.primary,
      transition: "background-color 9999s ease-out 0s",
    },
  },

  "& input": {
    padding: 0,
    transition: `background-color 200ms ease`,
  },

  "& input::placeholder": {
    color: theme.palette.background.mediumGray,
    opacity: 1,
  },
}));
