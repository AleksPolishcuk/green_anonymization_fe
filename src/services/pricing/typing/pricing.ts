export type PlanName = "Free" | "Pro";

export type SubscriptionStatus = "active" | "cancelled" | "expired";

export type FeatureKey =
  | "pii_detection"
  | "standard_deid"
  | "advanced_deid"
  | "custom_rules"
  | "basic_report"
  | "synthetic_data"
  | "priority_support";

export const FEATURE_KEYS = {
  piiDetection: "pii_detection",
  standardDeid: "standard_deid",
  advancedDeid: "advanced_deid",
  customRules: "custom_rules",
  basicReport: "basic_report",
  syntheticData: "synthetic_data",
  prioritySupport: "priority_support",
} as const satisfies Record<string, FeatureKey>;

export interface SubscriptionPlan {
  uuid: string;
  name: PlanName;
  priceCents: number;
  documentsPerDay: number | null;
  features: FeatureKey[];
}

export interface CurrentSubscription {
  status: SubscriptionStatus;
  expiresAt: string | null;
  plan: SubscriptionPlan;
  usedToday: number;
  dailyLimit: number | null;
  resetAt?: string | null;
}

export interface SelectPlanRequest {
  planId: string;
}
