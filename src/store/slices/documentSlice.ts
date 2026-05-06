import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  ComplianceFramework,
  DeidStep,
  DocumentState,
  Entity,
} from "store/types/document";
import { DOCUMENT_MOCK } from "store/mocks/documentMock";

const DEID_STEPS: DeidStep[] = ["framework", "dataSource", "results"];

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
  resetDocument,
  setDeidStep,
  nextDeidStep,
  prevDeidStep,
} = documentSlice.actions;
