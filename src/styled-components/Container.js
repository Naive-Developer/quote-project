import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -200px;
  width: 400px;
  height: 400px;
  background: ${props =>
    props.theme.mode === "dark"
      ? props.theme.colors.primary
      : props.theme.mode === "light"
      ? props.theme.chooseThemeColors.light.primary
      : props.theme.chooseThemeColors.middle.primary};

  border-radius: ${({ theme: { sizes } }) => sizes.radius};
  font-family: "dancing script", cursive;
  overflow: hidden;
  color: ${props =>
    props.theme.mode === "dark"
      ? props.theme.fontcolors.primary
      : props.theme.mode === "light"
      ? props.theme.chooseThemeColors.light.fontcolorprimary
      : props.theme.chooseThemeColors.middle.fontcolorprimary};
  letter-spacing: 0.5px;
`;

const Container = props => (
  <StyledContainer {...props}>{props.children}</StyledContainer>
);

export default Container;
