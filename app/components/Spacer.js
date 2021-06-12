import React from "react";
import styled, { useTheme } from "styled-components/native";

const Spacer = ({ position, size, children }) => {
  const theme = useTheme();

  const SpacerView = styled.View`
    ${`margin-${position}: ${
      size === "large"
        ? theme.space[3]
        : size === "medium"
        ? theme.space[2]
        : theme.space[1]
    }`}
  `;

  return <SpacerView>{children}</SpacerView>;
};

export default Spacer;
