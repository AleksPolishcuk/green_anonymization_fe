import { apiClient } from "services/api/client";
import type { InputFormRequest, InputFormResponse } from "./typing";

export const inputService = {
  async submitForm(data: InputFormRequest): Promise<InputFormResponse> {
    const formData = new FormData();

    if (data.file) {
      formData.append("file", data.file);
    }

    if (data.text) {
      formData.append("text", data.text);
    }

    formData.append("selectedFrameworkCode", data.selectedFrameworkCode);

    const url = data.documentId
      ? `/processing/anonymize?documentId=${data.documentId}`
      : "/processing/anonymize";

    return apiClient.post<InputFormResponse, FormData>(url, formData);
  },
};
