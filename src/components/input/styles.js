import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  margin: 0 0 10px;
`;

export const InputArea = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid #d9d9d9;
  height: 40px;
  color: ${({ theme: { color } }) => color.heading};
  border-radius: 20px;
  padding: 6.5px 11px;
  align-items: center;
`;

export const IconContainer = styled.View`
  margin-right: 4px;
`;

export const TextInput = styled.TextInput`
  font-size: 16px;
  width: 100%;
  /* background-color: white; */
`;

export const ErrorMessageContainer = styled.View`
  margin-top: 4px;
  margin-left: 1px;
`;

export const ErrorMessageText = styled.Text`
  color: ${({ theme: { color } }) => color.error};
  font-size: 14px;
`;
