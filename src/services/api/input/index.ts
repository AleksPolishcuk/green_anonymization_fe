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

    return apiClient.post<InputFormResponse, FormData>(
      "/anonymization/anonymize",
      formData,
    );
  },
};
