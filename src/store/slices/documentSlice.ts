import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ComplianceFramework = "HIPAA_US" | "GDPR_EU" | "GDPR_UK" | "FADP_CH";

type Entity = {
  id: string;
  type: string;
  value: string;
  start: number;
  end: number;
  score: number;
};

type DocumentState = {
  selectedFrameworks: ComplianceFramework[];
  originalText: string;
  redactedText: string;
  entities: Entity[];
};

const initialState: DocumentState = {
  selectedFrameworks: [],
  originalText: "",
  redactedText: "",
  entities: [],
};

export const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    setSelectedFrameworks: (
      state,
      action: PayloadAction<ComplianceFramework[]>,
    ) => {
      state.selectedFrameworks = action.payload;
    },

    toggleFramework: (state, action: PayloadAction<ComplianceFramework>) => {
      const framework = action.payload;
      const index = state.selectedFrameworks.indexOf(framework);

      if (index === -1) {
        state.selectedFrameworks.push(framework);
      } else {
        state.selectedFrameworks.splice(index, 1);
      }
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
  setSelectedFrameworks,
  toggleFramework,
  setOriginalText,
  setRedactedText,
  setEntities,
  updateEntity,
  resetDocument,
} = documentSlice.actions;

export default documentSlice.reducer;
