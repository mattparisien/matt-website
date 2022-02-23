import styled from "styled-components";
import { device } from "../../../styles/breakpoints";
import { keyframes } from "styled-components";

const colorAnimation = keyframes`
  0% {
    color: ${({ theme }) => theme.colors.orange};
  }
  20% {
    color: ${({ theme }) => theme.colors.pink};
  }
  40% {
    color: ${({ theme }) => theme.colors.light};
  }
  60% {
    color: ${({ theme }) => theme.colors.purple};
  }
  80% {
    color: ${({ theme }) => theme.colors.yellow};
  }
  80% {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledParagraph = styled.p`
	font-family: "Kobe";

	${({ margin }) => {
		return margin ? `margin: ${margin}` : "";
	}};

	font-size: 5vw;
	line-height: 6vw;

	.line-wrapper {
		overflow: hidden;
		justify-content: flex-start;
	}

	.char {
		transform: translateY(100%);
		opacity: 0;
	}

	.accent {
		animation: ${colorAnimation} 5s ease;
	}

	a {
		font-family: "Kobe";
	}

	@media ${device.laptop} {
		font-size: 7vw;
		line-height: 7vw;
	}
`;
