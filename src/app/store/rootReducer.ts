import { combineReducers } from "@reduxjs/toolkit";
//example reducer, will be changed later to fit the needs of the project
const exampleReducer = (state = { message: "Hello world" }) => state;

export const rootReducer = combineReducers({
  exampleWork: exampleReducer,
});
