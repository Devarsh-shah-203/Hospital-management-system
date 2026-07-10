import { Outlet } from "react-router-dom";

function ProtectedRoute() {
  // Temporary until AuthContext is available
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : null;
}

export default ProtectedRoute;