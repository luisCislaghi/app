import {
  BottomTabBarOptions,
  BottomTabBarProps,
  BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {
  NavigationHelpers,
  TabNavigationState,
} from "@react-navigation/native";
import React, { FunctionComponent, useContext } from "react";
import { TabItemButton, Text } from "./styles";
import Theme from "../../../assets/theme";
import { ThemeContext } from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export type TabItemComponentProps = TabItemProps & {
  navigation: NavigationHelpers<
    Record<string, object | undefined>,
    BottomTabNavigationEventMap
  >;
  state: TabNavigationState<Record<string, object | undefined>>;
  index: number;
};
export type TabItemProps = {
  text: string;
  Icon?: React.ReactNode;
  screen: string;
};

export const TabItem: FunctionComponent<TabItemComponentProps> = ({
  state,
  navigation,
  text,
  Icon,
  screen,
  index,
  ...props
}) => {
  const goTo = (name: string) => navigation.navigate(name);
  const isActive = state.index === index;
  const theme = useContext(ThemeContext);

  return (
    <TabItemButton
      onPress={() => goTo(screen)}
      isActive={isActive}
      index={index}
      key={index}
    >
      {Icon && (
        <Icon
          width={32}
          heigth={32}
          fill={isActive ? theme.color.primary : theme.color.heading}
        />
      )}
      {/* <Text isActive={isActive}>{text}</Text> */}
    </TabItemButton>
  );
};
