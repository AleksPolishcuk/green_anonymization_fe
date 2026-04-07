import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import { ChevronDownIcon } from "assets/icons/ChevronDownIcon";

import { useFaqSection } from "./hooks/useFaqSection";
import {
  FaqAccordion,
  FaqAnswer,
  FaqDetails,
  FaqQuestion,
  FaqSummary,
  SectionTitle,
  SectionWrapper,
} from "./styles";

export const FaqSection = () => {
  const { t } = useTranslation();
  const { items, expandedId, onToggle } = useFaqSection();

  return (
    <SectionWrapper>
      <Container>
        <SectionTitle variant="h3">{t("faqSection.title")}</SectionTitle>
        {items.map((item) => (
          <FaqAccordion
            key={item.id}
            expanded={expandedId === item.id}
            onChange={() => onToggle(item.id)}
            disableGutters
          >
            <FaqSummary expandIcon={<ChevronDownIcon />}>
              <FaqQuestion>{item.question}</FaqQuestion>
            </FaqSummary>
            <FaqDetails>
              <FaqAnswer>{item.answer}</FaqAnswer>
            </FaqDetails>
          </FaqAccordion>
        ))}
      </Container>
    </SectionWrapper>
  );
};
