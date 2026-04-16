import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authFetch from "features/Auth/utils/authFetch";
import { API_BASE_URL } from "constants";
import type User from "shared/interfaces/User";
import { clearTokens } from "features/Auth/utils/authTokens";
import { AUTH_STATUS } from "constants/auth";

type SessionResponse = {
  registered: boolean;
  user: User | null;
};

export const fetchSession = createAsyncThunk<
  SessionResponse,
  void,
  { rejectValue: string }
>("auth/session", async (_, { rejectWithValue }) => {
  const { status, data } = await authFetch(`${API_BASE_URL}/user/session`);

  if (status === 401 || !data) {
    return rejectWithValue(AUTH_STATUS.unauthenticated);
  }

  return data as SessionResponse;
});

interface AuthState {
  user: User | null;
  registered: boolean;
}

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
