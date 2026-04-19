import { useForm, type SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { authService } from "services/api/auth";

export const useEmailLoginForm = () => {
  const { control, handleSubmit, reset } = useForm<{ email: string }>();

  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!status) return;

    const timer = setTimeout(() => {
      setStatus(null);
    }, 4000);

    return () => clearTimeout(timer);
  }, [status]);

  const onSubmit: SubmitHandler<{ email: string }> = async ({ email }) => {
    setStatus(null);
    setError(null);
    setLoading(true);

    try {
      const data = await authService.login(email);

      setStatus(data.message || "Magic link sent");
      reset();
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
    status,
    error,
    loading,
  };
};
