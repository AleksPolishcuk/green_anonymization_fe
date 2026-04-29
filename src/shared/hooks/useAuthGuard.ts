import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { fetchSession } from "store/slices/authSlice";

export const useAuthGuard = (mode: "registered" | "unregistered") => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const check = async () => {
      if (
        import.meta.env.DEV &&
        import.meta.env.VITE_DEV_AUTH_BYPASS === "true"
      ) {
        setLoading(false);
        return;
      }

      const result = await dispatch(fetchSession());

      if (fetchSession.rejected.match(result)) {
        navigate("/sign-in");
        return;
      }

      const { registered } = result.payload;

      if (mode === "registered" && !registered) {
        navigate("/register");
        return;
      }

      if (mode === "unregistered" && registered) {
        navigate("/dashboard");
        return;
      }

      setLoading(false);
    };

    check();
  }, [dispatch, navigate, mode]);

  return { loading };
};
