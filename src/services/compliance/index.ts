import { apiClient } from "services/api/client";
import type {
  ComplianceFramework,
  ComplianceSelectionResponse,
} from "./typing/compliance";

export const complianceService = {
  async getFrameworks(): Promise<ComplianceFramework[]> {
    return apiClient.get<ComplianceFramework[]>("/compliance/frameworks");
  },

  async getSelection(): Promise<ComplianceSelectionResponse> {
    return apiClient.get<ComplianceSelectionResponse>(`/compliance/selection`);
  },
};
