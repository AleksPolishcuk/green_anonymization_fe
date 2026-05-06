import type User from "shared/interfaces/User";

export type SessionResponse = {
  registered: boolean;
  user: User | null;
};

export type AuthState = {
  user: User | null;
  registered: boolean;
};
