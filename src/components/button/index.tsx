import React, { FunctionComponent, useState } from "react";
import { CustomButton, CustomButtonText } from "./styles";

export const Button: FunctionComponent<{
  text: string;
  onPress: any;
}> = ({ text, onPress }) => (
  <CustomButton onPress={onPress} underlayColor="#018c52">
    <CustomButtonText>{text}</CustomButtonText>
  </CustomButton>
);
