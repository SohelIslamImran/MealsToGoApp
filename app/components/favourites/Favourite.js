import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import { FavouritesContext } from "../../services/favourites/FavouritesContext";

const FavouriteButton = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 1;
`;

const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourite, removeFromFavourite } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find(
    (fav) => fav.placeId === restaurant.placeId
  );

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourite(restaurant)
          : removeFromFavourite(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};

export default Favourite;
