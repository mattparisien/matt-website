import { createGlobalStyle } from "styled-components";
import FKScreamer from "../fonts/FKScreamer.otf";


export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'FK';
    src: url(${FKScreamer}) format('woff');
  }

  h1, h2 {
    font-family: 'FK';
  }

  p {
    font-family: 'Opposit';
  }
`
