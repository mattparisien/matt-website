import styled, { css, keyframes } from "styled-components";
import { device } from "../../../styles/breakpoints";

let delay = 1;

export const StyledHeader = styled.header`
	height: auto;

	${({ theme }) => {
		return theme.typography.setSize(1);
	}};

	box-sizing: border-box;

	transition: transform 500ms ease;
	z-index: -1;
	color: ${({ theme }) => theme.colors.light};
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;

	.circle {
		transition: 500ms ease;
		background-color: ${({ theme }) =>
			theme.colors[theme.components.header.styles.color]};
	}

	.burger::before,
	.burger::after {
		background-color: ${({ theme }) =>
			theme.colors[
				theme.components.header.styles.color === "light" ? "dark" : "light"
			]};
	}

	.LinkCircle path {
		stroke: ${({ theme }) =>
			theme.colors[theme.components.header.styles.color]};
	}

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

			span {
				display: block;
				&:nth-of-type(1) {
					position: relative;
				}

				.copyright-symbol {
					display: inline;
				}
			}
		}

		.copyright-symbol {
			position: absolute;
			right: 0;
			top: 0;
			display: block;
			font-size: 0.7rem;
		}
	}
`;
