import styled from "styled-components";
import { device } from "../../../styles/breakpoints";
import { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
	100% {
		transform: rotate(360deg);
	}
`;

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
