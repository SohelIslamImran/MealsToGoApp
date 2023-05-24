import React, { useState, createContext, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    firebase.auth().onAuthStateChanged(({ email }) => {
      setLoggedInUser({ isSignedIn: true, email });
      setIsLoading(true);
    });
  }, [loggedInUser]);

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
