import { createGlobalStyle } from "styled-components";
import FKScreamer from "../fonts/FKScreamer.otf";
import Haas from "../fonts/Haas.otf";


export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'FK';
    src: url(${FKScreamer}) format('woff');
  }

  @font-face {
    font-family: 'Haas';
    src: url(${Haas}) format('otf');
  }


  button, a {
    cursor: pointer;
  }

  button {
    font-family: 'Opposit';
  }
  
  h1, h2 {
    font-family: 'FK';
  }

  p {
    font-family: 'Opposit';
  }

  
`
