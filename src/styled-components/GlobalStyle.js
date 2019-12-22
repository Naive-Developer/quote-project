import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


body {
background: ${props =>
  props.theme.mode === "dark"
    ? props.theme.colors.bgcolordark
    : props.theme.mode === "light"
    ? props.theme.chooseThemeColors.light.primarybackground
    : props.theme.chooseThemeColors.middle.primarybackground};  

}

`;

const StyledBody = styled.body`

background:${props =>
  props.primary ? "#201C29" : props.secondary ? "#a0aec0" : "#fff"} 
width:1400px;
height:600px;
`;

const Body = props => {
  return <StyledBody {...props}>{props.children}</StyledBody>;
};

export default Body;
