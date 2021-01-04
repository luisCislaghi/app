import React from "react";
import styled from "styled-components/native";

export const TabItemButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction:column;
  justify-content:center;
  align-items:center;

`;

export const Text = styled.Text`
  color: ${({theme:{color},isActive}) => isActive ? color.primary : color.heading};
`;
