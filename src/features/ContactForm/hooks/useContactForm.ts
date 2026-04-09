import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import type { ContactFormValues, UseContactFormReturn } from "../types";
import { contactService } from "services/contact";
import { validateFormData, sanitizeFormData } from "../utils/validation";

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
        const sanitized = sanitizeFormData(data);
        const validationErrors = validateFormData(sanitized);

        const errors: Record<string, { message: string }> = {};
        (
          Object.keys(validationErrors) as Array<keyof ContactFormValues>
        ).forEach((field) => {
          errors[field] = {
            message: t(`contactUsPage.form.errors.${validationErrors[field]}`),
          };
        });

        return {
          values: Object.keys(errors).length === 0 ? sanitized : {},
          errors,
        };
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
