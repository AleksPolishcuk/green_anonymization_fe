import {
  COMPLIANCE_COLORS,
  FRAMEWORK_CODE_TO_NAME,
  STAT_CARD_IDS,
  STAT_CARD_LABELS,
} from "constants/DashboardPage";
import type { DashboardStats, TrendType } from "store/types/dashboard";

import type { DashboardDto } from "./typing/analytics";

function getTrendType(value: number | null): TrendType {
  if (value === null || value === 0) return "stable";
  return value > 0 ? "up" : "down";
}

function formatTrendPercent(value: number | null): string {
  if (value === null) return "—";
  return `${Math.abs(Math.round(value))}%`;
}

const MONTH_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

function formatDate(isoDate: string): string {
  const [, month, day] = isoDate.split("-");
  const monthName = MONTH_SHORT[parseInt(month, 10) - 1] ?? month;
  return `${parseInt(day, 10)} ${monthName}`;
}

function formatTimeAgo(isoString: string): string {
  const diffMin = Math.floor(
    (Date.now() - new Date(isoString).getTime()) / 60_000,
  );
  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin} min ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr === 1 ? "1 hr" : `${diffHr} hrs`} ago`;
  const diffDay = Math.floor(diffHr / 24);
  return `${diffDay === 1 ? "1 day" : `${diffDay} days`} ago`;
}

export function mapDashboard(
  dto: DashboardDto,
): Omit<DashboardStats, "deIdMethods"> {
  const {
    stats,
    entityTypes,
    complianceUsage,
    processingHistory,
    confidenceDistribution,
    recentActivity,
  } = dto;
  const { trends } = stats;

  return {
    statCards: [
      {
        id: STAT_CARD_IDS.totalDocs,
        iconId: "icon-document",
        value: stats.totalDocuments.toLocaleString("en-US"),
        label: STAT_CARD_LABELS.totalDocs,
        trendPercent: formatTrendPercent(trends.documentsVsLastMonth),
        trendType: getTrendType(trends.documentsVsLastMonth),
      },
      {
        id: STAT_CARD_IDS.entities,
        iconId: "icon-shield",
        value: stats.totalEntities.toLocaleString("en-US"),
        label: STAT_CARD_LABELS.entities,
        trendPercent: formatTrendPercent(trends.entitiesVsLastMonth),
        trendType: getTrendType(trends.entitiesVsLastMonth),
      },
      {
        id: STAT_CARD_IDS.avgEntities,
        iconId: "icon-activity",
        value: stats.avgEntitiesPerDoc.toFixed(1),
        label: STAT_CARD_LABELS.avgEntities,
        trendPercent: "—",
        trendType: "stable",
      },
      {
        id: STAT_CARD_IDS.successRate,
        iconId: "icon-chart",
        value: `${stats.successRate.toFixed(1)}%`,
        label: STAT_CARD_LABELS.successRate,
        trendPercent: "—",
        trendType: "excellent",
      },
    ],

    entityTypes: entityTypes.map(({ entityType, count }) => ({
      name: entityType,
      count,
    })),

    complianceFrameworks: complianceUsage.map(
      ({ frameworkCode, percentage }) => {
        const name = FRAMEWORK_CODE_TO_NAME[frameworkCode] ?? frameworkCode;
        return {
          name,
          value: percentage,
          color: COMPLIANCE_COLORS[name] ?? "#cccccc",
        };
      },
    ),

    processingHistory: processingHistory.map(
      ({ date, documents, entities }) => ({
        date: formatDate(date),
        documents,
        entities,
      }),
    ),

    confidenceScores: confidenceDistribution.map(({ range, count }) => ({
      range: `${range}%`,
      count,
    })),

    recentActivity: recentActivity.map(
      ({ id, fileName, entityCount, createdAt }) => ({
        id,
        filename: fileName,
        entities: entityCount,
        timeAgo: formatTimeAgo(createdAt),
      }),
    ),
  };
}
