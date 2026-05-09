import { inputFormSchema } from "constants/validations";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { inputService } from "services/input";
import { ValidationError } from "yup";
import type { InputFormValues } from "components/Input/types";
import { INPUT_SECTION_CONSTANTS } from "constants/DeidPage";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  setEntities,
  setOriginalText,
  setRedactedText,
} from "store/slices/documentSlice";

export const useInputForm = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const selectedFramework = useAppSelector(
    (state) => state.document.selectedFramework,
  );

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
  const isSubmitDisabled =
    isSubmitting || !selectedFramework || (!isFileUploaded && !isTextValid);

  const onSubmit = async (data: InputFormValues) => {
    try {
      setIsSubmitting(true);
      setSubmitSuccess(false);

      if (!selectedFramework) {
        throw new Error(t("input.form.errors.frameworkRequired"));
      }

      const selectedFrameworkCode = selectedFramework.code;
      const payload = data.file
        ? { selectedFrameworkCode, file: data.file, text: null }
        : { selectedFrameworkCode, text: data.text, file: null };

      const analysis = await inputService.submitForm(payload);

      dispatch(setOriginalText(analysis.originalText));
      dispatch(setRedactedText(analysis.anonymizedText));
      dispatch(setEntities(analysis.piiEntities));

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
