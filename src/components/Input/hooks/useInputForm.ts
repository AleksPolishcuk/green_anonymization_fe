import { inputFormSchema } from "constants/validations";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { inputService } from "services/input";
import { ValidationError } from "yup";
import type { InputFormValues } from "components/Input/types";
import { INPUT_SECTION_CONSTANTS } from "constants/DeidPage";
import { useAppSelector } from "store/hooks";
import type { ComplianceFramework } from "services/compliance/typing/compliance";

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
  const selectedFramework: ComplianceFramework = useAppSelector(
    (s) => s.document.selectedFramework,
  );
  const selectedFrameworkCode = selectedFramework.code;

  const onSubmit = async (data: InputFormValues) => {
    try {
      setIsSubmitting(true);
      setSubmitSuccess(false);

      const payload = data.file
        ? { selectedFrameworkCode, file: data.file, text: null }
        : { selectedFrameworkCode, text: data.text, file: null };

      await inputService.submitForm(payload);

      setSubmitSuccess(true);

      reset({ text: "", file: null });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, INPUT_SECTION_CONSTANTS.SUBMIT_SUCCESS_TIMEOUT);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : t("input.form.errors.submissionFailed");

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
