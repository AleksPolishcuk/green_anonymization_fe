import { apiClient } from "services/api";
import type User from "shared/interfaces/User";
import type {
  VerifyResponse,
  SessionResponse,
  UpdateWorkflowTourPayload,
} from "./typing";

export const authService = {
  login(email: string) {
    return apiClient.post<{ message: string }, { destination: string }>(
      "/auth/login",
      { destination: email },
    );
  },

  loginGoogle() {
    return apiClient.get("/auth/google");
  },

  verify(token: string) {
    return apiClient.get<VerifyResponse>(`/auth/verify?token=${token}`);
  },

  refresh(refreshToken: string) {
    return apiClient.post<{ accessToken: string }, { refreshToken: string }>(
      "/auth/refresh",
      { refreshToken },
    );
  },

  getSession() {
    return apiClient.get<SessionResponse>("/user/session");
  },

  register(data: { firstName: string; lastName: string; companyName: string }) {
    return apiClient.post<User, typeof data>("/user/register", data);
  },

  updateWorkflowTour(data: UpdateWorkflowTourPayload) {
    return apiClient.patch<User, UpdateWorkflowTourPayload>(
      "/user/workflow-tour",
      data,
    );
  },
};
