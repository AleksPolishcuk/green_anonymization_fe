import { Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  readyToProtectColors,
  readyToProtectDarkColors,
} from "constants/MainPages";

export const Section = styled("section")(({ theme }) => ({
  padding: theme.spacing(20, 0),
  backgroundColor: theme.palette.subtle.bg,
}));

export const ReadyToProtectContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(17),
    paddingRight: theme.spacing(17),
  },

  [theme.breakpoints.up("lg")]: {
    paddingLeft: theme.spacing(36),
    paddingRight: theme.spacing(36),
  },
}));

export const Wrapper = styled("div")(({ theme }) => {
  const colors =
    theme.palette.mode === "dark"
      ? readyToProtectDarkColors
      : readyToProtectColors;

  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",

    borderRadius: theme.spacing(4.5),
    background: colors.backgroundGradient,
    padding: theme.spacing(8, 4),
    boxShadow: colors.wrapperShadow,

    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(9, 6),
    },

    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(10, 3.5),
    },
  };
});

export const Title = styled(Typography)(({ theme }) => ({
  margin: 0,
  color: theme.palette.common.white,
}));

export const Description = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4),
  maxWidth: 540,
  color: theme.palette.common.white,
}));

export const Actions = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: theme.spacing(2),
  marginTop: theme.spacing(10),
  width: "100%",

  [theme.breakpoints.up("md")]: {
    width: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const PrimaryButton = styled(Button)(({ theme }) => {
  const colors =
    theme.palette.mode === "dark"
      ? readyToProtectDarkColors
      : readyToProtectColors;

  return {
    padding: theme.spacing(3.5, 16.5),
    borderRadius: theme.spacing(3),

    backgroundColor: colors.primaryButtonBackground,
    color: theme.palette.primary.main,
    boxShadow: "none",
    backdropFilter: colors.primaryButtonBackdropFilter,

    transition:
      "background-color 0.25s ease, transform 0.25s ease, border-color 0.25s ease",

    "&:hover": {
      backgroundColor: colors.primaryButtonHoverBackground,
      transform: colors.buttonHoverTransform,
    },
  };
});

export const SecondaryButton = styled(Button)(({ theme }) => {
  const colors =
    theme.palette.mode === "dark"
      ? readyToProtectDarkColors
      : readyToProtectColors;

  return {
    padding: theme.spacing(3.5, 7),
    borderRadius: theme.spacing(3),

    color: theme.palette.common.white,
    backgroundColor: colors.secondaryButtonBackground,
    backdropFilter: colors.secondaryButtonBackdropFilter,
    border: `1px solid ${colors.secondaryButtonBorder}`,

    transition:
      "background-color 0.25s ease, transform 0.25s ease, border-color 0.25s ease",

    "&:hover": {
      backgroundColor: colors.secondaryButtonHoverBackground,
      borderColor: colors.secondaryButtonHoverBorder,
      transform: colors.buttonHoverTransform,
    },
  };
});
