import { apiClient } from "services/api/client";
import type {
  DownloadSyntheticDataRequest,
  DownloadSyntheticTableRequest,
  GenerateSyntheticDataRequest,
  GenerateSyntheticDataResponse,
} from "./typing";

export const syntheticDataService = {
  async generate(
    payload: GenerateSyntheticDataRequest,
  ): Promise<GenerateSyntheticDataResponse> {
    return apiClient.post<
      GenerateSyntheticDataResponse,
      GenerateSyntheticDataRequest
    >("/synthetic-data/generate", payload);
  },

  async download(payload: DownloadSyntheticDataRequest): Promise<Blob> {
    return apiClient.post<Blob, DownloadSyntheticDataRequest>(
      "/file-generation/generate-archive",
      payload,
      {
        responseType: "blob",
      },
    );
  },

  async downloadTable(payload: DownloadSyntheticTableRequest): Promise<Blob> {
    return apiClient.post<Blob, DownloadSyntheticTableRequest>(
      "/file-generation/generate-table",
      payload,
      {
        responseType: "blob",
      },
    );
  },
};
