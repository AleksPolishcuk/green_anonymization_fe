export type ComplianceFramework =
  | "HIPAA_US"
  | "GDPR_EU"
  | "GDPR_UK"
  | "FADP_CH";

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
  confidence: Confidence;
  posStart: number;
  posEnd: number;
  score: number;
  selected: boolean;
};

export type DocumentState = {
  currentStep: DeidStep;
  selectedFramework: ComplianceFramework;
  originalText: string;
  redactedText: string;
  entities: Entity[];
};

export type DeidStep = "framework" | "dataSource" | "results";
