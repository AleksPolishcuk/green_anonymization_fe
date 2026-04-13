import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL, ENDPOINTS } from "constants";
import { AUTH_STATUS, type AuthStatus } from "constants/auth";
import type User from "shared/interfaces/User";
import authFetch from "features/Auth/authFetch";

export const fetchMe = createAsyncThunk(
  "auth/me",
  async (_, { rejectWithValue }) => {
    const { status, data } = await authFetch(`${API_BASE_URL}${ENDPOINTS.me}`);

    if (status === 401) return rejectWithValue(AUTH_STATUS.unauthenticated);
    if (status === 403) return rejectWithValue(AUTH_STATUS.unregistered);
    if (!data) return rejectWithValue(AUTH_STATUS.unauthenticated);

    return data;
  },
);

interface AuthState {
  user: User | null;
  status: AuthStatus;
}

const initialState: AuthState = {
  user: null,
  status: AUTH_STATUS.idle,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.status = AUTH_STATUS.unauthenticated;

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = AUTH_STATUS.authenticated;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.user = null;
        state.status = (action.payload as AuthState["status"]) || "error";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
