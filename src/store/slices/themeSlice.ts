import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  getResolvedTheme,
  getStoredTheme,
  saveTheme,
  type ThemeMode,
} from "shared/utils/themeHelper";
import type { ThemeState } from "store/types/theme";

const initialState: ThemeState = {
  mode: getStoredTheme(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const current = getResolvedTheme(state.mode);

      const newMode = current === "dark" ? "light" : "dark";

      state.mode = newMode;
      saveTheme(newMode);
    },

    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
      saveTheme(action.payload);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
