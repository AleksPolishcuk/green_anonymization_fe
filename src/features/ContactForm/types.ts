export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export type PhoneFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};
