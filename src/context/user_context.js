import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const [myUser, setMyuser] = useState(null);
  useEffect(() => {
    setMyuser(user);
  }, [user]);
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     setMyuser(user);
  //   } else {
  //     setMyuser(false);
  //   }
  // }, [isAuthenticated]);

  return (
    <UserContext.Provider value={{ logout, loginWithRedirect, myUser }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
