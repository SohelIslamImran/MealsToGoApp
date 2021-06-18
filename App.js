import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import theme from "./app/infrastructure/theme";
import AuthContextProvider from "./app/services/authentication/AuthenticationContext";
import Navigation from "./app/navigation";
import useFonts from "./app/utils/useFonts";

export default function App() {
  const fontsLoaded = useFonts();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
