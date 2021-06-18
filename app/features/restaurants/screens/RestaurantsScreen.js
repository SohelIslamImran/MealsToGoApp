import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "react-native-paper";

import SafeArea from "../../../components/SafeArea";
import Search from "../../../components/Search";
import Spacer from "../../../components/Spacer";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import FavouritesBar from "../../../components/favourites/FavouritesBar";
import { FavouritesContext } from "../../../services/favourites/FavouritesContext";
import { LocationContext } from "../../../services/location/LocationContext";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantsContext";
import {
  Loading,
  LoadingContainer,
  RestaurantList,
  SearchContainer,
} from "../styles/Restaurants";
import { FadeInView } from "../../../components/animations/FadeInView";

const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { isLoading: isLoadingLocation } = useContext(LocationContext);
  const { favourites } = useContext(FavouritesContext);
  const [isFavToggled, setIsFavToggled] = useState(false);

  return (
    <SafeArea>
      {(isLoadingLocation || isLoading) && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.deepOrange400} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Search
          icon={isFavToggled ? "heart" : "heart-outline"}
          onIconPress={() => setIsFavToggled(!isFavToggled)}
        />
      </SearchContainer>
      {isFavToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </TouchableOpacity>
          </Spacer>
        )}
        keyExtractor={(item) => item.name.toString()}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
