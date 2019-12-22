import React from "react";
import styled from "styled-components";

const TextStyleQuote = styled.p(props => ({
  position: "absolute",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%"
}));

const TextQuote = props => (
  <TextStyleQuote {...props}>{props.children}</TextStyleQuote>
);

export default TextQuote;
