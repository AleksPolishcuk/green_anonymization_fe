import { COMPLIANCE_CARDS } from "../constants/complianceCards";
import type { UseComplianceSectionReturn } from "../types";

export const useComplianceSection = (): UseComplianceSectionReturn => {
  return { cards: COMPLIANCE_CARDS };
};
