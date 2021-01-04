import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components/native";

const theme = {
  color: {
    primary: "#0ab368",
    success: "#52c41a",
    warning: "#faad14",
    error: "#f5222d",
    heading: "rgba(0, 0, 0, 0.85)",
    text: "rgba(0, 0, 0, 0.65)",
    "text-secondary": "rgba(0, 0, 0, 0.45)",
    disabled: "rgba(0, 0, 0, 0.25)",
    "border-base": "#d9d9d9",
  },
  font: { family: "Roboto", "size-base": 14 },
  shadow: {
    "box-shadow-base": `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
  },
  border: {
    "radius-base": 2,
  },
};

const Theme: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
