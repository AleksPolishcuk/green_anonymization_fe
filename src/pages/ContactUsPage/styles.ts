import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const PageSection = styled("section")(({ theme }) => ({
  padding: theme.spacing(20, 0),
  marginBottom: theme.spacing(20),
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(10, 0),
    marginBottom: theme.spacing(10),
  },
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: "16px",
}));

export const PageSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(10),
  maxWidth: "480px",
}));
