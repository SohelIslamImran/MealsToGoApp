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

import RestaurantsScreen from "./app/features/restaurants/screens/RestaurantsScreen";
import theme from "./app/infrastructure/theme";

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
        <RestaurantsScreen />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
