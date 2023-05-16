import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // const { auth } = useAuth();
  const auth = localStorage.getItem('login')
  const data = localStorage.getItem('userData')


  if (!auth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;