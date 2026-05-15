import { apiClient } from "services/api/client";

import type {
  CurrentSubscription,
  SelectPlanRequest,
  SubscriptionPlan,
} from "./typing/pricing";

export const pricingService = {
  async getPlans(): Promise<SubscriptionPlan[]> {
    return apiClient.get<SubscriptionPlan[]>("/pricing/plans");
  },

  async getCurrentSubscription(): Promise<CurrentSubscription> {
    return apiClient.get<CurrentSubscription>("/pricing/current");
  },

  async selectPlan(request: SelectPlanRequest): Promise<CurrentSubscription> {
    return apiClient.post<CurrentSubscription, SelectPlanRequest>(
      "/pricing/select",
      request,
    );
  },
};
