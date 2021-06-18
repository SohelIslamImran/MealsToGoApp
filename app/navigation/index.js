import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../services/authentication/AuthenticationContext";
import AppNavigator from "./AppNavigator";
import AccountNavigator from "./AccountNavigator";

const Navigation = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
