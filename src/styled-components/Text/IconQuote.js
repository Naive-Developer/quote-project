import React from "react";
import styled from "styled-components";

const IconStyledQuote = styled.i`
  font-size: ${props => props.theme.sizes.fontsize.iconsize};
  position: absolute;
  top: 12%;
  left: 7%;
  color: ${props =>
    props.theme.mode === "dark"
      ? props.theme.iconcolors.primary
      : props.theme.mode === "light"
      ? props.theme.chooseThemeColors.light.iconcolorprimary
      : props.theme.chooseThemeColors.middle.iconcolorprimary};
`;

const IconQuote = props => {
  return <IconStyledQuote {...props}>{props.children}</IconStyledQuote>;
};

export default IconQuote;
