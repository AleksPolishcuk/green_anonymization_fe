import axios, { AxiosError } from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ApiError } from "./typing/common";
import { getErrorMessage } from "shared/utils/error-messages";
import {
  clearTokens,
  getAccessToken,
  getRefreshToken,
  setTokens,
} from "features/Auth/utils/authTokens";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

let isRefreshing = false;
let refreshPromise: Promise<string | null> | null = null;

const parseErrorResponse = (data: unknown): string => {
  if (!data || typeof data !== "object") {
    return "An unexpected error occurred";
  }

  const errorData = data as Record<string, unknown>;

  if (Array.isArray(errorData.message)) {
    return errorData.message.join(", ");
  }

  if (typeof errorData.message === "string") {
    return errorData.message;
  }

  if (typeof errorData.error === "string") {
    return errorData.error;
  }

  return "An unexpected error occurred";
};

const createApiError = (message: string, status: number): ApiError => {
  return new ApiError(message, status);
};

const handleApiError = (error: AxiosError): never => {
  const status = error.response?.status || 500;
  const backendMessage = parseErrorResponse(error.response?.data);
  const userMessage = getErrorMessage(status, backendMessage);

  throw createApiError(userMessage, status);
};

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const tryRefresh = async (): Promise<string | null> => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return null;

  try {
    const res = await axios.post(`${API_URL}/auth/refresh`, {
      refreshToken,
    });

    const data = res.data;

    if (!data?.accessToken) return null;

    setTokens(data.accessToken, refreshToken);

    return data.accessToken;
  } catch {
    return null;
  }
};

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAccessToken();

  if (token && !config.headers?.Authorization) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;
        refreshPromise = tryRefresh().finally(() => {
          isRefreshing = false;
        });
      }

      const newAccessToken = await refreshPromise;

      if (!newAccessToken) {
        clearTokens();
        return Promise.reject(error);
      }

      if (originalRequest.headers) {
        originalRequest.headers.set(
          "Authorization",
          `Bearer ${newAccessToken}`,
        );
      }

      return axiosInstance(originalRequest);
    }

    handleApiError(error);
  },
);

const request = async <T>(
  promise: Promise<AxiosResponse<unknown>>,
): Promise<T> => {
  try {
    const response = await promise;
    return response.data as T;
  } catch (error) {
    if (error instanceof AxiosError) {
      handleApiError(error);
    }

    throw createApiError(
      error instanceof Error ? error.message : "An unexpected error occurred",
      500,
    );
  }
};

export const apiClient = {
  get<T>(path: string): Promise<T> {
    return request<T>(axiosInstance.get(path));
  },

  post<T, D>(path: string, body: D, config?: AxiosRequestConfig): Promise<T> {
    const isFormData = body instanceof FormData;

    return request<T>(
      axiosInstance.post(path, body, {
        headers: isFormData
          ? { "Content-Type": "multipart/form-data" }
          : undefined,
        ...config,
      }),
    );
  },

  put<T, D>(path: string, body: D): Promise<T> {
    return request<T>(axiosInstance.put(path, body));
  },

  patch<T, D>(path: string, body: D): Promise<T> {
    return request<T>(axiosInstance.patch(path, body));
  },

  delete<T>(path: string): Promise<T> {
    return request<T>(axiosInstance.delete(path));
  },
};
