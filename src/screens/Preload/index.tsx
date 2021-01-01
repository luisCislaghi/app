import React, { useEffect } from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkToken = async () => {
      // const token = await AsyncStorage.getItem("token");
      const token = false;
      if (token) {
        navigation.reset({ routes: [{ name: "Home" }] });
      } else {
        navigation.reset({ routes: [{ name: "SignIn" }] });
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      {/* <Text>slasla</Text> */}
      <LottieView
        source={require("../../assets/animations/loading.json")}
        autoPlay
        loop
      />
    </Container>
  );
};
