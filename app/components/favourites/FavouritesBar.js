import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import CompactRestaurantInfo from "../CompactRestaurantInfo";
import Spacer from "../Spacer";
import Text from "../Text";

const FavouritesWrapper = styled.View`
  padding: 10px;
  padding-bottom: 0;
`;

const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper>
      <Spacer position="left" variant="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant, idx) => (
          <Spacer key={restaurant.name + idx} position="left" size="medium">
            <TouchableOpacity
              onPress={() => onNavigate("RestaurantDetail", { restaurant })}
            >
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouritesBar;
