import { styled } from "@mui/material/styles";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";

export const SectionWrapper = styled("section")(({ theme }) => ({
  marginTop: theme.spacing(20),
  padding: theme.spacing(20, 0),
  backgroundColor: theme.palette.subtle?.bg ?? theme.palette.background.default,
}));

export const FaqContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    paddingLeft: 68,
    paddingRight: 68,
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 144,
    paddingRight: 144,
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(12),
}));

export const FaqAccordionWrapper = styled("div")({
  opacity: 0,
  animation: "fadeSlideIn 0.5s ease forwards",

  "@keyframes fadeSlideIn": {
    from: { opacity: 0, transform: "translateY(16px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },

  "&:nth-of-type(1)": { animationDelay: "0s" },
  "&:nth-of-type(2)": { animationDelay: "0.15s" },
  "&:nth-of-type(3)": { animationDelay: "0.30s" },
  "&:nth-of-type(4)": { animationDelay: "0.45s" },
  "&:nth-of-type(5)": { animationDelay: "0.60s" },
  "&:nth-of-type(6)": { animationDelay: "0.75s" },
});

export const FaqAccordion = styled(Accordion)(({ theme }) => ({
  border: `1px solid ${theme.palette.background.lightGray}`,
  borderRadius: `${theme.shape.borderRadius}px !important`,
  boxShadow: "none",
  marginBottom: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,

  "&::before": {
    display: "none",
  },
}));

export const FaqSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: theme.spacing(0, 6),
  minHeight: "66px",

  "& .MuiAccordionSummary-content": {
    margin: `${theme.spacing(4)} 0`,
  },

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    color: theme.palette.color.blue,
  },
}));

export const FaqQuestion = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightSemiBold,
  color: theme.palette.color.charcoal,
}));

export const FaqDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0, 6, 5),
}));

export const FaqAnswer = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.grayDark,
}));
