import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  SyntheticDataDocument,
  SyntheticDataState,
} from "store/types/syntheticData";

const initialState: SyntheticDataState = {
  syntheticDocuments: [],
};

export const syntheticDataSlice = createSlice({
  name: "syntheticData",
  initialState,
  reducers: {
    setSyntheticDocuments: (
      state,
      action: PayloadAction<SyntheticDataDocument[]>,
    ) => {
      state.syntheticDocuments = action.payload;
    },
  },
});

export const { setSyntheticDocuments } = syntheticDataSlice.actions;
export default syntheticDataSlice.reducer;
