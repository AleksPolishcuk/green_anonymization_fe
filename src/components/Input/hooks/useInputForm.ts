import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ValidationError } from "yup";

import { DAILY_LIMIT_REACHED_CODE } from "constants/PricingPage";
import { INPUT_SECTION_CONSTANTS } from "constants/DeidPage";
import { inputFormSchema } from "constants/validations";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  setDocument,
  setEntities,
  setOriginalText,
  setRedactedText,
} from "store/slices/documentSlice";
import { inputService } from "services/input";
import type { InputFormValues } from "components/Input/types";

export const useInputForm = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const selectedFramework = useAppSelector(
    (state) => state.document.selectedFramework,
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isLimitReached, setIsLimitReached] = useState(false);

  const { control, handleSubmit, formState, reset } = useForm<InputFormValues>({
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
              errors[err.path] = { message: t(err.message) };
            } else {
              errors.root = { message: t(err.message) };
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
      dispatch(setDocument(analysis.document));

      setSubmitSuccess(true);
      reset({ text: "", file: null });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, INPUT_SECTION_CONSTANTS.SUBMIT_SUCCESS_TIMEOUT);
    } catch (error) {
      const apiErr = error as { status?: number; message?: unknown };
      if (
        apiErr.status === 403 &&
        JSON.stringify(apiErr.message ?? "").includes(DAILY_LIMIT_REACHED_CODE)
      ) {
        setIsLimitReached(true);
        return;
      }
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
    isFileUploaded,
    isSubmitDisabled,
    isLimitReached,
    clearLimitReached: () => setIsLimitReached(false),
  };
};
