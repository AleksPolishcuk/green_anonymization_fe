import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "store/slices/authSlice";
import themeReducer from "store/slices/themeSlice";
import documentReducer from "store/slices/documentSlice";
import dashboardReducer from "store/slices/dashboardSlice";
import pricingReducer from "store/slices/pricingSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  document: documentReducer,
  dashboard: dashboardReducer,
  pricing: pricingReducer,
});
