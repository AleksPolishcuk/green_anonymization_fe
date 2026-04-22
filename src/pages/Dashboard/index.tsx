import { DashboardView } from "features/Dashboard";
import { DashboardFrame, DashboardShell } from "features/Dashboard/styles";
import { useAuthGuard } from "shared/hooks/useAuthGuard";

import { TempSidebar } from "./_TempSidebar";

export default function Dashboard() {
  useAuthGuard("registered");

  return (
    <DashboardShell>
      <DashboardFrame>
        <TempSidebar />
        <DashboardView />
      </DashboardFrame>
    </DashboardShell>
  );
}
