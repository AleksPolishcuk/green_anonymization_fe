import type { ComplianceFramework } from "services/compliance/typing/compliance";

export type Confidence = "Low" | "Medium" | "High";

export type EntityType =
  | "PERSON"
  | "LOCATION"
  | "PHONE"
  | "DATE_TIME"
  | "EMAIL"
  | "MRN"
  | "SSN"
  | "OTHER";

export type Entity = {
  id: string;
  documentId: string;
  entityType: EntityType;
  value: string;
  confidence: Confidence;
  posStart: number;
  posEnd: number;
  score: number;
};

export type DocumentState = {
  selectedFramework: ComplianceFramework;
  originalText: string;
  redactedText: string;
  entities: Entity[];
};
