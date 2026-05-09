import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchSession } from "store/slices/authSlice";

export const useAuthGuard = (mode: "registered" | "unregistered") => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth?.user);
  const registered = useAppSelector((state) => state.auth?.registered);
  const [loading, setLoading] = useState(!user);

  useEffect(() => {
    const check = async () => {
      if (
        import.meta.env.DEV &&
        import.meta.env.VITE_DEV_AUTH_BYPASS === "true"
      ) {
        setLoading(false);
        return;
      }

      let sessionUser = user;
      let sessionRegistered = registered;

      if (!sessionUser) {
        const result = await dispatch(fetchSession());

        if (fetchSession.rejected.match(result)) {
          navigate("/sign-in");
          return;
        }

        sessionUser = result.payload.user;
        sessionRegistered = result.payload.registered;
      }

      if (mode === "registered" && !sessionRegistered) {
        navigate("/register");
        return;
      }

      if (mode === "unregistered" && sessionRegistered) {
        navigate("/dashboard");
        return;
      }

      setLoading(false);
    };

    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading };
};
