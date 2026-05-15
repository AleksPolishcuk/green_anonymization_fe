export const PRICING_CTA_ROUTE = "/sign-in";
export const DAILY_LIMIT_REACHED_CODE = "DAILY_LIMIT_REACHED";
export const PRICING_ROUTE = "/pricing";
export const FREE_PLAN_ID = "free";
export const PRO_PLAN_ID = "pro";
export const FREE_PLAN_NAME = "Free";

export const UNLIMITED_LABEL = "∞";
export const USAGE_WARN_THRESHOLD = 0.8;

export const TIME_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
};

export const PRICING_SHIELD_OPACITY = 0.07;
export const PRICING_SHIELD_POSITION = "78% center";
export const PRICING_SHIELD_SIZE = "44%";
export const PRICING_SUBTITLE_MAX_WIDTH = 560;
export const PRICING_CARD_HOVER_SHADOW = "0 6px 14px 0 rgba(59, 130, 246, 0.3)";

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

export type PricingFeature = {
  key: PricingFeatureKey;
  enabled: boolean;
};

export type PricingPlan = {
  id: string;
  price: string;
  isPopular: boolean;
  features: PricingFeature[];
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: FREE_PLAN_ID,
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
    id: PRO_PLAN_ID,
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
