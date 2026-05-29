import { useState, useCallback } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ValidationError } from "yup";

import {
  DAILY_LIMIT_REACHED_CODE,
  DAILY_EDIT_LIMIT_REACHED_CODE,
} from "constants/PricingPage";
import { INPUT_SECTION_CONSTANTS } from "constants/DeidPage";
import { inputFormSchema } from "constants/validations";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  setDocument,
  setEntities,
  setOriginalText,
  setRedactedText,
} from "store/slices/documentSlice";
import { incrementEditsUsedToday } from "store/slices/pricingSlice";
import { ApiError } from "services/api/typing/common";
import { inputService } from "services/input";
import type { InputFormValues } from "components/Input/types";

let pendingFile: File | null = null;

export const useInputForm = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const selectedFramework = useAppSelector(
    (state) => state.document.selectedFramework,
  );
  const storedText = useAppSelector((state) => state.document.originalText);
  const existingDocumentId = useAppSelector(
    (state) => state.document.document?.id ?? null,
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isLimitReached, setIsLimitReached] = useState(false);
  const [isEditLimitReached, setIsEditLimitReached] = useState(false);

  const { control, handleSubmit, formState, reset, setValue } =
    useForm<InputFormValues>({
      mode: "onChange",
      defaultValues: {
        text: storedText ?? "",
        file: pendingFile,
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

  const handleFileChange = useCallback(
    (file: File | null) => {
      pendingFile = file;
      setValue("file", file, { shouldValidate: true, shouldDirty: true });
    },
    [setValue],
  );

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
        ? {
            selectedFrameworkCode,
            file: data.file,
            text: null,
            documentId: existingDocumentId,
          }
        : {
            selectedFrameworkCode,
            text: data.text,
            file: null,
            documentId: existingDocumentId,
          };

      const analysis = await inputService.submitForm(payload);

      if (existingDocumentId) {
        dispatch(incrementEditsUsedToday());
      }

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
      if (error instanceof ApiError && error.status === 403) {
        if (error.code === DAILY_EDIT_LIMIT_REACHED_CODE) {
          setIsEditLimitReached(true);
        } else if (error.code === DAILY_LIMIT_REACHED_CODE) {
          setIsLimitReached(true);
        } else if (existingDocumentId) {
          setIsEditLimitReached(true);
        } else {
          setIsLimitReached(true);
        }
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
    isEditLimitReached,
    handleFileChange,
    clearLimitReached: () => setIsLimitReached(false),
    clearEditLimitReached: () => setIsEditLimitReached(false),
  };
};
