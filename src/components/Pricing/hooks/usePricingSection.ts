import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  fetchCurrentSubscription,
  fetchPlans,
} from "store/slices/pricingSlice";

export function usePricingSection() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth?.user);

  useEffect(() => {
    dispatch(fetchPlans());
    if (user) {
      dispatch(fetchCurrentSubscription());
    }
  }, [dispatch, user]);
}
