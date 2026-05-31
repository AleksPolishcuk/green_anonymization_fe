import { useForm, type SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { authService } from "services/auth";
import { ValidationError } from "yup";
import { signInSchema } from "constants/validations";
import { useTranslation } from "react-i18next";

type FormValues = {
  email: string;
};

export const useEmailLoginForm = () => {
  const { t } = useTranslation();

  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, reset, formState } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
    resolver: async (data) => {
      try {
        const values = await signInSchema.validate(data, {
          abortEarly: false,
        });

        return { values, errors: {} };
      } catch (err) {
        if (err instanceof ValidationError) {
          const errors: Record<string, { message: string }> = {};

          err.inner.forEach((e) => {
            if (e.path) {
              errors[e.path] = { message: t(e.message) };
            }
          });

          return { values: {}, errors };
        }

        return { values: {}, errors: {} };
      }
    },
  });
  const isSubmitDisabled = !formState.isValid || loading;
  useEffect(() => {
    if (!status) return;

    const timer = setTimeout(() => {
      setStatus(null);
    }, 4000);

    return () => clearTimeout(timer);
  }, [status]);

  const onSubmit: SubmitHandler<FormValues> = async ({ email }) => {
    try {
      setLoading(true);
      setStatus(null);
      setError(null);

      const data = await authService.login(email);

      setStatus(data.message);
      reset();
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : t("signIn.form.status.errorDescription", { error: "" });

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    formState,
    status,
    error,
    loading,
    isSubmitDisabled,
  };
};
