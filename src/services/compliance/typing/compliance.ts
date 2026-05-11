export interface ComplianceFramework {
  code: string;
  name: string;
  description: string;
  entityTypesCount: number;
}

export interface SelectComplianceRequest {
  frameworkCode: string;
}

export interface ComplianceSelection {
  uuid: string;
  userId: string;
  frameworkCode: string;
}

export interface ComplianceSelectionResponse extends ComplianceSelection {
  framework: ComplianceFramework | null;
}
