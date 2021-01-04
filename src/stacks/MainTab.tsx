import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Escala from "../screens/Escala";
import Tripulante from "../screens/Tripulante";
import { TabBar } from "../components/tab-bar";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    tabBar={(props) => <TabBar {...props} />}
    initialRouteName="Escala"
  >
    <Tab.Screen name="Escala" component={Escala} />
    <Tab.Screen name="Tripulante" component={Tripulante} />
  </Tab.Navigator>
);
