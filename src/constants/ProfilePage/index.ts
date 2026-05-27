export type TourStep =
  | "dashboard"
  | "deidentification"
  | "results"
  | "synthetic";

export const TOUR_STEPS: TourStep[] = [
  "dashboard",
  "deidentification",
  "results",
  "synthetic",
];

export const TOUR_ROUTES: Record<TourStep, string> = {
  dashboard: "/dashboard",
  deidentification: "/deidentification",
  results: "/deidentification",
  synthetic: "/syntheticdata",
};

export const MAX_FILE_SIZE = 5 * 1024 * 1024;
export const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const MAX_NAME_LENGTH = 255;
export const NAME_PATTERN = /^[\p{L}\p{M}'\- ]+$/u;
