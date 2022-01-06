import { createGlobalStyle } from "styled-components";
import FKScreamer from "../fonts/FKScreamer.otf";
import Haas from "../fonts/Haas.otf";
import Konnect from "../fonts/Konnect.woff";
import KobeBold from "../fonts/KobeBold.woff";
import { device } from "./breakpoints";
import DefaultCursor from "../assets/images/cursor-default-01.svg";

export const GlobalStyle = createGlobalStyle`

* {
  cursor: none;
}

  body {
    
    cursor: url(${DefaultCursor});
  }

  span, p, a:not(li a) {
    font-family: 'Kobe';
  }

  .App {
    background-color: ${props => props.colors.backgroundColor};


    .gallery-wrapper {
      opacity: 0;
    }

   .gallery-wrapper {
      transform: translateY(15vw);
      margin-bottom: 80vh;

      @media ${device.laptop} {
        margin-bottom: 100vh;
      }

      
    }
  }



  
 
 #preloader {
   width: 100vw;
   height: 100vh;
   position: fixed;
   top: 0;
   left: 0;
   background-color: ${props => props.theme.colors.dark};
   color: ${props => props.theme.colors.light};
   padding: 2rem;
   font-family: 'Kobe';
   font-size: 9vw;
   padding: 0.8rem;
   
   @media ${device.tablet} {
     font-size: 4rem;
   };


   @media ${device.mobileL} {
    padding: 2rem;
   };

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
     background-color: ${props => props.theme.colors.light};
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

  @font-face {
    font-family: 'Kobe Bold';
    src: url(${KobeBold}) format('woff');
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
