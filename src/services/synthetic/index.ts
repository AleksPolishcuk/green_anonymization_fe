import { apiClient } from "services/api/client";
import type {
  DownloadSyntheticDataRequest,
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
};
