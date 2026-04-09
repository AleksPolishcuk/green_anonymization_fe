import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

export const PageSection = styled("section")(({ theme }) => ({
  padding: theme.spacing(20, 0),
  marginBottom: theme.spacing(20),
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(10, 0),
    marginBottom: theme.spacing(10),
  },
}));

export const ContactContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    paddingLeft: 68,
    paddingRight: 68,
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 144,
    paddingRight: 144,
  },
}));

export const PageTitle = styled(Typography)(() => ({
  marginBottom: "16px",
}));

export const PageSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(10),
  maxWidth: "480px",
}));
