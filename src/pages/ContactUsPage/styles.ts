import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

import { FONT_WEIGHT } from "constants";

export const PageSection = styled("section")(({ theme }) => ({
  padding: theme.spacing(20, 0),
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(10, 0),
  },
}));

export const PageTitle = styled(Typography)({
  fontWeight: FONT_WEIGHT.bold,
  marginBottom: "16px",
});

export const PageSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(10),
  maxWidth: "480px",
}));
