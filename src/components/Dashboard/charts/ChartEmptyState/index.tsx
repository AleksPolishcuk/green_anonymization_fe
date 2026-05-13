import { useTranslation } from "react-i18next";

import {
  CHART_EMPTY_STATE_SPRITE_ID,
  CHART_EMPTY_STATE_VIEWBOX,
} from "constants/DashboardPage";
import { headerSpriteRef } from "constants/MainPages";

import {
  EmptyIconSvg,
  EmptyStateRoot,
  EmptyStateText,
} from "components/Dashboard/charts/ChartEmptyState/styles";

export const ChartEmptyState = () => {
  const { t } = useTranslation();

  return (
    <EmptyStateRoot>
      <EmptyIconSvg viewBox={CHART_EMPTY_STATE_VIEWBOX} aria-hidden>
        <use href={headerSpriteRef(CHART_EMPTY_STATE_SPRITE_ID)} />
      </EmptyIconSvg>
      <EmptyStateText>{t("dashboard.charts.emptyState")}</EmptyStateText>
    </EmptyStateRoot>
  );
};
