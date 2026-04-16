import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

const exampleReducer = (state = { message: "Hello world" }) => state;

export const rootReducer = combineReducers({
  exampleWork: exampleReducer,
  auth: authReducer,
});
