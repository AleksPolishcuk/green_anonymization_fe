import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { clearTokens } from "features/Auth/utils/authTokens";
import { AUTH_STATUS } from "constants/auth";
import { authService } from "services/api/auth";
import type { AuthState, SessionResponse } from "store/types/auth";

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
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
