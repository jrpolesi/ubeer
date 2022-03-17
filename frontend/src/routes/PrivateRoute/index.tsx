import React, { ReactNode, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../providers/user";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useContext(UserContext);

  const location = useLocation();

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
