import React, { useState, useEffect, createContext } from "react";

import locationRequest from "./locationService";

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (keyword.length) {
      setIsLoading(true);

      const getLocation = async () => {
        try {
          const result = await locationRequest(keyword.toLowerCase());
          setLocation(result);
          setIsLoading(false);
        } catch (err) {
          setError(err);
          setIsLoading(false);
        }
      };
      getLocation();
    }
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        setIsLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
