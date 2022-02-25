import { createGlobalStyle } from "styled-components";
import DefaultCursor from "../assets/images/cursor-default-01.svg";
import FKScreamer from "../fonts/FKScreamer.otf";
import FuturaCEB from "../fonts/Futura.otf";
import Haas from "../fonts/Haas.otf";
import Konnect from "../fonts/Konnect.woff";

export const GlobalStyle = createGlobalStyle`

 * {
-webkit-font-smoothing: antialiased;

 }



  body {
    cursor: url(${DefaultCursor});
    margin: 0;
  }

  p, a:not(li a) {
    font-family: 'Haas';
  }





  .App {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ foregroundColor, theme }) => theme.colors.light};
    background-color: ${({ backgroundColor, theme }) =>
			theme.colors[backgroundColor]};
    color: ${({ foregroundColor, theme }) => theme.colors[foregroundColor]};
    transition: 500ms ease;
  }




  @font-face {
    font-family: 'FK';
    src: url(${FKScreamer}) format('woff');
  }

  @font-face {
    font-family: 'NeueMtl';
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