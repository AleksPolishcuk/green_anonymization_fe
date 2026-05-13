import { apiClient } from "services/api";
import type { ContactFormRequest, ContactFormResponse } from "./typing/contact";

export const contactService = {
  async submitForm(data: ContactFormRequest): Promise<ContactFormResponse> {
    return apiClient.post<ContactFormResponse, ContactFormRequest>(
      "/emails/contact-message",
      data,
    );
  },
};
