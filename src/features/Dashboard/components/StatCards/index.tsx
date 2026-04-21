import { useTranslation } from "react-i18next";

import { headerSpriteRef } from "constants/header";
import {
  STAT_CARD_SPRITE_IDS,
  STAT_CARD_TREND_ARROW_SPRITE_ID,
} from "constants/dashboard";
import type { StatCardData, StatCardIconId } from "features/Dashboard/types";

import {
  Card,
  CardIconWrapper,
  CardLabel,
  CardsGrid,
  CardSpriteIcon,
  CardTopRow,
  CardValue,
  TrendArrowIcon,
  TrendPercent,
  TrendRow,
  TrendSuffix,
} from "./styles";

const StatSpriteIcon = ({ iconId }: { iconId: StatCardIconId }) => {
  const symbolId = STAT_CARD_SPRITE_IDS[iconId];
  return (
    <CardSpriteIcon viewBox="0 0 32 32" aria-hidden>
      <use href={headerSpriteRef(symbolId)} />
    </CardSpriteIcon>
  );
};

type StatCardProps = {
  card: StatCardData & { label: string };
};

const StatCard = ({ card }: StatCardProps) => {
  const { t } = useTranslation("dashboard");

  return (
    <Card>
      <CardTopRow>
        <CardLabel>{card.label}</CardLabel>
        <CardIconWrapper>
          <StatSpriteIcon iconId={card.iconId} />
        </CardIconWrapper>
      </CardTopRow>

      <CardValue>{card.value}</CardValue>

      <TrendRow>
        <TrendArrowIcon viewBox="0 0 32 32" aria-hidden>
          <use href={headerSpriteRef(STAT_CARD_TREND_ARROW_SPRITE_ID)} />
        </TrendArrowIcon>
        <TrendPercent>{card.trendPercent}</TrendPercent>
        <TrendSuffix>{t("statCards.vsLastMonth")}</TrendSuffix>
      </TrendRow>
    </Card>
  );
};

type StatCardsProps = {
  data: StatCardData[];
};

export const StatCards = ({ data }: StatCardsProps) => {
  const { t } = useTranslation("dashboard");

  const labelKeys: Record<string, string> = {
    "total-docs": t("statCards.totalDocuments"),
    entities: t("statCards.entitiesDetected"),
    "avg-entities": t("statCards.avgEntitiesPerDoc"),
    "success-rate": t("statCards.successRate"),
  };

  const cards = data.map((card) => ({
    ...card,
    label: labelKeys[card.id] ?? card.label,
  }));

  return (
    <CardsGrid>
      {cards.map((card) => (
        <StatCard key={card.id} card={card} />
      ))}
    </CardsGrid>
  );
};
