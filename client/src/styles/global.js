import { createGlobalStyle } from "styled-components";

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

 * {
-webkit-font-smoothing: antialiased;
font-weight: lighter;
box-sizing: border-box;

 }








  




  button, a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  };




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
