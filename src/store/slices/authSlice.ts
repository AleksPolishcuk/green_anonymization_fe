import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { clearTokens } from "features/Auth/utils/authTokens";
import { AUTH_STATUS } from "constants/auth";
import { authService } from "services/auth";
import type { AuthState, SessionResponse } from "store/types/auth";
import type { UpdateWorkflowTourPayload } from "services/auth/typing";
import type User from "shared/interfaces/User";

export const fetchSession = createAsyncThunk<
  SessionResponse,
  void,
  { rejectValue: string }
>("auth/session", async (_, { rejectWithValue }) => {
  try {
    return await authService.getSession();
  } catch (err) {
    return rejectWithValue(`${AUTH_STATUS.unauthenticated}, error: ${err}`);
  }
});

export const updateWorkflowTour = createAsyncThunk<
  User,
  UpdateWorkflowTourPayload,
  { rejectValue: string }
>("auth/updateWorkflowTour", async (data, { rejectWithValue }) => {
  try {
    return await authService.updateWorkflowTour(data);
  } catch (err) {
    return rejectWithValue(`Failed to update workflow tour, error: ${err}`);
  }
});

const initialState: AuthState = {
  user: null,
  registered: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.registered = false;
      clearTokens();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSession.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.registered = action.payload.registered;
    });

    builder.addCase(fetchSession.rejected, (state) => {
      state.user = null;
      state.registered = false;
    });

    builder.addCase(updateWorkflowTour.fulfilled, (state, action) => {
      state.user = action.payload;
      state.registered = true;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
