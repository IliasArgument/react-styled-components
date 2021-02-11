import React from "react";
import styled, { css, keyframes } from "styled-components";

const rotateButton = keyframes`
0% {
  transform: rotateZ(8deg);
}
100% {
  transform: rotateZ(360deg);
}
`;

const StyledButton = styled.button`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${rotateButton} 1s infinite linear;
    opacity: 0.7;
  }
  align-self: ${(props) => props.align || "stretch"};

  ${(props) =>
    props.primary &&
    css`
      color: ${props.color || "white"};
      background: ${(props) => props.background || "white"};
    `}
  ${(props) =>
    props.outlined &&
    css`
      color: ${props.color || "white"};
      border: 1px solid ${(props) => props.color || "white"};
      background: transparent;
    `}
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
