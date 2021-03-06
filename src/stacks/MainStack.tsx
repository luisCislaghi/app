import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Preload from "../screens/Preload";
import SignIn from "../screens/Login/SignIn";
import SignUp from "../screens/Login/SignUp";
import MainTab from "./MainTab";
const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="MainTab"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="MainTab" component={MainTab} />
  </Stack.Navigator>
);
