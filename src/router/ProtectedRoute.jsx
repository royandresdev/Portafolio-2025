import { Navigate, Outlet } from "react-router";
import useApplication from "../hooks/useApplication";

export default function ProtectedRoute() {
  const { user } = useApplication();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
