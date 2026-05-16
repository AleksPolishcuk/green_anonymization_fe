import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchCurrentSubscription } from "store/slices/pricingSlice";

export function useDailyLimitGuard() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.auth?.user);
  const subscription = useAppSelector((s) => s.pricing.current);

  useEffect(() => {
    if (user && subscription === null) {
      dispatch(fetchCurrentSubscription());
    }
  }, [dispatch, user, subscription]);

  const isDailyLimitReached = Boolean(
    subscription &&
    subscription.dailyLimit !== null &&
    subscription.usedToday >= subscription.dailyLimit,
  );

  return { isDailyLimitReached };
}
