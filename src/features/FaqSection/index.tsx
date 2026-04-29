import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "assets/icons/ChevronDownIcon";

import { useFaqSection } from "./useFaqSection";
import {
  FaqAccordion,
  FaqAccordionWrapper,
  FaqAnswer,
  FaqDetails,
  FaqQuestion,
  FaqSummary,
  SectionTitle,
  SectionWrapper,
  FaqContainer,
} from "./styles";

export const FaqSection = () => {
  const { t } = useTranslation();
  const { items, expandedId, onToggle } = useFaqSection();

  return (
    <SectionWrapper>
      <FaqContainer>
        <SectionTitle variant="h3">{t("faqSection.title")}</SectionTitle>
        {items.map((item) => (
          <FaqAccordionWrapper key={item.id}>
            <FaqAccordion
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
          </FaqAccordionWrapper>
        ))}
      </FaqContainer>
    </SectionWrapper>
  );
};
