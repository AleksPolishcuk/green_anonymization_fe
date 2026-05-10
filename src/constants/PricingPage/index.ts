export const PRICING_CTA_ROUTE = "/sign-in";

export const PRICING_FREE_PRICE = "$0";
export const PRICING_PRO_PRICE = "$49";

export const PRICING_FEATURE_KEYS = {
  upTo5Docs: "upTo5Docs",
  automatedPii: "automatedPii",
  standardDeid: "standardDeid",
  basicReport: "basicReport",
  unlimitedDocs: "unlimitedDocs",
  advancedDeid: "advancedDeid",
  customRules: "customRules",
  batchProcessing: "batchProcessing",
  auditLogs: "auditLogs",
  prioritySupport: "prioritySupport",
} as const;

export type PricingFeatureKey =
  (typeof PRICING_FEATURE_KEYS)[keyof typeof PRICING_FEATURE_KEYS];

type PricingFeature = {
  key: PricingFeatureKey;
  enabled: boolean;
};

type PricingPlan = {
  id: string;
  price: string;
  isPopular: boolean;
  features: PricingFeature[];
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    price: PRICING_FREE_PRICE,
    isPopular: false,
    features: [
      { key: PRICING_FEATURE_KEYS.upTo5Docs, enabled: true },
      { key: PRICING_FEATURE_KEYS.automatedPii, enabled: true },
      { key: PRICING_FEATURE_KEYS.standardDeid, enabled: true },
      { key: PRICING_FEATURE_KEYS.basicReport, enabled: true },
      { key: PRICING_FEATURE_KEYS.unlimitedDocs, enabled: false },
      { key: PRICING_FEATURE_KEYS.advancedDeid, enabled: false },
      { key: PRICING_FEATURE_KEYS.customRules, enabled: false },
      { key: PRICING_FEATURE_KEYS.batchProcessing, enabled: false },
      { key: PRICING_FEATURE_KEYS.auditLogs, enabled: false },
      { key: PRICING_FEATURE_KEYS.prioritySupport, enabled: false },
    ],
  },
  {
    id: "pro",
    price: PRICING_PRO_PRICE,
    isPopular: true,
    features: [
      { key: PRICING_FEATURE_KEYS.unlimitedDocs, enabled: true },
      { key: PRICING_FEATURE_KEYS.automatedPii, enabled: true },
      { key: PRICING_FEATURE_KEYS.advancedDeid, enabled: true },
      { key: PRICING_FEATURE_KEYS.customRules, enabled: true },
      { key: PRICING_FEATURE_KEYS.batchProcessing, enabled: true },
      { key: PRICING_FEATURE_KEYS.auditLogs, enabled: true },
      { key: PRICING_FEATURE_KEYS.prioritySupport, enabled: true },
    ],
  },
];
