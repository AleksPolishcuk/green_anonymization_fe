import type {
  Control,
  UseFormHandleSubmit,
  UseFormReturn,
} from "react-hook-form";

export type InputFormValues = {
  text: string | null;
  file: File | null;
};

export type UseInputFormReturn = {
  control: Control<InputFormValues>;
  handleSubmit: UseFormHandleSubmit<InputFormValues>;
  formState: UseFormReturn<InputFormValues>["formState"];
  onSubmit: (data: InputFormValues) => Promise<void>;
  isSubmitting: boolean;
  submitSuccess: boolean;
  submitError: string | null;
};

export type FileDropZoneProps = {
  value: File | null;
  onChange: (file: File | null) => void;
};

export type UseFileDropZoneProps = {
  onChange: (file: File | null) => void;
};
