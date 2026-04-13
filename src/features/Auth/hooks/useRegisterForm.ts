import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL, ENDPOINTS } from "constants";
import authFetch from "features/Auth/authFetch";

type RegisterFormValues = {
  firstName: string;
  lastName: string;
  companyName: string;
};

export const useRegisterForm = () => {
  const { control, handleSubmit, reset } = useForm<RegisterFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
    },
  });

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterFormValues> = async (formData) => {
    setMessage(null);
    setError(null);
    setLoading(true);

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        companyName: formData.companyName,
      };

      const { status, data } = await authFetch(
        `${API_BASE_URL}${ENDPOINTS.register}`,
        {
          method: "POST",
          body: JSON.stringify(payload),
        },
      );

      if (status >= 400) {
        throw new Error(data?.message || "Registration failed");
      }

      setMessage("Account created successfully");
      reset();

      setTimeout(() => navigate("/dashboard"), 500);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    message,
    error,
    loading,
  };
};
