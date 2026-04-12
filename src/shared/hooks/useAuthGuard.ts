import { AUTH_STATUS } from "constants/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { fetchMe } from "store/slices/authSlice";

export const useAuthGuard = (mode: "registered" | "unregistered") => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const check = async () => {
      const result = await dispatch(fetchMe());

      if (fetchMe.rejected.match(result)) {
        const reason = result.payload;

        if (reason === AUTH_STATUS.unauthenticated) {
          navigate("/sign-in");
          return;
        }

        if (reason === AUTH_STATUS.unregistered) {
          if (mode === "registered") {
            navigate("/register");
            return;
          }

          setLoading(false);
          return;
        }

        setLoading(false);
        return;
      }

      if (fetchMe.fulfilled.match(result)) {
        if (mode === "unregistered") {
          navigate("/dashboard");
          return;
        }

        setLoading(false);
      }
    };

    check();
  }, [dispatch, navigate, mode]);

  return { loading };
};
