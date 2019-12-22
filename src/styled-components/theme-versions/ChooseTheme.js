import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${props =>
    props.primary ? "#8e44ad" : props.secondary ? "#EA2027" : "#f4efd3"};
  color: ${props =>
    props.primary ? "white" : props.secondary ? "#a3f7bf" : "blue"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid
    ${props => (props.primary ? "white" : props.secondary ? "#a3f7bf" : "blue")};
  border-radius: 3px;
  cursor: pointer;
`;

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

const ThemeButtons = styled.div`
  position: fixed;
  top: 0rem;
  right: 0rem;
`;

function ChooseTheme(props) {
  console.log("props: ", props);

  const switchTheme = color => {
    const localTheme = JSON.parse(window.localStorage.getItem("theme"));
    localTheme.mode = color; //Buraya kadar localTheme değişkenine atadığmız theme objesi içindeki mode propertes i parametreye verdiğmiz color değeri ile değiştirmiş oluyoruz...ve sonra yeni theme yi tekrar localStorageye set ediyoruz...
    window.localStorage.setItem("theme", JSON.stringify(localTheme));
    props.changeThemeMode(color);
  };
  return (
    <ThemeButtons>
      <Button primary onClick={() => switchTheme("dark")}>
        Dark Mode{" "}
      </Button>
      <Button secondary onClick={() => switchTheme("light")}>
        Ligth Mode
      </Button>
      <Button onClick={() => switchTheme("middle")}>Middle Mode</Button>
    </ThemeButtons>
  );
}

export default ChooseTheme;
