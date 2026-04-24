export const COMPLIANCE_CARDS = [
  {
    id: "hipaa",
    accentKey: "blue",
    entityCount: 17,
  },
  {
    id: "euGdpr",
    accentKey: "green",
    entityCount: 11,
  },
  {
    id: "ukGdpr",
    accentKey: "amber",
    entityCount: 9,
  },
  {
    id: "swissFadp",
    accentKey: "red",
    entityCount: 8,
  },
] as const;

export type AccentKey = (typeof COMPLIANCE_CARDS)[number]["accentKey"];

export const DEFAULT_PHONE_COUNTRY_CODE = "US";

export const API_BASE_URL = import.meta.env.VITE_API_URL;
