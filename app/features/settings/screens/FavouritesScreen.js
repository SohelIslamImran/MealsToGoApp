import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import SafeArea from "../../../components/SafeArea";
import { FavouritesContext } from "../../../services/favourites/FavouritesContext";
import { RestaurantList } from "../../restaurants/styles/Restaurants";
import RestaurantInfoCard from "../../restaurants/components/RestaurantInfoCard";
import Spacer from "../../../components/Spacer";
import Text from "../../../components/Text";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};

export default FavouritesScreen;
