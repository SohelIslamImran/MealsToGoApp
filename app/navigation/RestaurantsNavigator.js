import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import RestaurantsScreen from "../features/restaurants/screens/RestaurantsScreen";
import RestaurantDetailScreen from "../features/restaurants/screens/RestaurantDetailScreen";

const Stack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default RestaurantsNavigator;
