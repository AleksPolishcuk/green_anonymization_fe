import type { DeIdMethodData } from "store/types/dashboard";

export const DE_ID_METHODS_MOCK: DeIdMethodData[] = [
  { method: "Redact", count: 220 },
  { method: "Replace", count: 195 },
  { method: "Mask", count: 140 },
  { method: "Hash", count: 140 },
  { method: "Synthetic", count: 75 },
];
