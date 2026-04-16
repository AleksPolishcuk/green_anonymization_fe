import { useAuthGuard } from "shared/hooks/useAuthGuard";
import { useAppSelector } from "store/hooks";

export default function Dashboard() {
  useAuthGuard("registered");
  const user = useAppSelector((state) => state.auth?.user);

  return (
    <div>
      <h1>{user?.email}</h1>
    </div>
  );
}
