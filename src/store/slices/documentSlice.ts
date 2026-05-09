import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ComplianceFramework } from "services/compliance/typing/compliance";
import type { DeidStep, DocumentState, Entity } from "store/types/document";
import { COMPLIANCE_FRAMEWORKS, DEID_STEPS } from "constants/MainPages";
import type { PiiEntity } from "services/input/typing";

const initialState: DocumentState = {
  currentStep: "framework",
  piiEntities: null,
  originalText: null,
  anonymizedText: null,
  selectedFramework: COMPLIANCE_FRAMEWORKS[0],
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

      if (state.currentStep === null || state.currentStep === "framework") {
        state.currentStep = "dataSource";
      }
    },

    setOriginalText: (state, action: PayloadAction<string>) => {
      state.originalText = action.payload;

      if (action.payload.trim().length > 0 && state.currentStep !== "results") {
        state.currentStep = "results";
      }
    },

    setRedactedText: (state, action: PayloadAction<string>) => {
      state.anonymizedText = action.payload;
    },

    setEntities: (state, action: PayloadAction<PiiEntity[]>) => {
      state.piiEntities = action.payload
        .map((entity) => ({
          ...entity,
          selected: true,
        }))
        .sort((a, b) => a.start - b.start);
    },

    updateEntity: (
      state,
      action: PayloadAction<{ id: string; changes: Partial<Entity> }>,
    ) => {
      const entity = state.piiEntities?.find((e) => e.id === action.payload.id);

      if (entity) {
        Object.assign(entity, action.payload.changes);
      }
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
      if (state.currentStep === null) {
        state.currentStep = DEID_STEPS[0];
        return;
      }

      const currentIndex = DEID_STEPS.indexOf(state.currentStep);

      if (currentIndex < DEID_STEPS.length - 1) {
        state.currentStep = DEID_STEPS[currentIndex + 1];
      }
    },

    prevDeidStep: (state) => {
      if (state.currentStep === null) return;

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
