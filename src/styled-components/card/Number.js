import React from "react";
import styled from "styled-components";

const StyledNumber = styled.p`
  font-family: ${props => props.theme.fontfamily.secondary};
  position: absolute;
  margin: 0;
  top: 15px;
  right: 15px;
  color: fade-out(#fff, 0.3);

  &::before {
    content: "";
    position: absolute;
    top: -130px;
    right: -30px;
    width: 90px;
    height: 180px;
    background: ${props =>
      props.theme.mode === "dark"
        ? props.theme.colors.secondary
        : props.theme.mode === "light"
        ? props.theme.chooseThemeColors.light.secondary
        : props.theme.chooseThemeColors.middle.secondary};
    transform: rotate(-45deg);
    z-index: -1;
    box-shadow: ${props => props.theme.boxshadows.numberbeforeshadow};
  }
`;
const Number = props => {
  return <StyledNumber {...props}>{props.children}</StyledNumber>;
};

export default Number;
