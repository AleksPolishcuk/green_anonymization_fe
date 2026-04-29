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
  $revealed: boolean;
  $index: number;
};

export const ComplianceCardItem = ({
  card,
  $revealed,
  $index,
}: ComplianceCardItemProps) => {
  const { t } = useTranslation();

  return (
    <CardWrapper $revealed={$revealed} $index={$index}>
      <CardAccentLine $accentKey={card.accentKey} />
      <CardBadge $accentKey={card.accentKey}>
        {t(`complianceSection.cards.${card.id}.badge`)}
      </CardBadge>
      <CardTitle>{t(`complianceSection.cards.${card.id}.title`)}</CardTitle>
      <CardEntityCount>
        {t("complianceSection.entityTypes", { count: card.entityCount })}
      </CardEntityCount>
    </CardWrapper>
  );
};
