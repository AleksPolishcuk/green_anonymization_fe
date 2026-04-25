import { useForm, type SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "services/api/auth";
import { ValidationError } from "yup";
import { registerSchema } from "constants/validations";
import { useTranslation } from "react-i18next";

type RegisterFormValues = {
  firstName: string;
  lastName: string;
  companyName: string;
};

export const useRegisterForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, reset, formState } =
    useForm<RegisterFormValues>({
      mode: "onChange",
      defaultValues: {
        firstName: "",
        lastName: "",
        companyName: "",
      },
      resolver: async (data) => {
        try {
          const values = await registerSchema.validate(data, {
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
    if (!message) return;

    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 500);

    return () => clearTimeout(timer);
  }, [message, navigate]);

  const onSubmit: SubmitHandler<RegisterFormValues> = async (formData) => {
    try {
      setLoading(true);
      setMessage(null);
      setError(null);

      await authService.register(formData);

      setMessage("success");
      reset();
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : t("register.status.errorDescription");

      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    formState,
    message,
    error,
    loading,
    isSubmitDisabled,
  };
};
