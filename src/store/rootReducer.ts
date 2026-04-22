import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import dashboardReducer from "features/Dashboard/store/dashboardSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
});
