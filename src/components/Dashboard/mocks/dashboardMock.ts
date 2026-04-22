import { COMPLIANCE_COLORS } from "constants/DashboardPage";
import type { DashboardStats } from "components/Dashboard/types";

const entityRows = [
  { name: "PERSON", count: 160 },
  { name: "DATE_TIME", count: 120 },
  { name: "LOCATION", count: 90 },
  { name: "PHONE", count: 70 },
  { name: "EMAIL", count: 86 },
  { name: "MRN", count: 45 },
  { name: "SSN", count: 30 },
  { name: "OTHER", count: 15 },
] as const;

export const DASHBOARD_MOCK: DashboardStats = {
  statCards: [
    {
      id: "total-docs",
      iconId: "icon-document",
      value: "185",
      label: "Total Documents",
      trendPercent: "10%",
      trendType: "up",
    },
    {
      id: "entities",
      iconId: "icon-shield",
      value: "2,471",
      label: "Entities Detected",
      trendPercent: "8%",
      trendType: "up",
    },
    {
      id: "avg-entities",
      iconId: "icon-activity",
      value: "13.4",
      label: "Avg. Entities/Doc",
      trendPercent: "100%",
      trendType: "stable",
    },
    {
      id: "success-rate",
      iconId: "icon-chart",
      value: "98.7%",
      label: "Success Rate",
      trendPercent: "100%",
      trendType: "excellent",
    },
  ],

  entityTypes: entityRows.map((row) => ({ ...row })),

  complianceFrameworks: [
    { name: "HIPAA", value: 52.1, color: COMPLIANCE_COLORS.HIPAA },
    { name: "EU GDPR", value: 22.8, color: COMPLIANCE_COLORS["EU GDPR"] },
    { name: "UK GDPR", value: 13.9, color: COMPLIANCE_COLORS["UK GDPR"] },
    { name: "FADP", value: 11.2, color: COMPLIANCE_COLORS.FADP },
  ],

  processingHistory: [
    { date: "03/11", documents: 2, entities: 160 },
    { date: "03/12", documents: 9, entities: 210 },
    { date: "03/13", documents: 18, entities: 270 },
    { date: "03/14", documents: 14, entities: 310 },
    { date: "03/15", documents: 27, entities: 390 },
    { date: "03/16", documents: 38, entities: 490 },
    { date: "03/17", documents: 38, entities: 600 },
  ],

  deIdMethods: [
    { method: "Redact", count: 220 },
    { method: "Replace", count: 195 },
    { method: "Mask", count: 140 },
    { method: "Hash", count: 140 },
    { method: "Synthetic", count: 75 },
  ],

  confidenceScores: [
    { range: "90-100%", count: 360 },
    { range: "80-90%", count: 270 },
    { range: "70-80%", count: 180 },
    { range: "60-70%", count: 90 },
    { range: "<60%", count: 40 },
  ],

  recentActivity: [
    {
      id: "1",
      filename: "patient_notes_march.txt",
      entities: 47,
      timeAgo: "2 min ago",
    },
    {
      id: "2",
      filename: "clinical_records_Q1.txt",
      entities: 123,
      timeAgo: "18 min ago",
    },
    {
      id: "3",
      filename: "discharge_summary.txt",
      entities: 31,
      timeAgo: "1 hr ago",
    },
    {
      id: "4",
      filename: "lab_results_batch.txt",
      entities: 89,
      timeAgo: "3 hrs ago",
    },
    {
      id: "5",
      filename: "surgery_report_april.txt",
      entities: 55,
      timeAgo: "5 hrs ago",
    },
  ],
};
