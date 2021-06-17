import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../services/location/LocationContext";

const Search = (props) => {
  const { keyword, search, setIsLoading } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <Searchbar
      {...props}
      theme={{ colors: { primary: "#FF6F38" } }}
      placeholder="Search for a location"
      value={searchKeyword}
      onSubmitEditing={() => {
        setIsLoading(true);
        search(searchKeyword);
      }}
      onChangeText={(text) => setSearchKeyword(text)}
    />
  );
};

export default Search;
