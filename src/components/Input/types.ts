import type {
  UseFormReturn,
  UseFormHandleSubmit,
  UseFormSetValue,
} from "react-hook-form";

export type InputFormValues = {
  text: string;
  file: File | null;
};

export type UseInputFormReturn = {
  control: UseFormReturn<InputFormValues>["control"];
  handleSubmit: UseFormHandleSubmit<InputFormValues>;
  formState: UseFormReturn<InputFormValues>["formState"];
  onSubmit: (data: InputFormValues) => Promise<void>;
  isSubmitting: boolean;
  submitError: string | null;
  submitSuccess: boolean;
  setValue: UseFormSetValue<InputFormValues>;
};
