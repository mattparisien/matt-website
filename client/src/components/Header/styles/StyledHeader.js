import styled, { css, keyframes } from "styled-components";
import { device } from "../../../styles/breakpoints";

let delay = 1;

const revealHeaderAnimation = keyframes`
	0% {
		opacity: 0
	}
	100% {
		opacity: 1
	}
`;

export const StyledHeader = styled.header`

	height: ${({height}) => height ? height : "80px"};

	.DesktopNav {
		display: none;
	}

	@media ${device.laptop} {
		.MobileNav {
			display: none;
		}

		.DesktopNav {
			display: block;
		}
	}

	.header-logo {
		opacity: 0;
		animation: ${({ isHidden }) =>
			!isHidden
				? css`
						${revealHeaderAnimation} 1s ease forwards;
				  `
				: ""};
		animation-delay: ${delay}00ms;
	}

	li {
		opacity: 0;
		animation: ${({ isHidden }) =>
			!isHidden
				? css`
						${revealHeaderAnimation} 1s ease forwards;
				  `
				: ""};

		&:nth-of-type(1) {
			animation-delay: ${(delay += 2)}00ms;
		}

		&:nth-of-type(2) {
			animation-delay: ${(delay += 2)}00ms;
		}
		&:nth-of-type(3) {
			animation-delay: ${(delay += 2)}00ms;
		}
	}

	

	${({ theme }) => {
		return theme.typography.setSize(1);
	}};

	box-sizing: border-box;

	transition: transform 500ms ease;
	z-index: -1;
	color: ${({ theme }) => theme.colors[theme.components.header.styles.color]};

	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;

	.top,
	.bottom {
		background-color: ${({ theme }) =>
			theme.colors[theme.components.header.styles.color]};
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
			font-family: "Haas";
		}
	}
`;
