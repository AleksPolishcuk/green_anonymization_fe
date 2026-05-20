import { useAppSelector } from "store/hooks";
import { FEATURE_KEYS, type FeatureKey } from "services/pricing/typing/pricing";

export interface FeatureAccess {
  hasCustomRules: boolean;
  hasSyntheticData: boolean;
}

const hasFeature = (features: FeatureKey[], key: FeatureKey): boolean =>
  features.includes(key);

export function useFeatureAccess(): FeatureAccess {
  const features = useAppSelector(
    (s) => s.pricing.current?.plan.features ?? [],
  );

  return {
    hasCustomRules: hasFeature(features, FEATURE_KEYS.customRules),
    hasSyntheticData: hasFeature(features, FEATURE_KEYS.syntheticData),
  };
}
