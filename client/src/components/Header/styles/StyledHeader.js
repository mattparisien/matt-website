import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const StyledHeader = styled.header`
	height: 100px;
	box-sizing: border-box;
	padding: 2rem;
	z-index: -1;
	color: ${({theme}) => theme.colors.dark};
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;

	.menu-trigger {
		opacity: 0;
	}
	top: 0;
	z-index: 999;

	.header-logo {
		position: relative;
		display: inline;

		a {
			margin-right: 0.8rem;
		}

		.copyright-symbol {
			position: absolute;
			right: 0;
			top: 0;
			display: block;
			font-size: 0.7rem;
			font-family: 'Haas';
			
	
		}
	}

	
	
`;
