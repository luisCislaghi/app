import React from "react";
import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  margin-top: 20px;
`;

export const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
  /* justify-content: center; */
  align-items: center;
`;

export const LogoContainer = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const Logo = styled.Image`
  width: 220px;
  height: 60px;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 0 40px;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: black;
`;

export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: bold;
  margin-left: 5px;
`;
