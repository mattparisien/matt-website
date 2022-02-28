import styled from "styled-components";
import { device, deviceSoze } from "../../../styles/breakpoints";

export const StyledHeader = styled.header`
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

	.Header__floater {
		transition: 500ms ease;
		transform: translateY(${({ $hidden }) => ($hidden ? "-100px" : "0")});
	}

	${({ theme }) => {
		return theme.spacing(5, "height");
	}};

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
