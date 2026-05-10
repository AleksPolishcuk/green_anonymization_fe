import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const PricingPageSection = styled("section")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(20),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
}));

export const PricingShieldBackground = styled("div")({
  position: "absolute",
  inset: 0,
  backgroundImage: "url('/img/hero/shield.webp')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "78% center",
  backgroundSize: "44%",
  opacity: 0.07,
  pointerEvents: "none",
});

export const PricingPageContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: theme.spacing(16),
    paddingRight: theme.spacing(16),
  },
}));

export const PricingPageTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(4),
}));

export const PricingPageSubtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(14),
  maxWidth: 560,
}));
