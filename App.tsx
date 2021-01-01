import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import MainStack from "./src/stacks/MainStack";
import Theme from "./src/assets/theme";
import { navigationRef } from "./src/utils/RootNavigation";

export default function App() {
  return (
    <Theme>
      <NavigationContainer ref={navigationRef}>
        <MainStack />
      </NavigationContainer>
    </Theme>
  );
}
