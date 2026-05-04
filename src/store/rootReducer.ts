import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "store/slices/authSlice";
import themeReducer from "store/slices/themeSlice";
import dashboardReducer from "components/Dashboard/store/dashboardSlice";
import documentReducer from "store/slices/documentSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  dashboard: dashboardReducer,
  document: documentReducer,
});
