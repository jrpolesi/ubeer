import React, { createContext, ReactNode, useEffect, useState } from "react";
import api from "../../services/api";
import { UserContextInterface, UserData } from "../../types/userContext";

export const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    JSON.parse(localStorage.getItem("@uBeer:token") || "null")
  );

  const [user, setUser] = useState<UserData | null>({} as UserData);

  useEffect(() => {
    const userId = localStorage.getItem("@uBeer:user");

    if (token && userId) {
      api
        .get(`/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          updateUser(response.data);
        })
        .catch(() => {
          logOut();
        });
    } else {
      logOut();
    }
  }, [token]);

  function updateToken(newToken: string) {
    setToken(newToken);

    localStorage.setItem("@uBeer:token", JSON.stringify(newToken));
  }

  function updateUser(userUpdated: UserData) {
    localStorage.setItem("@uBeer:user", userUpdated.id);

    setUser(userUpdated);
  }

  function logOut() {
    setToken(null);
    setUser(null);

    localStorage.removeItem("@uBeer:token");
    localStorage.removeItem("@uBeer:user");
  }

  return (
    <UserContext.Provider
      value={{ updateUser, user, updateToken, token, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
