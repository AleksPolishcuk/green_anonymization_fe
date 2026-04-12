import { useForm, type SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "constants";
import { AUTH_ENDPOINTS } from "constants/auth";

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
      const res = await fetch(`${API_BASE_URL}${AUTH_ENDPOINTS.login}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          destination: email,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message || "Failed to send magic link");
      }

      setStatus(data.message || "Magic link sent");
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
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
