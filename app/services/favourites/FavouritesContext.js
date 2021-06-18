import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../authentication/AuthenticationContext";

export const FavouritesContext = createContext();

const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (err) {
      console.log("error storing", err);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value) {
        setFavourites(JSON.parse(value));
      }
    } catch (err) {
      console.log("error loading", err);
    }
  };

  const addToFavourite = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const removeFromFavourite = (restaurant) => {
    const newFavourites = favourites.filter(
      (fav) => fav.placeId !== restaurant.placeId
    );

    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (user && user.uid) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favourites.length) {
      saveFavourites(favourites, user.uid);
    }
  }, [user, favourites]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourite,
        removeFromFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
