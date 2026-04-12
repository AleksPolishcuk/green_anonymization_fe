import { apiClient } from "../api";
import type { ContactFormRequest, ContactFormResponse } from "./typing/contact";

export const contactService = {
  async submitForm(data: ContactFormRequest): Promise<ContactFormResponse> {
    return apiClient.post<ContactFormResponse, ContactFormRequest>(
      "/contact-messages",
      data,
    );
  },
};
