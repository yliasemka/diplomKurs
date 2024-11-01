import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 
button {
  font-family: inherit;
  border: 0;
  background: none;
  outline: none;
}
input {
  border: none;
  &:focus {
    outline: none;
  }
}
body {
  font-family: 'Signika Negative', sans-serif;
}`;

export default GlobalStyles;
