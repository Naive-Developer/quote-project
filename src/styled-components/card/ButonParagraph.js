import React from "react";
import styled from "styled-components";

const StyledButtonParagraph = styled.p`
  background: ${props =>
    props.theme.mode === "dark"
      ? props.theme.colors.secondary
      : props.theme.mode === "light"
      ? props.theme.chooseThemeColors.light.secondary
      : props.theme.chooseThemeColors.middle.secondary};
  text-align: ${props => props.theme.textalignes.textalignprimary};
  color: ${props => props.theme.fontcolors.secondary};
  padding: ${props => props.theme.utilities.button.padding};
  width: 100%;
  font-family: ${props => props.theme.fontfamily.secondary};
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  transition: ${props => props.theme.animation.transitionbutton};
  &:hover {
    background: ${props =>
      props.theme.mode === "dark"
        ? props.theme.hover.buttonbgcolor
        : props.theme.mode === "light"
        ? props.theme.chooseThemeColors.light.hovercolor
        : props.theme.chooseThemeColors.middle.hovercolor};
    cursor: pointer;
  }
`;

const ButtonParagraph = props => (
  <StyledButtonParagraph {...props}>{props.children}</StyledButtonParagraph>
);

export default ButtonParagraph;
