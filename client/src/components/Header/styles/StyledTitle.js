import styled from "styled-components";
import { device , deviceSize} from "../../../styles/breakpoints";

export const StyledTitle = styled.div`
	position: relative;
	height: 100%;

	h1 {
		overflow: hidden;
		font-family: "Konnect";
		position: absolute;
		top: 0;
		left: 0;
		text-align: left;

		a {
			font-family: "Konnect";
		}
	}

	
	
	text-align: left !important;

	@media ${device.tablet} {
		font-size: ${({ isLogo }) => (isLogo ? "15vw" : "5rem")};
	}

	@media only screen and (max-width: ${deviceSize.tablet}px) {
		font-size: ${({ isLogo }) => (isLogo ? "17.8vw" : "3rem")};
	}

	@media only screen and (max-width: ${deviceSize.mobileL}px) {
		font-size: ${({ isLogo }) => (isLogo ? "17.8vw" : "2rem")};
	}
`;
