import type { COMPLIANCE_FRAMEWORKS } from "constants/MainPages";

export type ComplianceCard = (typeof COMPLIANCE_FRAMEWORKS)[number];

export type UseComplianceSectionReturn = {
  cards: readonly ComplianceCard[];
};
