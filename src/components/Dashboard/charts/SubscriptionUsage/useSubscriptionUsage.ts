import { useEffect } from "react";

import {
  FREE_PLAN_NAME,
  UNLIMITED_LABEL,
  USAGE_WARN_THRESHOLD,
} from "constants/PricingPage";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchCurrentSubscription } from "store/slices/pricingSlice";

export function useSubscriptionUsage() {
  const dispatch = useAppDispatch();
  const { current } = useAppSelector((state) => state.pricing);
  const user = useAppSelector((state) => state.auth?.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchCurrentSubscription());
    }
  }, [dispatch, user]);

  if (!current) return null;

  const { usedToday, dailyLimit, plan } = current;
  const isUnlimited = dailyLimit === null;
  const progress = isUnlimited ? 0 : (usedToday / dailyLimit!) * 100;
  const isWarn = !isUnlimited && progress >= USAGE_WARN_THRESHOLD * 100;
  const limitLabel = isUnlimited ? UNLIMITED_LABEL : String(dailyLimit);
  const isFreePlan = plan.name === FREE_PLAN_NAME;

  return { usedToday, limitLabel, isUnlimited, progress, isWarn, isFreePlan };
}
