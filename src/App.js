
import { useDispatch, useSelector } from "react-redux";
import { getQuotes, saveQuoteData } from "../src/redux/actions/quoteAction";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuotes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

  
  const quoteData = useSelector(state => state.quoteReducer);
  const quotesValues = useSelector(state => state.saveQuoteReducer);

  const quotes = quoteData[0].quotes;
  const changeQuote = () => {
    dispatch(getQuotes());
    dispatch(saveQuoteData(quotes));

    localStorage.setItem("quotes", JSON.stringify(quotesValues));
  };

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

            <TextQuote> {quoteData[0].fetching
                ? "Lütfen bekleyiniz!"
                : quoteData[0].error
                ? "Url de bir hata oluştu!"
                : quoteData[0].quotes.quote}</TextQuote>
            <TextAuthor>{quoteData[0].fetching
                ? " "
                : quoteData[0].error
                ? " "
                : quoteData[0].quotes.author}</TextAuthor>
          </Section>
          <Label>
            {" "}
            <ButonParagraph onClick={changeQuote} color="secondary">next</ButonParagraph>{" "}
          </Label>
        </Card>
      </Container>
    </ThemeProvider>

  );
}

export default App;
