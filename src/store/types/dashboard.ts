export type TrendType = "up" | "down" | "stable" | "excellent";

export type StatCardIconId =
  | "icon-document"
  | "icon-shield"
  | "icon-activity"
  | "icon-chart";

export interface StatCardData {
  id: string;
  iconId: StatCardIconId;
  value: string;
  label: string;
  trendPercent: string;
  trendType: TrendType;
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

export type DashboardState = {
  data: DashboardStats;
  loading: boolean;
  error: string | null;
};
