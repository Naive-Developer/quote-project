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
import { GlobalStyle } from "./styled-components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled-components/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChooseTheme from "./styled-components/theme-versions/ChooseTheme";

function App() {
  const [themeState, setThemeState] = useState(theme);

  const changeTheme = color => {
    setThemeState({ ...themeState, mode: color });
  };

  useEffect(() => {
    console.log("useEffect çalıştı...");
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  }, []);

  return (
    <ThemeProvider theme={themeState}>
      <GlobalStyle />
      <ChooseTheme changeThemeMode={color => changeTheme(color)} />
      <Container>
        <Card>
          <Number>1</Number>
          <Section>
            <IconQuote>
              <FontAwesomeIcon icon="quote-left" />
            </IconQuote>

            <TextQuote>Zorluklar insanı kamçılamalıdır!</TextQuote>
            <TextAuthor>Wilheam Sheksper</TextAuthor>
          </Section>
          <Label>
            {" "}
            <ButonParagraph>next</ButonParagraph>{" "}
          </Label>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;
