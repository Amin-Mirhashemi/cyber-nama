import pt from "prop-types";
import Cookies from "js-cookie";
import { apiGetUser } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import { createContext, useState, useMemo } from "react";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("token"));

  const getUser = () => {
    if (!isLoggedIn || user) {
      return null;
    }
    return apiGetUser();
  };

  useQuery({
    queryKey: ["user", isLoggedIn],
    queryFn: getUser,
    onSuccess: (res) => {
      if (res) setUser(res.data);
    },
  });

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
