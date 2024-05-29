import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";

type Context = {
  userLoggedIn: boolean;
  setUserLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export const UserContext = createContext({} as Context);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const value = { userLoggedIn, setUserLoggedIn };
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}