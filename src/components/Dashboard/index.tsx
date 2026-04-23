import { useAppSelector } from "store/hooks";

import { ComplianceDonut } from "components/Dashboard/components/ComplianceDonut";
import { ConfidenceScoreChart } from "components/Dashboard/components/ConfidenceScoreChart";
import { DashboardHeader } from "components/Dashboard/components/DashboardHeader";
import { DeIdMethodChart } from "components/Dashboard/components/DeIdMethodChart";
import { EntityTypesChart } from "components/Dashboard/components/EntityTypesChart";
import { ProcessingHistoryChart } from "components/Dashboard/components/ProcessingHistoryChart";
import { RecentActivity } from "components/Dashboard/components/RecentActivity";
import { StatCards } from "components/Dashboard/components/StatCards";
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
        <ChartRow $cols="1.70fr 1fr">
          <EntityTypesChart data={data.entityTypes} />
          <ComplianceDonut data={data.complianceFrameworks} />
        </ChartRow>

        <ChartRow $cols="1fr 1fr">
          <ProcessingHistoryChart data={data.processingHistory} />
          <DeIdMethodChart data={data.deIdMethods} />
        </ChartRow>

        <ChartRow $cols="1.55fr 1fr">
          <ConfidenceScoreChart data={data.confidenceScores} />
          <RecentActivity data={data.recentActivity} />
        </ChartRow>
      </ChartsLayout>
    </MainContent>
  );
};
