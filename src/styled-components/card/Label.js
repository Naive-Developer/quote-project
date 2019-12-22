import React from "react";
import styled from "styled-components";

const LabelStyled = styled.label``;

const Label = props => {
  return <LabelStyled {...props}>{props.children}</LabelStyled>;
};

export default Label;
