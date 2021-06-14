import React, { useState, createContext, useEffect, useMemo } from "react";
import restaurantsRequest from "./restaurantsService";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = async () => {
    setIsLoading(true);

    try {
      const results = await restaurantsRequest();
      setTimeout(() => {
        setRestaurants(results);
        return setIsLoading(false);
      }, 2000);
      // setRestaurants(results);
      // setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };
  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

export default RestaurantsContextProvider;
