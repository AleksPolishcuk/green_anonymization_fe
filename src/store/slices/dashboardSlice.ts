import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import { DEFAULT_PERIOD_DAYS } from "constants/DashboardPage";
import type { DashboardPeriod, DashboardState } from "store/types/dashboard";
import { analyticsService } from "services/analytics";
import { mapDashboard } from "services/analytics/mapDashboard";

export const fetchDashboard = createAsyncThunk<
  ReturnType<typeof mapDashboard>,
  DashboardPeriod,
  { rejectValue: string }
>("dashboard/fetch", async (period, { rejectWithValue }) => {
  try {
    const dto = await analyticsService.getDashboard(period);
    return mapDashboard(dto);
  } catch (err) {
    return rejectWithValue(
      err instanceof Error ? err.message : "Failed to load dashboard data",
    );
  }
});

const DEFAULT_PERIOD: DashboardPeriod = {
  type: "preset",
  days: DEFAULT_PERIOD_DAYS,
};

const initialState: DashboardState = {
  data: {
    statCards: [],
    entityTypes: [],
    complianceFrameworks: [],
    processingHistory: [],
    deIdMethods: [],
    confidenceScores: [],
    recentActivity: [],
  },
  period: DEFAULT_PERIOD,
  loading: false,
  error: null,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setPeriod: (state, action: PayloadAction<DashboardPeriod>) => {
      state.period = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export const { setPeriod } = dashboardSlice.actions;

export default dashboardSlice.reducer;
