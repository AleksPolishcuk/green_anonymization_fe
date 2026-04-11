import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "assets/icons/ChevronDownIcon";

import { useFaqSection } from "./useFaqSection";
import { useScrollReveal } from "./hooks/useScrollReveal";
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
  const containerRef = useScrollReveal();

  return (
    <SectionWrapper>
      <FaqContainer ref={containerRef}>
        <SectionTitle variant="h3">{t("faqSection.title")}</SectionTitle>
        {items.map((item) => (
          <FaqAccordionWrapper key={item.id} className="reveal-item">
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
