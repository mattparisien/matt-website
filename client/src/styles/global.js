import { createGlobalStyle } from "styled-components";
import Brutal from "../assets/fonts/Brutal.woff";
import NeueMtl from "../assets/fonts/Montreal.otf";
import Pickle from "../assets/fonts/Pickle.woff";
import DefaultCursor from "../assets/images/cursor-default-01.svg";
import { device } from "./breakpoints";

export const renderResponsiveSizes = object => {
	return Object.entries(object).map(size => {
		return `
			@media ${device[size[0]]} {
				padding: ${size[1].padding};
        font-size: ${size[1].fontSize};
			}
			`;
	});
};

export const addHeaderSpacing = (property, extra) => {
	return `
  @media ${device.mobileS} {
    ${extra ? `${property}: calc(${extra} + 3.5rem);` : `${property}: 3.5rem;`}	
	}

	@media ${device.tablet} {
    ${extra ? `${property}: calc(${extra} + 7.3rem);` : `${property}: 7.3rem;`}	
	}
  `;
};

export const GlobalStyle = createGlobalStyle`


@font-face {
  font-family: 'Neue Mtl';
  src: url(${NeueMtl}) format('woff');
}

@font-face {
  font-family: 'Brutal';
  src: url(${Brutal}) format('woff');
}

@font-face {
  font-family: 'Pickle';
  src: url(${Pickle}) format('woff');
}




 * {
-webkit-font-smoothing: antialiased;


 }

 h1, h2 {
   font-family: 'Brutal';
 }


 section {
   transition: 300ms ease;
 }

 ul {
   list-style-type: none;
    
 }

 a {
   text-decoration: none;
 }


  body {
    cursor: url(${DefaultCursor});
    margin: 0;
    overflow: hidden;
  }



.line {
  transform: translateY(110%);
  opacity: 0;
}

.word {
  position: relative;
}

.accent {
  position: relative;

  .accent-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hotpink;
    width: 0;
    z-index: -1;
  }
}

  .App {
    
    color: ${({ foregroundColor, theme }) => theme.colors.light};
    
    transition: 500ms ease;
  }






  @font-face {
    font-family: 'Neue Mtl';
    src: url(${NeueMtl}) format('woff');
  }


  @font-face {
    font-family: 'Brutal';
    src: url(${Brutal}) format('woff');
  }


h1, h2 {
  font-family: 'Brutal';
  text-transform: uppercase;
}



  button, a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  };


 


  .indent-title {
    position: absolute;
    left: 0;
    top: 0;
  }

  .spacer {
    width: 150px;
  }
  
  





  p {
    font-family: 'Neue Mtl';
  }



  /*! locomotive-scroll v4.1.3 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
html.has-scroll-smooth {
  overflow: hidden; }

html.has-scroll-dragging {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.has-scroll-smooth body {
  overflow: hidden; }

.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh; }

[data-scroll-direction="horizontal"] [data-scroll-container] {
  height: 100vh;
  display: inline-block;
  white-space: nowrap; }

[data-scroll-direction="horizontal"] [data-scroll-section] {
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  height: 100%; }

.c-scrollbar {
  position: absolute;
  right: 0;
  top: 0;
  width: 11px;
  height: 100%;
  transform-origin: center right;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0; }
  .c-scrollbar:hover {
    transform: scaleX(1.45); }
  .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
    opacity: 1; }
  [data-scroll-direction="horizontal"] .c-scrollbar {
    width: 100%;
    height: 10px;
    top: auto;
    bottom: 0;
    transform: scaleY(1); }
    [data-scroll-direction="horizontal"] .c-scrollbar:hover {
      transform: scaleY(1.3); }

.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  width: 7px;
  border-radius: 10px;
  margin: 2px;
  cursor: -webkit-grab;
  cursor: grab; }
  .has-scroll-dragging .c-scrollbar_thumb {
    cursor: -webkit-grabbing;
    cursor: grabbing; }
  [data-scroll-direction="horizontal"] .c-scrollbar_thumb {
    right: auto;
    bottom: 0; }

  
`;
