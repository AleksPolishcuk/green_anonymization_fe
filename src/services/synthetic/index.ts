import { apiClient } from "services/api/client";
import type {
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
};
