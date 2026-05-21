import type User from "shared/interfaces/User";

export type SessionResponse = {
  registered: boolean;
  user: User | null;
};

export type VerifyResponse = {
  message: string;
  accessToken: string;
  refreshToken: string;
};

export type UpdateWorkflowTourPayload = Partial<{
  skipped: boolean;
  dashboard: boolean;
  deidentification: boolean;
  results: boolean;
  synthetic: boolean;
}>;
