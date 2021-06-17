import React, { useState } from "react";
import { Platform, ScrollView } from "react-native";
import { Button, List } from "react-native-paper";

import RestaurantInfoCard from "../components/RestaurantInfoCard";

const restaurantDetailsData = [
  {
    title: "Breakfast",
    items: ["Eggs Benedict", "Classic Breakfast"],
    icon: "bread-slice",
  },
  {
    title: "Lunch",
    items: ["Burger w/ Fries", "Steak Sandwich", "Mushroom Soup"],
    icon: "hamburger",
  },
  {
    title: "Dinner",
    items: [
      "Spaghetti Bolognese",
      "Veal Cutlet with Chicken Mushroom Rotini",
      "Steak Frites",
    ],
    icon: "food-variant",
  },
  {
    title: "Drinks",
    items: ["Coffee", "Tea", "Modelo", "Coke", "Fanta"],
    icon: "cup",
  },
];

const RestaurantDetailScreen = ({ navigation, route }) => {
  const [expanded, setExpanded] = useState({
    Breakfast: false,
    Lunch: false,
    Dinner: false,
    Drinks: false,
  });

  const { restaurant } = route.params;

  return (
    <>
      {Platform.OS === "android" && (
        <Button
          icon="close"
          mode="contained"
          color="#FF6F38"
          dark
          onPress={() => navigation.goBack()}
        >
          Close
        </Button>
      )}
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        {restaurantDetailsData.map(({ title, items, icon }, idx) => (
          <List.Accordion
            key={title + idx}
            theme={{ colors: { primary: "tomato" } }}
            title={title}
            left={(props) => <List.Icon {...props} icon={icon} />}
            expanded={expanded[title]}
            onPress={() =>
              setExpanded({ ...expanded, [title]: !expanded[title] })
            }
          >
            {items.map((item, idx2) => (
              <List.Item key={item + idx + idx2} title={item} />
            ))}
          </List.Accordion>
        ))}
      </ScrollView>
    </>
  );
};

export default RestaurantDetailScreen;
