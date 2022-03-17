import React, { ReactNode, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../providers/user";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useContext(UserContext);

  const location = useLocation();

  if (token) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
