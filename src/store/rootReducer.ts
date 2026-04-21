import { combineReducers } from "@reduxjs/toolkit";

import dashboardReducer from "features/Dashboard/store/dashboardSlice";
import authReducer from "./slices/authSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
});
