import styled from "styled-components";
import { device, deviceSize } from "../../../styles/breakpoints";

export const StyledMenu = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999999;
	width: 100vw;
	height: 100vh;
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.dark};
	display: none;

	@media only screen and (max-width: ${deviceSize.tablet}px) {
		padding: 1rem;
	}

	ul {
		font-family: "FuturaCEB";
		font-size: 7rem;
		display: block;

		@media ${device.desktop} {
			width: 699px;
		}

		position: absolute;
		left: 50%;
		transform: translateX(-50%);

		@media only screen and (max-width: ${deviceSize.laptopL}px) {
			font-size: 4.9rem;
			left: 0;
			transform: none;
			padding-left: inherit;
			padding-right: inherit;
		}

		@media only screen and (max-width: ${deviceSize.tablet}px) {
			font-size: 11.3vw;
			left: 0;
			transform: none;
			padding-left: inherit;
			padding-right: inherit;
		}

		li {
			display: inline-block;

			&:last-of-type {
				display: block;
			}
		}
	}
`;
