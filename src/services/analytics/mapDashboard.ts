import {
  COMPLIANCE_COLORS,
  FRAMEWORK_CODE_TO_NAME,
  STAT_CARD_IDS,
} from "constants/DashboardPage";
import type { DashboardStats } from "store/types/dashboard";

import type { DashboardDto } from "./typing/analytics";

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

function capitalizeFirst(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function mapDashboard(dto: DashboardDto): DashboardStats {
  const {
    stats,
    entityTypes,
    complianceUsage,
    processingHistory,
    confidenceDistribution,
    recentActivity,
    deIdMethodUsage,
  } = dto;
  const { trends } = stats;

  return {
    statCards: [
      {
        id: STAT_CARD_IDS.totalDocs,
        iconId: "icon-document",
        value: stats.totalDocuments.toLocaleString("en-US"),
        trend: trends.documentsVsLastMonth,
      },
      {
        id: STAT_CARD_IDS.entities,
        iconId: "icon-shield",
        value: stats.totalEntities.toLocaleString("en-US"),
        trend: trends.entitiesVsLastMonth,
      },
      {
        id: STAT_CARD_IDS.avgEntities,
        iconId: "icon-activity",
        value: stats.avgEntitiesPerDoc.toFixed(1),
        trend: null,
      },
      {
        id: STAT_CARD_IDS.successRate,
        iconId: "icon-chart",
        value: `${stats.successRate.toFixed(1)}%`,
        trend: trends.successRateVsLastMonth,
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
          color: COMPLIANCE_COLORS[name],
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

    deIdMethods: deIdMethodUsage.map(({ method, count }) => ({
      method: capitalizeFirst(method),
      count,
    })),
  };
}
