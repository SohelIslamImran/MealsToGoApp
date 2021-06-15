import React, { useState, createContext, useEffect, useContext } from "react";

import { LocationContext } from "../location/LocationContext";
import restaurantsRequest from "./restaurantsService";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = async (loc) => {
    setIsLoading(true);

    try {
      const results = await restaurantsRequest(loc);
      setTimeout(() => {
        setRestaurants(results);
        setIsLoading(false);
      }, 2000);
      // setRestaurants(results);
      // setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    retrieveRestaurants(location);
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

export default RestaurantsContextProvider;
