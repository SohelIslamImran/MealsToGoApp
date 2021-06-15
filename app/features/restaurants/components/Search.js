import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/LocationContext";
import { SearchContainer } from "../styles/Restaurants";

const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchContainer>
  );
};

export default Search;
