import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import { DEID_STEPS } from "constants/MainPages";
import { complianceService } from "services/compliance";
import type { PiiEntity } from "services/input/typing";
import type {
  ComplianceFramework,
  DeidStep,
  Document,
  DocumentState,
  Entity,
} from "store/types/document";

const initialState: DocumentState = {
  currentStep: "framework",
  piiEntities: null,
  originalText: null,
  anonymizedText: null,
  selectedFramework: null,
  document: null,
};

export const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    setSelectedFramework: (
      state,
      action: PayloadAction<ComplianceFramework>,
    ) => {
      state.selectedFramework = action.payload;
      if (state.currentStep === "framework") {
        state.currentStep = "dataSource";
      }
    },

    setOriginalText: (state, action: PayloadAction<string>) => {
      state.originalText = action.payload;
      if (action.payload) {
        state.currentStep = "results";
      }
    },

    setRedactedText: (state, action: PayloadAction<string>) => {
      state.anonymizedText = action.payload;
    },

    setEntities: (state, action: PayloadAction<PiiEntity[]>) => {
      state.piiEntities = action.payload
        .map((e): Entity => ({ ...e, selected: true }))
        .sort((a, b) => a.start - b.start);
    },

    setDocument: (state, action: PayloadAction<Document>) => {
      state.document = action.payload;
    },

    toggleEntitySelected: (state, action: PayloadAction<string>) => {
      const entity = state.piiEntities?.find((e) => e.id === action.payload);
      if (entity) {
        entity.selected = !entity.selected;
      }
    },

    setDeidStep: (state, action: PayloadAction<DeidStep>) => {
      state.currentStep = action.payload;
    },

    nextDeidStep: (state) => {
      if (!state.currentStep) return;
      const idx = DEID_STEPS.indexOf(state.currentStep);
      if (idx < DEID_STEPS.length - 1) {
        state.currentStep = DEID_STEPS[idx + 1];
      }
    },

    prevDeidStep: (state) => {
      if (!state.currentStep) return;
      const idx = DEID_STEPS.indexOf(state.currentStep);
      if (idx > 0) {
        state.currentStep = DEID_STEPS[idx - 1];
      }
    },

    resetDocument: () => initialState,
  },
});

export const {
  setSelectedFramework,
  setOriginalText,
  setRedactedText,
  setEntities,
  setDocument,
  toggleEntitySelected,
  setDeidStep,
  nextDeidStep,
  prevDeidStep,
  resetDocument,
} = documentSlice.actions;

export const saveFrameworkSelection = createAsyncThunk<
  void,
  ComplianceFramework,
  { rejectValue: string }
>(
  "document/saveFramework",
  async (frameworkCode, { dispatch, rejectWithValue }) => {
    dispatch(setSelectedFramework(frameworkCode));
    try {
      await complianceService.selectFramework({ frameworkCode });
    } catch (err) {
      return rejectWithValue(
        err instanceof Error
          ? err.message
          : "Failed to save framework selection",
      );
    }
  },
);

export default documentSlice.reducer;
