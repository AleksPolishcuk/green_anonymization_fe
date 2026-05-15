import { apiClient } from "services/api/client";

import type {
  DocumentDetails,
  DocumentsListResponse,
  DocumentsQueryParams,
  UpdateDocumentRequest,
} from "./typing";

export const documentsService = {
  async getDocuments(
    params: DocumentsQueryParams = {},
  ): Promise<DocumentsListResponse> {
    const { page = 1, limit = 20 } = params;

    return apiClient.get<DocumentsListResponse>(
      `/documents?page=${page}&limit=${limit}`,
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
};
