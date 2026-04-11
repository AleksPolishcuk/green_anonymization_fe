import axios, { AxiosError } from "axios";
import type { AxiosInstance } from "axios";
import type { ApiResponse } from "./typing/common";
import { ApiError } from "./typing/common";
import { getErrorMessage } from "shared/utils/error-messages";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const parseErrorResponse = (data: unknown): string => {
  if (!data || typeof data !== "object") {
    return "An unexpected error occurred";
  }

  const errorData = data as Record<string, unknown>;

  // Handle array of error messages
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

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    handleApiError(error);
  },
);

export const apiClient = {
  async get<T>(path: string): Promise<T> {
    try {
      const response = await axiosInstance.get<ApiResponse<T>>(path);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        handleApiError(error);
      }
      throw createApiError(
        error instanceof Error ? error.message : "An unexpected error occurred",
        500,
      );
    }
  },

  async post<T, D>(path: string, body: D): Promise<T> {
    try {
      const response = await axiosInstance.post<ApiResponse<T>>(path, body);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        handleApiError(error);
      }
      throw createApiError(
        error instanceof Error ? error.message : "An unexpected error occurred",
        500,
      );
    }
  },

  async put<T, D>(path: string, body: D): Promise<T> {
    try {
      const response = await axiosInstance.put<ApiResponse<T>>(path, body);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        handleApiError(error);
      }
      throw createApiError(
        error instanceof Error ? error.message : "An unexpected error occurred",
        500,
      );
    }
  },

  async delete<T>(path: string): Promise<T> {
    try {
      const response = await axiosInstance.delete<ApiResponse<T>>(path);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        handleApiError(error);
      }
      throw createApiError(
        error instanceof Error ? error.message : "An unexpected error occurred",
        500,
      );
    }
  },
};
