import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { TabBar } from "../components/tab-bar";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    tabBar={(props) => <TabBar {...props} />}
    initialRouteName="Home"
    // screenOptions={{ headerShown: false }}
  >
    <Tab.Screen name="Home" component={Home} />
  </Tab.Navigator>
);
