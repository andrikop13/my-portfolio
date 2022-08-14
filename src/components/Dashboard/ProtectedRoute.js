import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ element, path, ...rest }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated")); // Use contextApi instead of this

  return isAuthenticated ? <Outlet /> : <Navigate to="login" />;
};

export default ProtectedRoute;
