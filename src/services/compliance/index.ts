import { apiClient } from "services/api/client";
import type {
  ComplianceFramework,
  ComplianceSelectionResponse,
  SelectComplianceRequest,
} from "./typing/compliance";

export const complianceService = {
  async getFrameworks(): Promise<ComplianceFramework[]> {
    return apiClient.get<ComplianceFramework[]>("/compliance/frameworks");
  },

  async selectFramework(
    payload: SelectComplianceRequest,
  ): Promise<ComplianceSelectionResponse> {
    return apiClient.post<ComplianceSelectionResponse, SelectComplianceRequest>(
      "/compliance/selection",
      payload,
    );
  },

  async getSelection(): Promise<ComplianceSelectionResponse> {
    return apiClient.get<ComplianceSelectionResponse>(`/compliance/selection`);
  },
};
