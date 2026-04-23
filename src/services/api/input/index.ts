import { apiClient } from "../client";
import type { InputFormRequest, InputFormResponse } from "./typing";

export const inputService = {
  async submitForm(data: InputFormRequest): Promise<InputFormResponse> {
    return apiClient.post<InputFormResponse, InputFormRequest>(
      "/anonymization/anonymize",
      data,
    );
  },
};
