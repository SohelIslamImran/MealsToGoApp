import { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { AuthContext } from "./AuthenticationContext";

import firebaseConfig from "./firebaseConfig";

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const useAuth = () => {
  const { setLoggedInUser, setIsLoading, setError } = useContext(AuthContext);

  const logIn = (email, password) => {
    setIsLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => setUser(user))
      .catch((err) => {
        setError(err.toString());
        setIsLoading(false);
      });
  };

  const register = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => setUser(user))
      .catch((err) => {
        setError(err.toString());
        setIsLoading(false);
      });
  };

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setLoggedInUser(null);
        setError(null);
      });
  };

  const setUser = ({ email }) => {
    const signedInUser = { isSignedIn: true, email };
    setLoggedInUser(signedInUser);
    setIsLoading(false);
  };

  return { logIn, register, logOut };
};

export default useAuth;
