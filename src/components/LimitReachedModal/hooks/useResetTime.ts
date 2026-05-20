import { useTranslation } from "react-i18next";

import { DEFAULT_DAILY_LIMIT } from "constants/PricingPage";
import { useAppSelector } from "store/hooks";

export function useLimitInfo() {
  const { t } = useTranslation();
  const dailyLimit = useAppSelector(
    (state) => state.pricing.current?.dailyLimit ?? DEFAULT_DAILY_LIMIT,
  );

  return {
    resetTimeLabel: t("limitReached.resetFallback"),
    dailyLimit,
  };
}
