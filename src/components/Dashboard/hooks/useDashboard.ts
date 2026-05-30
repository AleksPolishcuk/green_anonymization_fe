import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchDashboard } from "store/slices/dashboardSlice";

export const useDashboard = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error, period } = useAppSelector(
    (state) => state.dashboard,
  );

  const isInitialLoad = loading && data.statCards.length === 0;

  useEffect(() => {
    dispatch(fetchDashboard(period));
  }, [dispatch, period]);

  return { data, loading, error, period, isInitialLoad };
};
