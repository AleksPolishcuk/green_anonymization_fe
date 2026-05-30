import { useTranslation } from "react-i18next";

import type { DashboardPeriod } from "store/types/dashboard";

export const usePeriodSubtitle = (period: DashboardPeriod): string => {
  const { t } = useTranslation();

  if (period.type === "preset") {
    return t("dashboard.charts.recentActivity.subtitleDays", {
      days: period.days,
    });
  }

  return t("dashboard.charts.recentActivity.subtitleRange", {
    from: period.from,
    to: period.to,
  });
};
