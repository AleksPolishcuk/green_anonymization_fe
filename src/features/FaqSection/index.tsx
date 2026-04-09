import { useTranslation } from "react-i18next";
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
      </FaqContainer>
    </SectionWrapper>
  );
};
