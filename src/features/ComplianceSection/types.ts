import type { COMPLIANCE_CARDS } from "./constants/complianceCards";

export type ComplianceCard = (typeof COMPLIANCE_CARDS)[number];

export type UseComplianceSectionReturn = {
  cards: readonly ComplianceCard[];
};
