import { apiClient } from "services/api/client";

import type {
  CurrentSubscription,
  SelectPlanRequest,
  SubscriptionPlan,
} from "./typing/pricing";

const PRICING_API = {
  plans: "/pricing/plans",
  current: "/pricing/current",
  select: "/pricing/select",
} as const;

export const pricingService = {
  async getPlans(): Promise<SubscriptionPlan[]> {
    return apiClient.get<SubscriptionPlan[]>(PRICING_API.plans);
  },

  async getCurrentSubscription(): Promise<CurrentSubscription> {
    return apiClient.get<CurrentSubscription>(PRICING_API.current);
  },

  async selectPlan(request: SelectPlanRequest): Promise<CurrentSubscription> {
    return apiClient.post<CurrentSubscription, SelectPlanRequest>(
      PRICING_API.select,
      request,
    );
  },
};
