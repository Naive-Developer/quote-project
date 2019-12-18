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
  background:${props=>props.themeState.mode ==="dark" ? props.themeState.colors.primary : props.themeState.mode ==="light" ? props.themeState.chooseThemeColors.light.primary : props.themeState.chooseThemeColors.middle.primary  };
  
  border-radius:${({theme:{sizes}})=>sizes.radius};
  font-family: "dancing script", cursive;
  overflow: hidden;
  color: ${props=>props.themeState.mode ==="dark" ? props.themeState.fontcolors.primary : props.themeState.mode ==="light" ? props.themeState.chooseThemeColors.light.fontcolorprimary : props.themeState.chooseThemeColors.middle.fontcolorprimary  };
  letter-spacing: 0.5px;
`;

const Container=props=>(
<StyledContainer {...props}>{props.children}</StyledContainer>
)

export default Container;