import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { pricingService } from "services/pricing";
import type {
  CurrentSubscription,
  SelectPlanRequest,
  SubscriptionPlan,
} from "services/pricing/typing/pricing";
import type { PricingState } from "store/types/pricing";

export const fetchPlans = createAsyncThunk<
  SubscriptionPlan[],
  void,
  { rejectValue: string }
>("pricing/fetchPlans", async (_, { rejectWithValue }) => {
  try {
    return await pricingService.getPlans();
  } catch (err) {
    return rejectWithValue(
      err instanceof Error ? err.message : "Failed to load plans",
    );
  }
});

export const fetchCurrentSubscription = createAsyncThunk<
  CurrentSubscription,
  void,
  { rejectValue: string }
>("pricing/fetchCurrent", async (_, { rejectWithValue }) => {
  try {
    return await pricingService.getCurrentSubscription();
  } catch (err) {
    return rejectWithValue(
      err instanceof Error ? err.message : "Failed to load subscription",
    );
  }
});

export const selectPlan = createAsyncThunk<
  CurrentSubscription,
  SelectPlanRequest,
  { rejectValue: string }
>("pricing/selectPlan", async (request, { rejectWithValue }) => {
  try {
    return await pricingService.selectPlan(request);
  } catch (err) {
    return rejectWithValue(
      err instanceof Error ? err.message : "Failed to select plan",
    );
  }
});

const initialState: PricingState = {
  plans: [],
  current: null,
  plansLoading: false,
  currentLoading: false,
  selectLoading: false,
  error: null,
};

export const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlans.pending, (state) => {
        state.plansLoading = true;
        state.error = null;
      })
      .addCase(fetchPlans.fulfilled, (state, action) => {
        state.plansLoading = false;
        state.plans = action.payload;
      })
      .addCase(fetchPlans.rejected, (state, action) => {
        state.plansLoading = false;
        state.error = action.payload ?? "Unknown error";
      })

      .addCase(fetchCurrentSubscription.pending, (state) => {
        state.currentLoading = true;
      })
      .addCase(fetchCurrentSubscription.fulfilled, (state, action) => {
        state.currentLoading = false;
        state.current = action.payload;
      })
      .addCase(fetchCurrentSubscription.rejected, (state, action) => {
        state.currentLoading = false;
        state.error = action.payload ?? "Unknown error";
      })

      .addCase(selectPlan.pending, (state) => {
        state.selectLoading = true;
        state.error = null;
      })
      .addCase(selectPlan.fulfilled, (state, action) => {
        state.selectLoading = false;
        state.current = action.payload;
      })
      .addCase(selectPlan.rejected, (state, action) => {
        state.selectLoading = false;
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export default pricingSlice.reducer;
