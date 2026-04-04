import { useForm } from "react-hook-form";

import type { ContactFormValues } from "../types";

type UseContactFormReturn = {
  control: ReturnType<typeof useForm<ContactFormValues>>["control"];
  handleSubmit: ReturnType<typeof useForm<ContactFormValues>>["handleSubmit"];
  onSubmit: () => void;
};

export const useContactForm = (): UseContactFormReturn => {
  const { control, handleSubmit } = useForm<ContactFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = () => {
    // handle form submission
  };

  return { control, handleSubmit, onSubmit };
};
