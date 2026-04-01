import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

export const CapabilitiesSection = styled("section")({
  backgroundColor: "#f8fafc",
  padding: "80px 0",
  width: "100%",
});

export const SectionContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    paddingLeft: "68px",
    paddingRight: "68px",
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: "144px",
    paddingRight: "144px",
  },
}));

export const TitleSectionBlock = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  maxWidth: "760px",
  margin: "0 auto 64px auto",
});

export const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  letterSpacing: "0.05em",
  marginBottom: "16px",
  textTransform: "uppercase",
}));

export const CardsList = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const CardItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.02)",
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  width: "44px",
  height: "44px",
  borderRadius: "8px",
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
  "& svg": {
    width: "20px",
    height: "20px",
    fill: "currentColor",
  },
}));
