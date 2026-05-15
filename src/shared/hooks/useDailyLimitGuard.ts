import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchCurrentSubscription } from "store/slices/pricingSlice";

export function useDailyLimitGuard() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.auth?.user);
  const current = useAppSelector((s) => s.pricing.current);

  useEffect(() => {
    if (user && current === null) {
      dispatch(fetchCurrentSubscription());
    }
  }, [dispatch, user, current]);

  const isDailyLimitReached = Boolean(
    current &&
    current.dailyLimit !== null &&
    current.usedToday >= current.dailyLimit,
  );

  return { isDailyLimitReached };
}
