import React from "react";
import styled from "styled-components";

const StyledNumber = styled.p`
  font-family: ${props=>props.themeState.fontfamily.secondary};
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
    background: ${props=>props.themeState.mode ==="dark" ? props.themeState.colors.secondary : props.themeState.mode ==="light" ? props.themeState.chooseThemeColors.light.secondary : props.themeState.chooseThemeColors.middle.secondary  };
    transform: rotate(-45deg);
    z-index: -1;
    box-shadow:${props=>props.theme.boxshadows.numberbeforeshadow};
  }
`;
const Number = props => {
  return <StyledNumber {...props}>{props.children}</StyledNumber>;
};

export default Number;
