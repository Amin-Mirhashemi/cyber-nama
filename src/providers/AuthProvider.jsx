import pt from "prop-types";
import Cookies from "js-cookie";
import { createContext, useState, useMemo } from "react";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("token"));

  const authData = useMemo(() => {
    return {
      user,
      setUser,
      isLoggedIn,
      setIsLoggedIn,
    };
  }, [user, setUser, isLoggedIn, setIsLoggedIn]);

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: pt.element,
};

export default AuthProvider;
