import { apiClient } from "services/api/client";
import { ACTIVITY_LIMIT_MAX } from "constants/DashboardPage";
import type { DashboardPeriod } from "store/types/dashboard";

import type { DashboardDto } from "./typing/analytics";

const buildDashboardUrl = (period: DashboardPeriod): string => {
  const params = new URLSearchParams();

  if (period.type === "preset") {
    params.set("days", String(period.days));
  } else {
    params.set("from", period.from);
    params.set("to", period.to);
  }

  params.set("activityLimit", String(ACTIVITY_LIMIT_MAX));

  return `/analytics/dashboard?${params.toString()}`;
};

export const analyticsService = {
  async getDashboard(period: DashboardPeriod): Promise<DashboardDto> {
    return apiClient.get<DashboardDto>(buildDashboardUrl(period));
  },
};
