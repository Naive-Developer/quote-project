import React, { useState, useEffect } from "react";
import Card from "../src/styled-components/card/Cards";
import Container from "../src/styled-components/Container";
import Number from "./styled-components/card/Number";
import TextQuote from "./styled-components/Text/TextQuote";
import TextAuthor from "./styled-components/Text/TextAuthor";
import Section from "./styled-components/Text/Section";
import IconQuote from "./styled-components/Text/IconQuote";
import Label from "./styled-components/card/Label";
import ButonParagraph from "./styled-components/card/ButonParagraph";
import { GlobalStyle } from "./styled-components/Body";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled-components/theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Burda biz body dediğmiz için body rengi
import ChooseTheme from "./styled-components/theme-versions/ChooseTheme";


function App() {
  //Bizim changeThemeMode fonksiyonu ile aslında theme objesisinin içeriğine de mode olarak color a ne verirsek onu getirmesi gerekiyor
  
  //const initialState=localStorage.getItem("theme");
  //const [localTheme,setLocalTheme]=useState(theme)
  const [themeState,setThemeState]=useState(theme);   
console.log("themeState:  ",themeState)
  const changeTheme=(color)=>{
    setThemeState({...themeState,mode:color})
}
//theme içerisindeki özellikler i state olarak alıp sonra da ThemeProvider a propsa olarak o theme yi gönderirsek o zaman biz tetikleme olaylarında actionlarda yani click yapınca theme içerisindeki verileren değiştirmek istedğiizii değişştirip değişen verilere göre stilin uyugulanamasını sağlarız 

  useEffect(() => {
    console.log("useEffect çalıştı...")
    if (!localStorage.getItem("theme")){
      localStorage.setItem("theme",JSON.stringify(theme))
    }
  }, []);
  //const [localTheme,setLocalTheme]=useState(localStorage.theme)
  return (
    <ThemeProvider theme={themeState} themeState={themeState} >
      <GlobalStyle themeState={themeState}  />
      <ChooseTheme changeThemeMode={color=>changeTheme(color)}/>
      <Container themeState={themeState}>
        <Card themeState={themeState}>
          <Number themeState={themeState}>1</Number>
          <Section>
            <IconQuote themeState={themeState}>
              <FontAwesomeIcon icon="quote-left" />
            </IconQuote>

            <TextQuote>Zorluklar insanı kamçılamalıdır!</TextQuote>
            <TextAuthor>Wilheam Sheksper</TextAuthor>
          </Section>
          <Label>
            {" "}
            <ButonParagraph themeState={themeState}>next</ButonParagraph>{" "}
          </Label>
         
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;
