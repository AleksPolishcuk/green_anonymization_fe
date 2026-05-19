import { apiClient } from "services/api/client";
import type {
  GenerateSyntheticDataRequest,
  GenerateSyntheticDataResponse,
} from "./typing";

export interface GenerateArchiveRequest {
  anonymizedTexts: string[];
  extension: string;
}

const syntheticDataService = {
  async generate(
    payload: GenerateSyntheticDataRequest,
  ): Promise<GenerateSyntheticDataResponse> {
    return apiClient.post<
      GenerateSyntheticDataResponse,
      GenerateSyntheticDataRequest
    >("/synthetic-data/generate", payload);
  },

  async generateArchive(payload: GenerateArchiveRequest): Promise<Blob> {
    return apiClient.postBlob<GenerateArchiveRequest>(
      "/file-generation/generate-archive",
      payload,
    );
  },
};

export default syntheticDataService;
