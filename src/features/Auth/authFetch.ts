import { API_BASE_URL } from "constants";
import { AUTH_ENDPOINTS } from "constants/auth";
import { getAccessToken, getRefreshToken, setTokens, clearTokens } from "features/Auth/authTokens";

const authFetch = async (url: string, options: RequestInit = {}) => {
    const accessToken = getAccessToken();
  
    let res = await fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        "Content-Type": "application/json",
      },
    });
  
    if (res.status === 401) {
      const refreshToken = getRefreshToken();
  
      if (!refreshToken) {
        clearTokens();
        return { status: 401, data: null };
      }
  
      const refreshRes = await fetch(
        `${API_BASE_URL}${AUTH_ENDPOINTS.refresh}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken }),
        }
      );
  
      if (refreshRes.ok) {
        const refreshData = await refreshRes.json();
  
        setTokens(refreshData.accessToken, refreshToken);
  
        res = await fetch(url, {
          ...options,
          headers: {
            ...(options.headers || {}),
            Authorization: `Bearer ${refreshData.accessToken}`,
            "Content-Type": "application/json",
          },
        });
      } else {
        clearTokens();
        return { status: 401, data: null };
      }
    }
  
    const data = await res.json().catch(() => null);
    return { status: res.status, data };
  };
  
export default authFetch;