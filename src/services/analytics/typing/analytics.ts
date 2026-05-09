export interface TrendsDto {
  documentsVsLastMonth: number | null;
  entitiesVsLastMonth: number | null;
}

export interface DashboardStatsDto {
  totalDocuments: number;
  totalEntities: number;
  avgEntitiesPerDoc: number;
  successRate: number;
  trends: TrendsDto;
}

export interface EntityTypeStatDto {
  entityType: string;
  count: number;
}

export interface ComplianceUsageDto {
  frameworkCode: string;
  count: number;
  percentage: number;
}

export interface ProcessingHistoryDto {
  date: string;
  documents: number;
  entities: number;
}

export interface ConfidenceRangeDto {
  range: string;
  count: number;
}

export interface RecentActivityDto {
  id: string;
  fileName: string;
  frameworkCode: string;
  entityCount: number;
  createdAt: string;
}

export interface DashboardDto {
  stats: DashboardStatsDto;
  entityTypes: EntityTypeStatDto[];
  complianceUsage: ComplianceUsageDto[];
  processingHistory: ProcessingHistoryDto[];
  confidenceDistribution: ConfidenceRangeDto[];
  recentActivity: RecentActivityDto[];
}
