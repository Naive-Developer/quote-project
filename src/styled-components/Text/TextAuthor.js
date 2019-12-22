import React from "react";
import styled from "styled-components";

const TextStyleAuthor = styled.p`
  position: absolute;
  top: 60%;
  right: 5%;
  font-family: ${props => props.theme.fontfamily.secondary};
  font-size: ${props => props.theme.sizes.fontsize.secondaryauthor};
  font-weight: 500;
  &::before {
    content: "⸛ ";
    vertical-align: ${props => props.theme.textalignes.verticalalign};
    font-size: ${props => props.theme.sizes.fontsize.seondaryiconsize};
  }
`;
const TextAuthor = props => {
  return <TextStyleAuthor {...props}>{props.children}</TextStyleAuthor>;
};

export default TextAuthor;
