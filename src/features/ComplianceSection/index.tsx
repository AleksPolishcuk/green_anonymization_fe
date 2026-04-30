import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { useComplianceSection } from "./useComplianceSection";
import { ComplianceCardItem } from "./ComplianceCardItem";
import {
  CardsGrid,
  HeaderDescription,
  HeaderRight,
  HeaderRow,
  LabelText,
  SectionWrapper,
  ComplianceContainer,
} from "./styles";
import { useScrollReveal } from "shared/hooks/useScrollReveal";

export const ComplianceSection = () => {
  const { t } = useTranslation();
  const { cards } = useComplianceSection();
  const { ref: listRef, revealed, animDone } = useScrollReveal(cards.length);

  return (
    <SectionWrapper id="compliance">
      <ComplianceContainer>
        <HeaderRow>
          <div>
            <LabelText>{t("complianceSection.label")}</LabelText>
            <Typography variant="h3">{t("complianceSection.title")}</Typography>
          </div>
          <HeaderRight>
            <HeaderDescription variant="body1">
              {t("complianceSection.description")}
            </HeaderDescription>
          </HeaderRight>
        </HeaderRow>

        <CardsGrid ref={listRef}>
          {cards.map((card, index) => (
            <ComplianceCardItem
              key={card.id}
              card={card}
              $revealed={revealed}
              $animDone={animDone}
              $index={index}
            />
          ))}
        </CardsGrid>
      </ComplianceContainer>
    </SectionWrapper>
  );
};
