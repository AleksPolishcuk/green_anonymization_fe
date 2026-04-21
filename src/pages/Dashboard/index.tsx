import { DashboardView } from "features/Dashboard";
import { useAuthGuard } from "shared/hooks/useAuthGuard";

export default function Dashboard() {
  useAuthGuard("registered");

  return <DashboardView />;
}
