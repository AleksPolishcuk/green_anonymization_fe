import { useAppSelector } from "store/hooks";

export default function Dashboard() {
  const user = useAppSelector((state) => state.auth?.user);

  return (
    <div>
      <h1>{user?.email}</h1>
    </div>
  );
}
