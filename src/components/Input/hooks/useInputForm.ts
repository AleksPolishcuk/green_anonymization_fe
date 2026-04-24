import { inputFormSchema } from "constants/validations";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { inputService } from "services/api/input";
import { ValidationError } from "yup";
import type { InputFormValues } from "../types";

export const useInputForm = () => {
  const { t } = useTranslation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    formState,
    reset,
    setValue,
    setError,
    clearErrors,
  } = useForm<InputFormValues>({
    mode: "onChange",
    defaultValues: {
      text: "",
      file: null,
    },
    resolver: async (data) => {
      try {
        const values = await inputFormSchema.validate(data, {
          abortEarly: false,
        });

        return { values, errors: {} };
      } catch (error) {
        if (error instanceof ValidationError) {
          const errors: Record<string, { message: string }> = {};

          error.inner.forEach((err) => {
            if (err.path) {
              errors[err.path] = {
                message: t(err.message),
              };
            } else {
              errors.root = {
                message: t(err.message),
              };
            }
          });

          return { values: {}, errors };
        }

        return { values: {}, errors: {} };
      }
    },
  });

  const values = useWatch({ control });
  const isFileUploaded = !!values.file;
  const isTextValid = !!values.text && values.text.length <= 5000;
  const isSubmitDisabled = isSubmitting || (!isFileUploaded && !isTextValid);

  const onSubmit = async (data: InputFormValues) => {
    try {
      setIsSubmitting(true);
      setSubmitSuccess(false);
      const payload = data.file
        ? { file: data.file, text: null }
        : { text: data.text, file: null };

      await inputService.submitForm(payload);

      setSubmitSuccess(true);

      reset({ text: "", file: null });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : t("input.form.errors.submissionFailed") || "Submission failed";

      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    control,
    handleSubmit,
    formState,
    onSubmit,
    isSubmitting,
    submitSuccess,
    submitError,
    setValue,
    setError,
    clearErrors,
    isFileUploaded,
    isSubmitDisabled,
  };
};
