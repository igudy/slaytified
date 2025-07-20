import { useGetUserQuery } from "../features/user/userApi";
import DashboardCard from "./components/DashboardCard";


export default function Dashboard() {
  const { data, isLoading } = useGetUserQuery();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {isLoading ? "Loading..." : <DashboardCard user={data} />}
    </div>
  );
}
