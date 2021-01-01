import React from "react";
import {
  Container,
  InputArea,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from "../styles";
import Form from "./form";
import { useNavigation } from "@react-navigation/native";
import Logo from "../logo";

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo />
      <InputArea>
        <Form />
      </InputArea>
      <SignMessageButton onPress={() => navigation.navigate("SignIn")}>
        <>
          <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
          <SignMessageButtonTextBold>Entrar</SignMessageButtonTextBold>
        </>
      </SignMessageButton>
    </Container>
  );
};
