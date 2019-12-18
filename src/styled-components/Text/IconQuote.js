import React from "react";
import styled from "styled-components";

const IconStyledQuote=styled.i`
font-size: ${props=>props.theme.sizes.fontsize.iconsize};
  position: absolute;
  top: 12%;
  left: 7%;
  color:  ${props=>props.themeState.mode ==="dark" ? props.themeState.iconcolors.primary : props.themeState.mode ==="light" ? props.themeState.chooseThemeColors.light.iconcolorprimary : props.themeState.chooseThemeColors.middle.iconcolorprimary  };

`
//props=>props.theme.iconcolors.primary

const IconQuote=props=>{
    return <IconStyledQuote {...props}>
{props.children}
    </IconStyledQuote>
}

export default IconQuote;