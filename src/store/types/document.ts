export type ComplianceFramework =
  | "HIPAA_US"
  | "GDPR_EU"
  | "GDPR_UK"
  | "FADP_CH";

export type Confidence = "low" | "medium" | "high";

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
  start: number;
  end: number;
  score: number;
  selected: boolean;
  createdAt: string;
};

export type Document = {
  chosenCompliance: string;
  createdAt: string;
  fileName: string;
  filePath: string;
  fileType: string;
  id: string;
  updatedAt: string;
  userId: string;
  verifiedAt: string;
};

export type DeidStep = "framework" | "dataSource" | "results";

export type DocumentState = {
  currentStep: DeidStep | null;
  selectedFramework: ComplianceFramework | null;
  originalText: string | null;
  anonymizedText: string | null;
  piiEntities: Entity[] | null;
  document: Document | null;
};
