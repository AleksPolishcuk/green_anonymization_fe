import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "services/api/auth";

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
      await authService.register(formData);

      setMessage("Account created successfully");
      reset();

      setTimeout(() => navigate("/dashboard"), 500);
    } catch (err) {
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
