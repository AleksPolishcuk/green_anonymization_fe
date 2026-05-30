import { Typography } from "@mui/material";

import {
  CHART_ROW_COLS_EQUAL,
  CHART_ROW_COLS_WIDE,
} from "constants/DashboardPage";
import { Loader } from "shared/ui/Loader";
import { ComplianceDonut } from "components/Dashboard/charts/ComplianceDonut";
import { ConfidenceScoreChart } from "components/Dashboard/charts/ConfidenceScoreChart";
import { DashboardHeader } from "components/Dashboard/charts/DashboardHeader";
import { DateRangeFilter } from "components/Dashboard/charts/DateRangeFilter";
import { DeIdMethodChart } from "components/Dashboard/charts/DeIdMethodChart";
import { EntityTypesChart } from "components/Dashboard/charts/EntityTypesChart";
import { ProcessingHistoryChart } from "components/Dashboard/charts/ProcessingHistoryChart";
import { RecentActivity } from "components/Dashboard/charts/RecentActivity";
import { StatCards } from "components/Dashboard/charts/StatCards";
import { SubscriptionUsage } from "components/Dashboard/charts/SubscriptionUsage";
import {
  ChartsLayout,
  ChartRow,
  LoaderWrapper,
  MainContent,
} from "components/Dashboard/styles";

import { useDashboard } from "./hooks/useDashboard";

export const Dashboard = () => {
  const { data, error, period, isInitialLoad } = useDashboard();

  if (isInitialLoad) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  if (error) {
    return (
      <LoaderWrapper>
        <Typography color="error">{error}</Typography>
      </LoaderWrapper>
    );
  }

  return (
    <MainContent>
      <DashboardHeader />

      <DateRangeFilter />

      <SubscriptionUsage />

      <StatCards data={data.statCards} />

      <ChartsLayout>
        <ChartRow $cols={CHART_ROW_COLS_WIDE}>
          <EntityTypesChart data={data.entityTypes} />
          <ComplianceDonut data={data.complianceFrameworks} />
        </ChartRow>

        <ChartRow $cols={CHART_ROW_COLS_EQUAL}>
          <ProcessingHistoryChart data={data.processingHistory} />
          <DeIdMethodChart data={data.deIdMethods} />
        </ChartRow>

        <ChartRow $cols={CHART_ROW_COLS_WIDE}>
          <ConfidenceScoreChart data={data.confidenceScores} />
          <RecentActivity data={data.recentActivity} period={period} />
        </ChartRow>
      </ChartsLayout>
    </MainContent>
  );
};
