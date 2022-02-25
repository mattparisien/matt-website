import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const paragraphFontSizes = {
	standard: {
		desktopL: {
			fontSize: "5rem",
			lineHeight: "1.5rem",
		},
		desktop: {
			fontSize: "4.4rem",
			lineHeight: "4.4rem",
		},
		laptopL: {
			fontSize: "2rem",
			lineHeight: "1.5rem",
		},
		laptop: {
			fontSize: "2rem",
			lineHeight: "2rem",
		},
		tablet: {
			fontSize: "1.5rem",
			lineHeight: "1.5rem",
		},
		mobileL: {
			fontSize: "2.4rem",
			lineHeight: "2.5rem",
		},
		mobileM: {
			fontSize: "4rem",
			lineHeight: "4rem",
		},
		mobileS: {
			fontSize: "4rem",
			lineHeight: "4rem",
		},
	},
};

export const StyledParagraph = styled.p`
	font-family: "Haas";
	margin: 0;

	.accent {
		color: pink;
	}

	.line-wrapper {
		overflow: hidden;
		justify-content: flex-start;
	}

	${({ indent }) => {
		return indent
			? `.line-wrapper:nth-of-type(1) {
				padding-left: 14.4rem;
				position: relative;
			}`
			: "";
	}};

	${({ indentHeading }) => {
		return indentHeading
			? `.line-wrapper:nth-of-type(1)::after {
				content: '${indentHeading}';
				font-size: 1.2rem;
				position: absolute;
				left: 0;
				top: 0;
			}`
			: "";
	}};

	a {
		font-family: "Haas";
	}
`;

export const StyledStandardParagraph = styled(StyledParagraph)`
	${Object.keys(paragraphFontSizes.standard)
		.reverse()
		.map(size => {
			return `@media ${device[size]} {
				font-size: ${paragraphFontSizes.standard[size].fontSize};
				line-height: ${paragraphFontSizes.standard[size].lineHeight};
			}`;
		})};
`;
