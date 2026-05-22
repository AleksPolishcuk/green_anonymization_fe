import { Dashboard } from "components/Dashboard";
import WorkflowTour from "components/WorkflowTour";
import DriverStyles from "components/WorkflowTour/DriverStyles";
import { useAppSelector } from "store/hooks";

export default function DashboardPage() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <>
      <WorkflowTour user={user} />
      <DriverStyles />
      <Dashboard />
    </>
  );
}
