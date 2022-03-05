import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const paragraphFontSizes = {
	variant1: {
		desktopL: {
			fontSize: "4.8rem",
			lineHeight: "4.5rem",
		},
		desktop: {
			fontSize: "6rem",
			lineHeight: "6.2rem",
		},
		laptopL: {
			fontSize: "5.2rem",
			lineHeight: "5.1rem",
		},
		laptop: {
			fontSize: "4.9rem",
			lineHeight: "4.9rem",
		},
		tablet: {
			fontSize: "3.8rem",
			lineHeight: "4rem",
		},
		mobileL: {
			fontSize: "3rem",
			lineHeight: "3rem",
		},
		mobileM: {
			fontSize: "1.5rem",
			lineHeight: "1.6rem",
		},
		mobileS: {
			fontSize: "1.5rem",
			lineHeight: "1.6rem",
		},
	},
	variant2: {
		desktopL: {
			fontSize: "2rem",
			lineHeight: "2.5rem",
		},
		desktop: {
			fontSize: "2rem",
			lineHeight: "2.5rem",
		},
		laptopL: {
			fontSize: "2rem",
			lineHeight: "2.4rem",
		},
		laptop: {
			fontSize: "1.8rem",
			lineHeight: "2.4rem",
		},
		tablet: {
			fontSize: "1.3rem",
			lineHeight: "1.6rem",
		},
		mobileL: {
			fontSize: "1.2rem",
			lineHeight: "1.4rem",
		},
		mobileM: {
			fontSize: "1rem",
			lineHeight: "1.3rem",
		},
		mobileS: {
			fontSize: "1.5rem",
			lineHeight: "1.6rem",
		},
	},
};

export const StyledParagraph = styled.p`
	font-family: "Haas";
	margin: 0;

	span.spacer {
		width: 35%;
		display: inline-block;
	}

	.accent {
		color: hotpink;
	}

	.line-initial-hidden {
		transform: translateY(150%);
		opacity: 0;
	}

	${({ indentHeading, theme }) => {
		return indentHeading
			? `.line:nth-of-type(1)::after {
				
				
				position: absolute;
				left: 0;
				top: 0;
				text-transform: capitalize;
			}`
			: "";
	}};

	a {
		font-family: "Haas";
	}
`;

export const StyledVariant1Paragraph = styled(StyledParagraph)`
	${Object.keys(paragraphFontSizes.variant1)
		.reverse()
		.map(size => {
			return `@media ${device[size]} {
				font-size: ${paragraphFontSizes.variant1[size].fontSize};
				line-height: ${paragraphFontSizes.variant1[size].lineHeight};
			}`;
		})};
`;

export const StyledVariant2Paragraph = styled(StyledParagraph)`
	width: 50%;
	margin-left: auto;

	.line:nth-of-type(1) {
		&::after {
			left: -100%;
		}
	}

	${Object.keys(paragraphFontSizes.variant2)
		.reverse()
		.map(size => {
			return `@media ${device[size]} {
			font-size: ${paragraphFontSizes.variant2[size].fontSize};
			line-height: ${paragraphFontSizes.variant2[size].lineHeight};
		}`;
		})};
`;
