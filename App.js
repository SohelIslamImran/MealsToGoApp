import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswaldFont,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLatoFont,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import theme from "./app/infrastructure/theme";
import RestaurantsContextProvider from "./app/services/restaurants/RestaurantsContext";
import LocationContextProvider from "./app/services/location/LocationContext";
import AppNavigator from "./app/navigation/AppNavigator";
import FavouritesContextProvider from "./app/services/favourites/FavouritesContext";

export default function App() {
  const [oswaldFontLoaded] = useOswaldFont({
    Oswald_400Regular,
  });

  const [latoFontLoaded] = useLatoFont({
    Lato_400Regular,
  });

  if (!oswaldFontLoaded || !latoFontLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <AppNavigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
