import { createGlobalStyle } from "styled-components";
import FKScreamer from "../fonts/FKScreamer.otf";
import Haas from "../fonts/Haas.otf";
import Konnect from "../fonts/Konnect.woff";


export const GlobalStyle = createGlobalStyle`

  body {
    overflow-y: ${(props) => props.isScrollDisabled ? 'hidden' : 'scroll'};
  }

 

  .App {
    background-color: ${(props) => props.colors.backgroundColor};


    header .title, main {
      opacity: 0;
    }

    main {
      transform: translateY(15vw);
      
    }
  }



  
 
 #preloader {
   width: 100vw;
   height: 100vh;
   position: fixed;
   top: 0;
   left: 0;
   background-color: ${(props) => props.theme.colors.dark};
   color: ${(props) => props.theme.colors.light};
   padding: 2rem;
   font-family: 'Kobe';
   font-size: 4rem;

   h3 {
     position: relative;

     span {
       position: absolute;
       left: 0;
       top: 0;

      .word {
        opacity: 0;
      }
     }
   }
   

   .preloader__frame {
     content: '';
     position: absolute;
     top: 0;
     left: 0;
     background-color: ${(props) => props.theme.colors.light};
     width: 100%;
     height: 100%;
     transform: scale(0.0001);
     
   }
 }


  @font-face {
    font-family: 'FK';
    src: url(${FKScreamer}) format('woff');
  }

  @font-face {
    font-family: 'Haas';
    src: url(${Haas}) format('otf');
  }

  @font-face {
    font-family: 'Konnect';
    src: url(${Konnect}) format('woff');
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

  
`
