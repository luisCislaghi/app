import React from "react";
import { Text } from "react-native";
import {
  Container,
  InputArea,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();

  return <Text>Home</Text>;
};
