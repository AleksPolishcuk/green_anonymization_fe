const blue = "#3B82F6";
const green = "#10B981";
const amber = "#F59E0B";
const red = "#EF4444";

export const COMPLIANCE_CARDS = [
  {
    id: "hipaa",
    accentColor: blue,
    entityCount: 17,
  },
  {
    id: "euGdpr",
    accentColor: green,
    entityCount: 11,
  },
  {
    id: "ukGdpr",
    accentColor: amber,
    entityCount: 9,
  },
  {
    id: "swissFadp",
    accentColor: red,
    entityCount: 8,
  },
] as const;

export const DEFAULT_PHONE_COUNTRY_CODE = "US";

export const API_BASE_URL = import.meta.env.VITE_API_URL;

export const ENDPOINTS = {
  login: "/auth/login",
  refresh: "/auth/refresh",
  verify: "/auth/verify?token=",
  register: "/user/register",
  me: "/user/me",
  session: "/user/session",
} as const;
