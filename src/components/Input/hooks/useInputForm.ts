import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ValidationError } from "yup";

import { sanitizeInput } from "shared/utils/sanitize";
import { inputFormSchema } from "constants/validations";
import type {
  InputFormValues,
  UseInputFormReturn,
} from "components/Input/types";
import { inputService } from "services/api/input";

export const useInputForm = (): UseInputFormReturn => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { control, handleSubmit, formState, reset, setValue } =
    useForm<InputFormValues>({
      mode: "onBlur",
      defaultValues: {
        text: "",
        file: null,
      },
      resolver: async (data) => {
        try {
          const values = await inputFormSchema.validate(data, {
            abortEarly: false,
          });

          const sanitized: InputFormValues = {
            text: sanitizeInput(values.text),
            file: values.file,
          };

          return { values: sanitized, errors: {} };
        } catch (error) {
          if (error instanceof ValidationError) {
            const errors: Record<string, { message: string }> = {};

            error.inner.forEach((err) => {
              if (err.path) {
                errors[err.path] = {
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
  const onSubmit = async (data: InputFormValues): Promise<void> => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      setSubmitSuccess(false);

      const payload = {
        text: data.file ? "" : data.text,
        file: data.file || null,
      };

      await inputService.submitForm(payload);

      setSubmitSuccess(true);
      reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : t("input.form.errors.submissionFailed");

      setSubmitError(errorMessage);
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
    submitError,
    submitSuccess,
    setValue,
  };
};
