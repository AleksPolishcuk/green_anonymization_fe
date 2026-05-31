import type { Entity } from "store/types/document";

export type DocumentsQueryParams = {
  page?: number;
  limit?: number;
  search?: string;
};

export type DocumentListItem = {
  id: string;
  fileName: string;
  fileType: string | null;
  chosenCompliance: string;
  verifiedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DocumentsListResponse = {
  items: DocumentListItem[];
  total: number;
  page: number;
  limit: number;
};

export type DocumentDetails = DocumentListItem & {
  anonymizedText: string;
  piiEntities: Omit<Entity, "selected">[];
};

export type UpdateDocumentRequest = {
  text: string;
};

export type UpdateEntitySelectionsRequest = {
  selectedEntityIds: string[];
};
