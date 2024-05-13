import React, { PropsWithChildren } from "react";

type Context = {
  userLoggedIn: boolean;
};

export const UserContext = React.createContext({} as Context);

export const UserContextProvider = ({children}: PropsWithChildren) => {
  const value = { userLoggedIn: true};
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}