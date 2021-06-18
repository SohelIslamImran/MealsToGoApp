import { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { AuthContext } from "./AuthenticationContext";

import firebaseConfig from "./firebaseConfig";

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const useAuth = () => {
  const { setLoggedInUser, setIsLoading, setError } = useContext(AuthContext);

  const getUser = () => {
    setIsLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedInUser(user);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  };

  const logIn = (email, password) => {
    setIsLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setLoggedInUser(user);
        setIsLoading(false);
      })
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
      .then((user) => {
        setLoggedInUser(user);
        setIsLoading(false);
      })
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

  const handleResponse = (res) => {
    const { displayName, photoURL, email } = res.user;
    const signedInUser = {
      isSignedIn: true,
      name: displayName,
      email: email,
      photo: photoURL || "https://i.ibb.co/5GzXkwq/user.png",
    };
    return signedInUser;
  };

  return { getUser, logIn, register, logOut };
};

export default useAuth;
