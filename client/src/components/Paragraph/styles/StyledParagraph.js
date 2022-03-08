import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

const paragraphFontSizes = {
	variant1: {
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
			fontSize: "2.3rem",
			lineHeight: "3.2rem",
		},
		tablet: {
			fontSize: "2rem",
			lineHeight: "2.3rem",
		},
		mobileL: {
			fontSize: "1.3rem",
			lineHeight: "1.6rem",
		},
		mobileM: {
			fontSize: "1.2rem",
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
			fontSize: "0.9rem",
			lineHeight: "1.2rem",
		},
		mobileM: {
			fontSize: "1rem",
			lineHeight: "1.3rem",
		},
		mobileS: {
			fontSize: "1rem",
			lineHeight: "1.2rem",
		},
	},
};

export const StyledParagraph = styled.p`
	font-family: "Neue Mtl";
	margin: 0;

	span.spacer {
		width: 10rem;
		display: inline-block;
	}

	.accent {
		color: pink;
	}

	.line {
		position: relative;
		display: inline-block;
		text-align: start;
		opacity: 0;
		transform: translateY(100%);
	}

	${({ indentHeading, theme }) => {
		return indentHeading
			? `.line:nth-of-type(1)::after {
				content: '${indentHeading}';
				${theme.typography.setSize(1)};
				position: absolute;
				left: 0;
				top: 0;
				text-transform: capitalize;
			}`
			: "";
	}};

	a {
		font-family: "Neue Mtl";
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



		@media ${device.mobileL} {
		width: 50%;
		margin-left: auto;
		}
`;
