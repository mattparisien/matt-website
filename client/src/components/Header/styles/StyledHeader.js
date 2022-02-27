import styled from "styled-components";

import { addHeaderSpacing } from "../../../styles/global";

export const StyledHeader = styled.header`
	${({theme}) => theme.spacing(4, "height")};

	box-sizing: border-box;
	transform: translateY(${({ $hidden }) => ($hidden ? "-100px" : "0")});
	transition: transform 500ms ease;
	z-index: -1;
	color: ${({ theme }) => theme.colors[theme.components.header.styles.color]};
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
			font-family: "Haas";
		}
	}
`;
