import { useTranslation } from "react-i18next";

import {
  CardAccentLine,
  CardBadge,
  CardEntityCount,
  CardTitle,
  CardWrapper,
} from "./styles";
import type { ComplianceCard } from "./types";

type ComplianceCardItemProps = {
  card: ComplianceCard;
};

export const ComplianceCardItem = ({ card }: ComplianceCardItemProps) => {
  const { t } = useTranslation();

  return (
    <CardWrapper className="reveal-card">
      <CardAccentLine $color={card.accentColor} />
      <CardBadge $color={card.accentColor}>
        {t(`complianceSection.cards.${card.id}.badge`)}
      </CardBadge>
      <CardTitle>{t(`complianceSection.cards.${card.id}.title`)}</CardTitle>
      <CardEntityCount>
        {t("complianceSection.entityTypes", { count: card.entityCount })}
      </CardEntityCount>
    </CardWrapper>
  );
};
