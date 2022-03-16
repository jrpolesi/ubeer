import React, { ReactNode, useContext } from "react";
import { UserContext } from "../../providers/user";

export function PrivateRoute({ children }: { children: ReactNode }) {
  const { token, logOut } = useContext(UserContext);

  if (!token) {
    logOut();
  }

  return <>{children}</>;
}
