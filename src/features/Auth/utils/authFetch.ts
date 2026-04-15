import { API_BASE_URL } from "constants";
import {
  getAccessToken,
  getRefreshToken,
  setTokens,
  clearTokens,
} from "features/Auth/utils/authTokens";

const authFetch = async (url: string, options: RequestInit = {}) => {
  let accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  const doFetch = (token?: string) =>
    fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        "Content-Type": "application/json",
      },
    });

  if (!accessToken && refreshToken) {
    const refreshed = await tryRefresh(refreshToken);
    if (refreshed) {
      accessToken = refreshed;
    }
  }

  let res = await doFetch(accessToken || undefined);

  if (res.status === 401 && refreshToken) {
    const refreshed = await tryRefresh(refreshToken);

    if (!refreshed) {
      clearTokens();
      return { status: 401, data: null };
    }

    accessToken = refreshed;
    res = await doFetch(accessToken);
  }

  const data = await res.json().catch(() => null);

  return {
    status: res.status,
    data,
  };
};

const tryRefresh = async (refreshToken: string): Promise<string | null> => {
  try {
    const refreshRes = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (!refreshRes.ok) return null;

    const data = await refreshRes.json();

    if (!data?.accessToken) return null;

    setTokens(data.accessToken, refreshToken);

    return data.accessToken;
  } catch {
    return null;
  }
};

export default authFetch;
