import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const StyledPreloader = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${props => props.theme.colors.dark};
	color: ${props => props.theme.colors.light};
	padding: 2rem;
	font-family: "Konnect";
	font-size: 9vw;
	padding: 0.8rem;

	@media ${device.tablet} {
		font-size: 4rem;
	}

	@media ${device.mobileL} {
		padding: 2rem;
	}

	h3 {
		position: relative;

		span {
			position: absolute;
			left: 0;
			top: 0;

			.word {
				opacity: 0;
			}
		}
	}

	.preloader__frame {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		background-color: ${props => props.theme.colors.light};
		width: 100%;
		height: 100%;
		transform: scale(0.0001);
	}
`;
