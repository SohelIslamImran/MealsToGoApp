import React, { useContext, useState } from "react";
import { Colors, Searchbar } from "react-native-paper";

import SafeArea from "../../../components/SafeArea";
import Spacer from "../../../components/Spacer";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantsContext";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import {
  Loading,
  LoadingContainer,
  RestaurantList,
  SearchContainer,
} from "../styles/Restaurants";

const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.deepOrange400} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name.toString()}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
