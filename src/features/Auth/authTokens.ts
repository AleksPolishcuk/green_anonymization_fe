import { STORAGE_KEYS } from "constants/auth";

export const getAccessToken = () =>
  localStorage.getItem(STORAGE_KEYS.accessToken);

export const getRefreshToken = () =>
  localStorage.getItem(STORAGE_KEYS.refreshToken);

export const setTokens = (access: string, refresh: string) => {
  localStorage.setItem(STORAGE_KEYS.accessToken, access);
  localStorage.setItem(STORAGE_KEYS.refreshToken, refresh);
};

export const clearTokens = () => {
  localStorage.removeItem(STORAGE_KEYS.accessToken);
  localStorage.removeItem(STORAGE_KEYS.refreshToken);
};