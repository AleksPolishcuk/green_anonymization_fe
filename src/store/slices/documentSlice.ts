import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  ComplianceFramework,
  DocumentState,
  Entity,
} from "store/types/document";
import { DOCUMENT_MOCK } from "store/mocks/documentMock";

const initialState: DocumentState = {
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
} = documentSlice.actions;

export default documentSlice.reducer;
