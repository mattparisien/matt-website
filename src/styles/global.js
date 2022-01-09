import { createGlobalStyle } from "styled-components";
import FKScreamer from "../fonts/FKScreamer.otf";
import Haas from "../fonts/Haas.otf";
import Konnect from "../fonts/Konnect.woff";

import FuturaCEB from "../fonts/Futura.otf";

import DefaultCursor from "../assets/images/cursor-default-01.svg";

export const GlobalStyle = createGlobalStyle`

* {
cursor: ${({ isCursorWait }) => (isCursorWait ? "wait" : "")}
}

  body {
    cursor: url(${DefaultCursor});
  }

  p, a:not(li a) {
    font-family: 'Haas';
  }

  .App {
    background-color: ${props => props.colors.backgroundColor};


  

   
  }




  @font-face {
    font-family: 'FK';
    src: url(${FKScreamer}) format('woff');
  }

  @font-face {
    font-family: 'Haas';
    src: url(${Haas}) format('woff');
  }

  @font-face {
    font-family: 'Konnect';
    src: url(${Konnect}) format('woff');
  }

 

  @font-face {
    font-family: 'FuturaCEB';
    src: url(${FuturaCEB}) format('woff');
  }

  

  body {
    font-family: 'FK';
    
  }


  button, a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  };

  button {
    font-family: 'Opposit';
  };
  
  h1, h2 {
    font-family: 'FK';
  }

  p {
    font-family: 'Opposit';
  }

  
`;
