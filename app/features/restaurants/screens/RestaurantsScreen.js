import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "react-native-paper";

import SafeArea from "../../../components/SafeArea";
import Spacer from "../../../components/Spacer";
import { LocationContext } from "../../../services/location/LocationContext";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantsContext";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import Search from "../components/Search";
import {
  Loading,
  LoadingContainer,
  RestaurantList,
} from "../styles/Restaurants";

const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { isLoading: isLoadingLocation } = useContext(LocationContext);

  return (
    <SafeArea>
      {(isLoadingLocation || isLoading) && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.deepOrange400} />
        </LoadingContainer>
      )}
      <Search />
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
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          </Spacer>
        )}
        keyExtractor={(item) => item.name.toString()}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
