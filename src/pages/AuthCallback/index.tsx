import { API_BASE_URL } from "constants";
import { setTokens } from "features/Auth/utils/authTokens";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

        const res = await fetch(`${API_BASE_URL}/auth/verify?token=${token}`);

        const data = await res.json();

        if (!res.ok || !data?.accessToken || !data?.refreshToken) {
          navigate("/sign-in");
          return;
        }

        setTokens(data.accessToken, data.refreshToken);

        const sessionRes = await fetch(`${API_BASE_URL}/user/session`, {
          headers: {
            Authorization: `Bearer ${data.accessToken}`,
          },
        });

        const session = await sessionRes.json();

        if (!session?.authenticated) {
          navigate("/sign-in");
          return;
        }

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
