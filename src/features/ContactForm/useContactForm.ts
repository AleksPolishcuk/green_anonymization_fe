import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ValidationError } from "yup";

import type { ContactFormValues, UseContactFormReturn } from "./types";
import { contactService } from "services/contact";
import { sanitizeInput } from "shared/utils/sanitize";
import { contactFormSchema } from "constants/validations";

export const useContactForm = (): UseContactFormReturn => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { control, handleSubmit, formState, reset } =
    useForm<ContactFormValues>({
      mode: "onBlur",
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      },
      resolver: async (data) => {
        try {
          const values = await contactFormSchema.validate(data, {
            abortEarly: false,
          });

          const sanitized: ContactFormValues = {
            firstName: sanitizeInput(values.firstName),
            lastName: sanitizeInput(values.lastName),
            email: sanitizeInput(values.email),
            phoneNumber: sanitizeInput(values.phoneNumber),
            message: sanitizeInput(values.message),
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

  const onSubmit = async (data: ContactFormValues): Promise<void> => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      setSubmitSuccess(false);

      await contactService.submitForm(data);

      setSubmitSuccess(true);
      reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : t("contactUsPage.form.errors.submissionFailed") ||
            "Submission failed";
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
  };
};
