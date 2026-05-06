import { COMPLIANCE_FRAMEWORKS } from "constants/MainPages";
import type { UseComplianceSectionReturn } from "./types";

export const useComplianceSection = (): UseComplianceSectionReturn => {
  return { cards: COMPLIANCE_FRAMEWORKS };
};
