import { useTranslation } from "react-i18next";

import {
  STAT_CARD_CALENDAR_SPRITE_ID,
  STAT_CARD_IDS,
  STAT_CARD_SPRITE_IDS,
  STAT_CARD_TREND_DOWN_SPRITE_ID,
  STAT_CARD_TREND_UP_SPRITE_ID,
} from "constants/DashboardPage";
import { headerSpriteRef } from "constants/MainPages";
import type { StatCardData, StatCardIconId } from "store/types/dashboard";

import {
  CalendarIcon,
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

const STAT_CARD_LABEL_KEYS: Record<string, string> = {
  [STAT_CARD_IDS.totalDocs]: "dashboard.statCards.totalDocuments",
  [STAT_CARD_IDS.entities]: "dashboard.statCards.entitiesDetected",
  [STAT_CARD_IDS.avgEntities]: "dashboard.statCards.avgEntitiesPerDoc",
  [STAT_CARD_IDS.successRate]: "dashboard.statCards.successRate",
};

const StatSpriteIcon = ({ iconId }: { iconId: StatCardIconId }) => {
  const symbolId = STAT_CARD_SPRITE_IDS[iconId];
  return (
    <CardSpriteIcon viewBox="0 0 32 32" aria-hidden>
      <use href={headerSpriteRef(symbolId)} />
    </CardSpriteIcon>
  );
};

type StatCardProps = {
  card: StatCardData;
};

const StatCard = ({ card }: StatCardProps) => {
  const { t } = useTranslation();
  const label = t(STAT_CARD_LABEL_KEYS[card.id] ?? "");

  const isNegative = card.trend !== null && card.trend < 0;
  const spriteId = isNegative
    ? STAT_CARD_TREND_DOWN_SPRITE_ID
    : STAT_CARD_TREND_UP_SPRITE_ID;

  return (
    <Card>
      <CardTopRow>
        <CardLabel>{label}</CardLabel>
        <CardIconWrapper>
          <StatSpriteIcon iconId={card.iconId} />
        </CardIconWrapper>
      </CardTopRow>

      <CardValue>{card.value}</CardValue>

      <TrendRow>
        {card.trend === null ? (
          <>
            <CalendarIcon viewBox="0 0 16 16" aria-hidden>
              <use href={headerSpriteRef(STAT_CARD_CALENDAR_SPRITE_ID)} />
            </CalendarIcon>
            <TrendSuffix>{t("dashboard.statCards.thisMonth")}</TrendSuffix>
          </>
        ) : (
          <>
            <TrendArrowIcon
              viewBox="0 0 16 16"
              aria-hidden
              $negative={isNegative}
            >
              <use href={headerSpriteRef(spriteId)} />
            </TrendArrowIcon>
            <TrendPercent $negative={isNegative}>
              {Math.abs(Math.round(card.trend))}%
            </TrendPercent>
            <TrendSuffix>{t("dashboard.statCards.vsLastMonth")}</TrendSuffix>
          </>
        )}
      </TrendRow>
    </Card>
  );
};

type StatCardsProps = {
  data: StatCardData[];
};

export const StatCards = ({ data }: StatCardsProps) => (
  <CardsGrid>
    {data.map((card) => (
      <StatCard key={card.id} card={card} />
    ))}
  </CardsGrid>
);
