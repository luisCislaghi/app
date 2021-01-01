import React from "react";
import styled from "styled-components/native";

export const CustomButton = styled.TouchableHighlight`
  height: 40px;
  background-color: ${({ theme: { color } }) => color.primary};
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;
  align-items: center;
`;
export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: white;
`;
