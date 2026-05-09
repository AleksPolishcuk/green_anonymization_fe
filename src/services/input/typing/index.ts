import type { Confidence, Document, EntityType } from "store/types/document";

export type InputFormRequest = {
  text: string | null;
  file: File | null;
};

export type PiiEntity = {
  id: string;
  documentId: string;
  entityType: EntityType;
  confidence: Confidence;
  start: number;
  end: number;
  score: number;
  createdAt: string;
};

export type InputFormResponse = {
  originalText: string;
  anonymizedText: string;
  piiEntities: PiiEntity[];
  document: Document;
};
