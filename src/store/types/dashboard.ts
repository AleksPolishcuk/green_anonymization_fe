export type StatCardIconId =
  | "icon-document"
  | "icon-shield"
  | "icon-activity"
  | "icon-chart";

export interface StatCardData {
  id: string;
  iconId: StatCardIconId;
  value: string;
  trend: number | null;
}

export interface EntityTypeDatum {
  name: string;
  count: number;
}

export interface ComplianceFrameworkData {
  name: string;
  value: number;
  color: string;
}

export interface ProcessingHistoryPoint {
  date: string;
  documents: number;
  entities: number;
}

export interface DeIdMethodData {
  method: string;
  count: number;
}

export interface ConfidenceRangeData {
  range: string;
  count: number;
}

export interface RecentActivityItem {
  id: string;
  filename: string;
  entities: number;
  timeAgo: string;
}

export interface DashboardStats {
  statCards: StatCardData[];
  entityTypes: EntityTypeDatum[];
  complianceFrameworks: ComplianceFrameworkData[];
  processingHistory: ProcessingHistoryPoint[];
  deIdMethods: DeIdMethodData[];
  confidenceScores: ConfidenceRangeData[];
  recentActivity: RecentActivityItem[];
}

export type PresetDays = 7 | 14 | 30;

export type DashboardPeriod =
  | { type: "preset"; days: PresetDays }
  | { type: "custom"; from: string; to: string };

export type DashboardState = {
  data: DashboardStats;
  period: DashboardPeriod;
  loading: boolean;
  error: string | null;
};
