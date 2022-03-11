import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const StyledHeader = styled.header`
font-size: inherit !important;
	.header-floater {
		background-color: ${({ theme }) => theme.colors.dark};
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100%;
		z-index: -1;
		transform: translateY(
			${({ floaterVisible }) => (floaterVisible ? "0" : "-100%")}
		);
		transition: 300ms ease;
	}

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

	height: 2.4rem;


	box-sizing: border-box;

	transition: transform 500ms ease;
	z-index: -1;
	color: ${({ theme }) => theme.colors.light};

	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;

	.top,
	.bottom {
		background-color: ${({ theme }) => theme.colors["light"]};
	}

	.LinkCircle path {
		stroke: ${({ theme }) => theme.colors["light"]};
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

	
	}
`;
