import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  ComplianceFramework,
  DeidStep,
  DocumentState,
  Entity,
} from "store/types/document";
import { DOCUMENT_MOCK } from "store/mocks/documentMock";
import { DEID_STEPS } from "constants/MainPages";

const initialState: DocumentState = {
  currentStep: "results",
  entities: DOCUMENT_MOCK.entities,
  originalText: DOCUMENT_MOCK.originalText,
  redactedText: DOCUMENT_MOCK.redactedText,
  selectedFramework: DOCUMENT_MOCK.selectedFramework,
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
    },

    setOriginalText: (state, action: PayloadAction<string>) => {
      state.originalText = action.payload;
    },

    setRedactedText: (state, action: PayloadAction<string>) => {
      state.redactedText = action.payload;
    },

    setEntities: (state, action: PayloadAction<Entity[]>) => {
      state.entities = action.payload;
    },

    updateEntity: (
      state,
      action: PayloadAction<{ id: string; changes: Partial<Entity> }>,
    ) => {
      const entity = state.entities.find((e) => e.id === action.payload.id);

      if (entity) {
        Object.assign(entity, action.payload.changes);
      }
    },

    toggleEntitySelected: (state, action: PayloadAction<string>) => {
      const entity = state.entities.find((e) => e.id === action.payload);

      if (entity) {
        entity.selected = !entity.selected;
      }
    },

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

    resetDocument: () => initialState,
  },
});

export const {
  setSelectedFramework,
  setOriginalText,
  setRedactedText,
  setEntities,
  updateEntity,
  toggleEntitySelected,
  resetDocument,
  setDeidStep,
  nextDeidStep,
  prevDeidStep,
} = documentSlice.actions;

export default documentSlice.reducer;
