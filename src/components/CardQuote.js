import React from "react";
import { Card, Button, CardText, Container, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes, saveQuoteData } from "../redux/actions/quoteAction";

function CardQuote() {
  const dispatch = useDispatch();
  const quoteData = useSelector(state => state.quoteReducer);
  const quotesValues = useSelector(state => state.saveQuoteReducer);

  const quotes = quoteData[0].quotes;
  const changeQuote = () => {
    dispatch(getQuotes());
    dispatch(saveQuoteData(quotes));

    localStorage.setItem("quotes", JSON.stringify(quotesValues));
  };

  return (
    <Container>
      <Row xs="3" style={{ marginTop: "100px" }}>
        <Col></Col>
        <Col>
          <Card body inverse color="danger">
            <CardText> {} </CardText>
            <CardText>
              {quoteData[0].fetching
                ? "Lütfen bekleyiniz!"
                : quoteData[0].error
                ? "Url de bir hata oluştu!"
                : quoteData[0].quotes.quote}
            </CardText>
            <CardText>
              {quoteData[0].fetching
                ? " "
                : quoteData[0].error
                ? " "
                : quoteData[0].quotes.author}
            </CardText>
            <Button onClick={changeQuote} color="secondary">
              Button
            </Button>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default CardQuote;
