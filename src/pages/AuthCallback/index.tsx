import { Box } from "@mui/material";
import { API_BASE_URL } from "constants";
import { AUTH_ENDPOINTS } from "constants/auth";
import { setTokens } from "features/Auth/authTokens";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "shared/ui/Loader";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const run = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");

      const res = await fetch(
        `${API_BASE_URL}${AUTH_ENDPOINTS.verify}${token}`,
      );

      const data = await res.json();

      setTokens(data.accessToken, data.refreshToken);

      if (data.isRegistered) {
        navigate("/dashboard");
      } else {
        navigate("/register");
      }
    };

    run();
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Loader />
    </Box>
  );
}
