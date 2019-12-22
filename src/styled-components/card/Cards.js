import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 60%;
  transform: translate(-50%, -50%);
  background: ${props =>
    props.theme.mode === "dark"
      ? props.theme.colors.bgcolorlight
      : props.theme.mode === "light"
      ? props.theme.chooseThemeColors.light.secondarybackground
      : props.theme.chooseThemeColors.middle.secondarybackground};
  border-radius: ${props => props.theme.sizes.radius};
  overflow: hidden;
  box-shadow: ${props => props.theme.boxshadows.cardshadow};
  font-size: ${props => props.theme.sizes.fontsize.primaryquote};
  font-family: ${props => props.theme.fontfamily.primary};
`;

const Card = props => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default Card;
