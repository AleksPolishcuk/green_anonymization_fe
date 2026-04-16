import axios, { AxiosError } from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import { ApiError } from "./typing/common";
import { getErrorMessage } from "shared/utils/error-messages";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

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

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
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

  post<T, D>(path: string, body: D): Promise<T> {
    return request<T>(axiosInstance.post(path, body));
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
