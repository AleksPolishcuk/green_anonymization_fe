import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type DeidStep = "framework" | "dataSource" | "results";

const DEID_STEPS: DeidStep[] = ["framework", "dataSource", "results"];

type DocumentState = {
  currentStep: DeidStep;
};

const initialState: DocumentState = {
  currentStep: "results",
};

export const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    setDeidStep: (state, action: PayloadAction<DeidStep>) => {
      state.currentStep = action.payload;
    },

    nextDeidStep: (state) => {
      const currentIndex = DEID_STEPS.indexOf(state.currentStep);

      if (currentIndex < DEID_STEPS.length - 1) {
        state.currentStep = DEID_STEPS[currentIndex + 1];
      }
    },

    prevDeidStep: (state) => {
      const currentIndex = DEID_STEPS.indexOf(state.currentStep);

      if (currentIndex > 0) {
        state.currentStep = DEID_STEPS[currentIndex - 1];
      }
    },
  },
});

export const { setDeidStep, nextDeidStep, prevDeidStep } =
  documentSlice.actions;

export { DEID_STEPS };

export default documentSlice.reducer;
