import { createSlice } from "@reduxjs/toolkit";

import { DASHBOARD_MOCK } from "components/Dashboard/mocks/dashboardMock";
import type { DashboardState } from "components/Dashboard/types";

const initialState: DashboardState = {
  data: DASHBOARD_MOCK,
  loading: false,
  error: null,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;
