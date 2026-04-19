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
