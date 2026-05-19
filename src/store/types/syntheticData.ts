import type { EntityType } from "./document";

export type SyntheticEntity = {
  id: string;
  syntheticDataDocumentId: string;
  entity_type: EntityType;
  value: string;
};

export type SyntheticDataDocument = {
  id: string;
  syntheticText: string;
  entities: SyntheticEntity[];
};

export type SyntheticDataState = {
  syntheticDocuments: SyntheticDataDocument[];
};
