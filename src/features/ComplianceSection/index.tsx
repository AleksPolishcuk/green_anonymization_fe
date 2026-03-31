import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { useComplianceSection } from "./hooks/useComplianceSection";
import {
  BannerDescription,
  BannerIconWrapper,
  BannerTextWrapper,
  BannerTitle,
  CardAccentLine,
  CardBadge,
  CardEntityCount,
  CardTitle,
  CardWrapper,
  CardsGrid,
  CustomBanner,
  HeaderDescription,
  HeaderRight,
  HeaderRow,
  LabelText,
  SectionWrapper,
} from "./styles";
import type { ComplianceCard } from "./types";

type ComplianceCardItemProps = {
  card: ComplianceCard;
};

const TaskIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ComplianceCardItem = ({ card }: ComplianceCardItemProps) => {
  const { t } = useTranslation();

  return (
    <CardWrapper>
      <CardAccentLine $color={card.accentColor} />
      <CardBadge $bg={card.badgeBg} $color={card.badgeColor}>
        {t(`complianceSection.cards.${card.id}.badge`)}
      </CardBadge>
      <CardTitle>{t(`complianceSection.cards.${card.id}.title`)}</CardTitle>
      <CardEntityCount>
        {t("complianceSection.entityTypes", { count: card.entityCount })}
      </CardEntityCount>
    </CardWrapper>
  );
};

export const ComplianceSection = () => {
  const { t } = useTranslation();
  const { cards } = useComplianceSection();

  return (
    <SectionWrapper>
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

      <CustomBanner>
        <BannerIconWrapper>
          <TaskIcon />
        </BannerIconWrapper>
        <BannerTextWrapper>
          <BannerTitle>
            {t("complianceSection.customProfile.title")}
          </BannerTitle>
          <BannerDescription>
            {t("complianceSection.customProfile.description")}
          </BannerDescription>
        </BannerTextWrapper>
      </CustomBanner>
    </SectionWrapper>
  );
};
