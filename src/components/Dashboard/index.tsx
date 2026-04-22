import { useAppSelector } from "store/hooks";

import { ComplianceDonut } from "./components/ComplianceDonut";
import { ConfidenceScoreChart } from "./components/ConfidenceScoreChart";
import { DashboardHeader } from "./components/DashboardHeader";
import { DeIdMethodChart } from "./components/DeIdMethodChart";
import { EntityTypesChart } from "./components/EntityTypesChart";
import { ProcessingHistoryChart } from "./components/ProcessingHistoryChart";
import { RecentActivity } from "./components/RecentActivity";
import { StatCards } from "./components/StatCards";
import { ChartsLayout, ChartRow, MainContent } from "./styles";

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
