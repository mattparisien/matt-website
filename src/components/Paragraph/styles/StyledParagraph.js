import styled from "styled-components";
import { device } from "../../../styles/breakpoints";


export const StyledParagraph = styled.p`
	font-family: "Kobe";

	.accent {
		color: pink;
	}

	${({ margin }) => {
		return margin ? `margin: ${margin}` : "";
	}};

	font-size: 5vw;
	line-height: 6vw;

	.line-wrapper {
		overflow: hidden;
		justify-content: flex-start;
	}

	a {
		font-family: "Kobe";
	}

	@media ${device.laptop} {
		font-size: 6rem;
		line-height: 6rem;
	}



	@media ${device.laptopL} {
		font-size: 7rem;
		line-height: 7rem;
	}

	@media ${device.desktop} {
		font-size: 9rem;
		line-height: 10rem;
	}
`;
