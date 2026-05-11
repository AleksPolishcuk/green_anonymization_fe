import { apiClient } from "services/api/client";

import type { DashboardDto } from "./typing/analytics";

export const analyticsService = {
  async getDashboard(): Promise<DashboardDto> {
    return apiClient.get<DashboardDto>("/analytics/dashboard");
  },
};
