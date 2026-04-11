import { Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { readyToProtectColors } from "shared/constants/readyToProtect";
import { theme } from "shared/theme/theme";

export const Section = styled("section")({
  padding: theme.spacing(20, 0),
});

export const ReadyToProtectContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "0 68px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "0 144px",
  },
}));

export const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  borderRadius: 24,
  background: readyToProtectColors.backgroundGradient,
  padding: `64px 32px`,

  [theme.breakpoints.up("md")]: {
    padding: `72px 48px`,
  },

  [theme.breakpoints.up("lg")]: {
    padding: `80px 27px`,
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  margin: 0,
  color: theme.palette.color.white,
}));

export const Description = styled(Typography)(({ theme }) => ({
  marginTop: `16px`,
  maxWidth: 540,
  color: theme.palette.color.white,
}));

export const Actions = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: 16,
  marginTop: 40,
  width: "100%",

  [theme.breakpoints.up("md")]: {
    width: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  padding: "14px 66px",
  backgroundColor: theme.palette.color.white,
  color: theme.palette.primary.main,
  boxShadow: "none",

  "&:hover": {
    backgroundColor: theme.palette.color.lightBlue,
    boxShadow: "none",
  },
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  padding: "14px 28px",
  color: theme.palette.color.white,
  backgroundColor: readyToProtectColors.secondaryButtonBackground,
  backdropFilter: readyToProtectColors.secondaryButtonBackdropFilter,

  "&:hover": {
    borderColor: theme.palette.color.white,
  },
}));
