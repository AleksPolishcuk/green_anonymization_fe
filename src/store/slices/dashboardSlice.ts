import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import { DE_ID_METHODS_MOCK } from "store/mocks/dashboardMock";
import type { DashboardState } from "store/types/dashboard";
import { analyticsService } from "services/analytics";
import { mapDashboard } from "services/analytics/mapDashboard";

export const fetchDashboard = createAsyncThunk<
  ReturnType<typeof mapDashboard>,
  void,
  { rejectValue: string }
>("dashboard/fetch", async (_, { rejectWithValue }) => {
  try {
    const dto = await analyticsService.getDashboard();
    return mapDashboard(dto);
  } catch (err) {
    return rejectWithValue(
      err instanceof Error ? err.message : "Failed to load dashboard data",
    );
  }
});

const initialState: DashboardState = {
  data: {
    statCards: [],
    entityTypes: [],
    complianceFrameworks: [],
    processingHistory: [],
    deIdMethods: [], // DE_ID_METHODS_MOCK, // Use mock data for now until backend supports this endpoint
    confidenceScores: [],
    recentActivity: [],
  },
  loading: false,
  error: null,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.data = { ...action.payload, deIdMethods: state.data.deIdMethods };
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export default dashboardSlice.reducer;
