import { Dashboard } from "components/Dashboard";
import { useAuthGuard } from "shared/hooks/useAuthGuard";

export default function DashboardPage() {
  useAuthGuard("registered");

  return <Dashboard />;
}
