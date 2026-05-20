import type {
  CurrentSubscription,
  SubscriptionPlan,
} from "services/pricing/typing/pricing";

export interface PricingState {
  plans: SubscriptionPlan[];
  current: CurrentSubscription | null;
  plansLoading: boolean;
  currentLoading: boolean;
  selectLoading: boolean;
  error: string | null;
}
