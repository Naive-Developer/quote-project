import React from "react";
import styled from "styled-components";

const StyleSection = styled.section``;

const Section = props => {
  return <StyleSection {...props}>{props.children}</StyleSection>;
};

export default Section;
