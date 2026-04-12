import type { UseFormHandleSubmit, UseFormReturn } from "react-hook-form";

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export type PhoneFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  disabled?: boolean;
};

export type UseContactFormReturn = {
  control: UseFormReturn<ContactFormValues>["control"];
  handleSubmit: UseFormHandleSubmit<ContactFormValues>;
  formState: UseFormReturn<ContactFormValues>["formState"];
  onSubmit: (data: ContactFormValues) => Promise<void>;
  isSubmitting: boolean;
  submitError: string | null;
  submitSuccess: boolean;
};
