import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  SyntheticDataDocument,
  SyntheticDataState,
} from "store/types/syntheticData";

const initialState: SyntheticDataState = {
  syntheticDocuments: [],
  documentId: null,
  recordsCount: 10,
};

export const syntheticDataSlice = createSlice({
  name: "syntheticData",
  initialState,
  reducers: {
    setSyntheticData: (
      state,
      action: PayloadAction<{
        syntheticDocuments: SyntheticDataDocument[];
        documentId: string;
        recordsCount: number;
      }>,
    ) => {
      state.syntheticDocuments = action.payload.syntheticDocuments;
      state.documentId = action.payload.documentId;
      state.recordsCount = action.payload.recordsCount;
    },
  },
});

export const { setSyntheticData } = syntheticDataSlice.actions;

export default syntheticDataSlice.reducer;
