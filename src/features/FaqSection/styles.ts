import { styled } from "@mui/material/styles";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import { CARD_BORDER_COLOR, FAQ_ITEM_HEIGHT, FONT_WEIGHT } from "constants";

export const SectionWrapper = styled("section")(({ theme }) => ({
  marginTop: theme.spacing(20),
  padding: theme.spacing(20, 0),
  backgroundColor: theme.palette.subtle?.bg ?? theme.palette.background.default,
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: FONT_WEIGHT.bold,
  textAlign: "center",
  marginBottom: theme.spacing(12),
}));

export const FaqAccordion = styled(Accordion)(({ theme }) => ({
  border: `1px solid ${CARD_BORDER_COLOR}`,
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
  minHeight: FAQ_ITEM_HEIGHT,

  "& .MuiAccordionSummary-content": {
    margin: `${theme.spacing(4)} 0`,
  },

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    color: theme.palette.primary.main,
  },
}));

export const FaqQuestion = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: FONT_WEIGHT.semiBold,
  color: theme.palette.text.primary,
}));

export const FaqDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0, 6, 5),
}));

export const FaqAnswer = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
}));
