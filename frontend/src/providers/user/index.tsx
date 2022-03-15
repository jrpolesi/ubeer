import React, { createContext, ReactNode, useState } from "react";
import { UserContextInterface, UserData } from "../../types/userContext";

export const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

export function UserProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | false>(false);

  const [user, setUser] = useState<UserData>({} as UserData);

  function updateToken(newToken: string) {
    setToken(newToken);
  }

  function updateUser(userUpdated: UserData) {
    setUser(userUpdated);
  }

  return (
    <UserContext.Provider value={{ updateUser, user, updateToken, token }}>
      {children}
    </UserContext.Provider>
  );
}
