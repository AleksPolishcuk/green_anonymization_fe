import { createSlice } from "@reduxjs/toolkit";

import { DASHBOARD_MOCK } from "store/mocks/dashboardMock";
import type { DashboardState } from "store/types/dashboard";

const initialState: DashboardState = {
  data: {
    complianceFrameworks: DASHBOARD_MOCK.complianceFrameworks,
    confidenceScores: DASHBOARD_MOCK.confidenceScores,
    deIdMethods: DASHBOARD_MOCK.deIdMethods,
    entityTypes: DASHBOARD_MOCK.entityTypes,
    processingHistory: DASHBOARD_MOCK.processingHistory,
    recentActivity: DASHBOARD_MOCK.recentActivity,
    statCards: DASHBOARD_MOCK.statCards,
  },
  loading: false,
  error: null,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;
