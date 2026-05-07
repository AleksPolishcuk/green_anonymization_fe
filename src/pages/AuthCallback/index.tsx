import { setTokens } from "features/Auth/utils/authTokens";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "services/auth";
import { Loader } from "shared/ui/Loader";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const run = async () => {
      try {
        const token = new URLSearchParams(window.location.search).get("token");

        if (!token) {
          navigate("/sign-in");
          return;
        }

        const data = await authService.verify(token);

        if (!data?.accessToken || !data?.refreshToken) {
          navigate("/sign-in");
          return;
        }

        setTokens(data.accessToken, data.refreshToken);

        const session = await authService.getSession();

        if (!session.registered) {
          navigate("/register");
          return;
        }

        navigate("/dashboard");
      } catch {
        navigate("/sign-in");
      }
    };

    run();
  }, [navigate]);

  return <Loader />;
}
