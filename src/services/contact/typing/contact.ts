export type ContactFormRequest = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export type ContactFormResponse = {
  id: string;
  createdAt: string;
};
