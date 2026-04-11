import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { useComplianceSection } from "./hooks/useComplianceSection";
import { ComplianceCardItem } from "./components/ComplianceCardItem";
import {
  CardsGrid,
  HeaderDescription,
  HeaderRight,
  HeaderRow,
  LabelText,
  SectionWrapper,
  ComplianceContainer,
} from "./styles";

export const ComplianceSection = () => {
  const { t } = useTranslation();
  const { cards } = useComplianceSection();

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

        <CardsGrid>
          {cards.map((card) => (
            <ComplianceCardItem key={card.id} card={card} />
          ))}
        </CardsGrid>
      </ComplianceContainer>
    </SectionWrapper>
  );
};
