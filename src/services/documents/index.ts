import { apiClient } from "services/api/client";

import type {
  DocumentDetails,
  DocumentsListResponse,
  DocumentsQueryParams,
  UpdateDocumentRequest,
  UpdateEntitySelectionsRequest,
} from "./typing";

export const documentsService = {
  async getDocuments(
    params: DocumentsQueryParams = {},
  ): Promise<DocumentsListResponse> {
    const { page = 1, limit = 20, search } = params;

    const query = new URLSearchParams({
      page: String(page),
      limit: String(limit),
    });

    if (search?.trim()) {
      query.set("search", search.trim());
    }

    return apiClient.get<DocumentsListResponse>(
      `/documents?${query.toString()}`,
    );
  },

  async getDocumentById(id: string): Promise<DocumentDetails> {
    return apiClient.get<DocumentDetails>(`/documents/${id}`);
  },

  async updateDocumentText(
    id: string,
    payload: UpdateDocumentRequest,
  ): Promise<DocumentDetails> {
    return apiClient.patch<DocumentDetails, UpdateDocumentRequest>(
      `/documents/${id}`,
      payload,
    );
  },

  async updateEntitySelections(
    documentId: string,
    payload: UpdateEntitySelectionsRequest,
  ): Promise<void> {
    return apiClient.patch<void, UpdateEntitySelectionsRequest>(
      `/documents/${documentId}/entities/selection`,
      payload,
    );
  },
};
