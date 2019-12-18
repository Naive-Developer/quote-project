import React from "react";
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

//createGlobalStyle sayesinde biz eğer normal style componentlerimiz haricinde doğrudan body ya da html içersine yazmak istediğmiz kodları bu şekilde buraya yazarak sonrada gidip App.js de tüm componentleri saran compoenentin bir altına yazarak uygulanamsını sağlarız....


export const GlobalStyle=createGlobalStyle`
${props=>console.log("theme mode: ",props.themeState.mode)}

body {

 

 background: ${props=>props.themeState.mode ==="dark" ? props.themeState.colors.bgcolordark : props.themeState.mode ==="light" ? props.themeState.chooseThemeColors.light.primarybackground : props.themeState.chooseThemeColors.middle.primarybackground  };  

}

`
//props=>props.themeState.mode === "light" ? props.themeState.chooseThemeColors.light.primarybackground : props.themeState.mode === "middle" ? props.themeState.chooseThemeColors.middle.primarybackground : props.themeState.colors.bgcolordark 

const StyledBody=styled.body`

background:${props=>props.primary ? "#201C29" : props.secondary ? "#a0aec0" : "#fff"} 
width:1400px;
height:600px;
`

const Body=props=>{
    return <StyledBody {...props}>
        {props.children}
    </StyledBody>
}

export default Body;