import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import React, { FunctionComponent } from "react";
import { TabItem, TabItemProps } from "./item";
import { TabArea } from "./styles";
import UserIcon from "../../assets/icons/user.svg";
import ListIcon from "../../assets/icons/list.svg";

export const TabBar: FunctionComponent<
  BottomTabBarProps<BottomTabBarOptions>
> = ({ state, navigation, ...props }) => {
  const screens: TabItemProps[] = [
    {
      text: "Escala",
      screen: "Escala",
      Icon: ListIcon,
    },
    {
      text: "Tripulante",
      screen: "Tripulante",
      Icon: UserIcon,
    },
  ];

  return (
    <TabArea borderTopWidth={1} borderTopColor="#d9d9d9">
      {screens.map((s, i) => (
        <TabItem state={state} navigation={navigation} index={i} {...s} />
      ))}
    </TabArea>
  );
};
