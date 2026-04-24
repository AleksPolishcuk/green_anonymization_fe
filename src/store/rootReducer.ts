import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "store/slices/authSlice";
import themeReducer from "store/slices/themeSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
});
