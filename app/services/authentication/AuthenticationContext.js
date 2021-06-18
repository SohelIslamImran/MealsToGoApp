import React, { useState, createContext, useEffect } from "react";
import useAuth from "./useAuth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    //useAuth.getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: loggedInUser,
        setLoggedInUser,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
