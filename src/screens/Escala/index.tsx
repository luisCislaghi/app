import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();

  return (
    <>
      <Text>Escala</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </>
  );
};
