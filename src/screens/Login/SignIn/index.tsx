import React from "react";
import {
  Container,
  InputArea,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from "../styles";
import Form from "./form";
import Logo from "../logo";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo />
      <InputArea>
        <Form />
      </InputArea>
      <SignMessageButton onPress={() => navigation.navigate("SignUp")}>
        <>
          <SignMessageButtonText>
            Ainda não possui uma conta?
          </SignMessageButtonText>
          <SignMessageButtonTextBold>Cadastrar-se</SignMessageButtonTextBold>
        </>
      </SignMessageButton>
    </Container>
  );
};
