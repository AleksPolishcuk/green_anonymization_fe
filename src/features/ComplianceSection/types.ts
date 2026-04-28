import type { COMPLIANCE_CARDS } from "constants/MainPages";

export type ComplianceCard = (typeof COMPLIANCE_CARDS)[number];

export type UseComplianceSectionReturn = {
  cards: readonly ComplianceCard[];
};
