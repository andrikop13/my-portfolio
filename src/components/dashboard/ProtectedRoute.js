import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { URL_CONFIG } from "@config";
import { AuthContext } from "@store";

const ProtectedRoute = ({ element, path, ...rest }) => {
  const authCtx = useContext(AuthContext);
  const isAuthenticated = authCtx.isLoggedIn;

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={URL_CONFIG.baseURLs.login} />
  );
};

export default ProtectedRoute;
