import { useAppSelector } from "store/hooks";

import {
  CHART_ROW_COLS_EQUAL,
  CHART_ROW_COLS_WIDE,
} from "constants/DashboardPage";
import { ComplianceDonut } from "components/Dashboard/charts/ComplianceDonut";
import { ConfidenceScoreChart } from "components/Dashboard/charts/ConfidenceScoreChart";
import { DashboardHeader } from "components/Dashboard/charts/DashboardHeader";
import { DeIdMethodChart } from "components/Dashboard/charts/DeIdMethodChart";
import { EntityTypesChart } from "components/Dashboard/charts/EntityTypesChart";
import { ProcessingHistoryChart } from "components/Dashboard/charts/ProcessingHistoryChart";
import { RecentActivity } from "components/Dashboard/charts/RecentActivity";
import { StatCards } from "components/Dashboard/charts/StatCards";
import {
  ChartsLayout,
  ChartRow,
  MainContent,
} from "components/Dashboard/styles";

export const Dashboard = () => {
  const data = useAppSelector((state) => state.dashboard.data);

  return (
    <MainContent>
      <DashboardHeader />

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
          <RecentActivity data={data.recentActivity} />
        </ChartRow>
      </ChartsLayout>
    </MainContent>
  );
};
