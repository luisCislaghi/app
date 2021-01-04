import { ErrorMessage } from "formik";
import React, { FunctionComponent } from "react";
import { Text } from "react-native";
import {
  Container,
  InputArea,
  TextInput,
  ErrorMessageText,
  ErrorMessageContainer,
  IconContainer,
} from "./styles";

export const Input: FunctionComponent<{
  value?: any;
  onChangeText?: (text: string) => void;
  Icon?: React.ReactNode;
  password?: boolean;
  placeholder?: string;
  name: string;
  props: any;
}> = ({
  value,
  name,
  props,
  onChangeText = (v) => props.setFieldValue(name, v),
  Icon,
  password,
  placeholder,
}) => {
  return (
    <Container>
      <InputArea>
        {Icon && (
          <IconContainer>
            <Icon width="16" height="16" fill="rgba(0,0,0,0.45)" />
          </IconContainer>
        )}
        <TextInput
          value={value || props.values[name]}
          onChangeText={onChangeText}
          secureTextEntry={password}
          placeholder={placeholder}
        />
      </InputArea>
      <ErrorMessageContainer>
        <ErrorMessage name={name}>
          {(msg) => <ErrorMessageText>{msg}</ErrorMessageText>}
        </ErrorMessage>
      </ErrorMessageContainer>
    </Container>
  );
};
