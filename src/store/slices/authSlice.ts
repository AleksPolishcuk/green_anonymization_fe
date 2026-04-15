import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authFetch from "features/Auth/utils/authFetch";
import { API_BASE_URL, ENDPOINTS } from "constants";
import type User from "shared/interfaces/User";
import { clearTokens } from "features/Auth/utils/authTokens";
import { AUTH_STATUS } from "constants/auth";

type SessionResponse = {
  authenticated: boolean;
  registered: boolean;
  user: User | null;
};

export const fetchSession = createAsyncThunk<
  SessionResponse,
  void,
  { rejectValue: string }
>("auth/session", async (_, { rejectWithValue }) => {
  const { status, data } = await authFetch(
    `${API_BASE_URL}${ENDPOINTS.session}`,
  );

  if (status === 401 || !data) {
    return rejectWithValue(AUTH_STATUS.unauthenticated);
  }

  return data as SessionResponse;
});

interface AuthState {
  user: User | null;
  registered: boolean;
  authenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  registered: false,
  authenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.registered = false;
      state.authenticated = false;
      clearTokens();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSession.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.registered = action.payload.registered;
      state.authenticated = action.payload.authenticated;
    });

    builder.addCase(fetchSession.rejected, (state) => {
      state.user = null;
      state.registered = false;
      state.authenticated = false;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
