import React from "react";
import styled from "styled-components";

const StyledButtonParagraph = styled.p`
  background: ${props=>props.themeState.mode ==="dark" ? props.themeState.colors.secondary : props.themeState.mode ==="light" ? props.themeState.chooseThemeColors.light.secondary : props.themeState.chooseThemeColors.middle.secondary  };
  text-align: ${props=>props.theme.textalignes.textalignprimary};
  color:${props=>props.theme.fontcolors.secondary};
  padding: ${props=>props.theme.utilities.button.padding};
  width: 100%;
  font-family:${props=>props.theme.fontfamily.secondary};
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  transition: ${props=>props.theme.animation.transitionbutton};
  &:hover {
    background: ${props=>props.themeState.mode ==="dark" ? props.themeState.hover.buttonbgcolor : props.themeState.mode ==="light" ? props.themeState.chooseThemeColors.light.hovercolor : props.themeState.chooseThemeColors.middle.hovercolor  };
    cursor: pointer;
  }
`;

const ButtonParagraph=props=>(
    <StyledButtonParagraph {...props}>
        {props.children}
    </StyledButtonParagraph>
)

export default ButtonParagraph;