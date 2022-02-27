import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const paragraphFontSizes = {
	standard: {
		desktopL: {
			fontSize: "4.4rem",
			lineHeight: "4.4rem",
		},
		desktop: {
			fontSize: "4.4rem",
			lineHeight: "4.4rem",
		},
		laptopL: {
			fontSize: "4rem",
			lineHeight: "4.4rem",
		},
		laptop: {
			fontSize: "2.8rem",
			lineHeight: "3.2rem",
		},
		tablet: {
			fontSize: "2.6rem",
			lineHeight: "2.8rem",
		},
		mobileL: {
			fontSize: "1.8rem",
			lineHeight: "2rem",
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
};

export const StyledParagraph = styled.p`
	font-family: "Haas";
	margin: 0;

	.accent {
		color: pink;
	}

	.line-inner {
		overflow: hidden;
		justify-content: flex-start;
	}

	.line {
		white-space: break-spaces;

		position: relative;
		display: block;
		text-align: start;
	}

	${({ indent }) => {
		return indent
			? `.line:nth-of-type(1) {
				padding-left: 14.4rem;
				position: relative;
			}`
			: "";
	}};

	${({ indentHeading }) => {
		return indentHeading
			? `.line:nth-of-type(1)::after {
				content: '${indentHeading}';
				font-size: 1.2rem;
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
