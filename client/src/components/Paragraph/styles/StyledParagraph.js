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
			fontSize: "2.7rem",
			lineHeight: "3rem",
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
	variant3: {
		desktopL: {
			fontSize: "1rem",
			lineHeight: "2.5rem",
		},
		desktop: {
			fontSize: "1.2rem",
			lineHeight: "1.8rem",
		},
		laptopL: {
			fontSize: "1rem",
			lineHeight: "1.6rem",
		},
		laptop: {
			fontSize: "1rem",
			lineHeight: "1.7rem",
		},
		tablet: {
			fontSize: "0.8rem",
			lineHeight: "1.3rem",
		},
		mobileL: {
			fontSize: "0.8rem",
			lineHeight: "1.3rem",
		},
		mobileM: {
			fontSize: "0.8rem",
			lineHeight: "1.3rem",
		},
		mobileS: {
			fontSize: "0.8rem",
			lineHeight: "1.3rem",
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
			left: -130%;
		}
	}

	margin-left: -30%;

	${Object.keys(paragraphFontSizes.variant2)
		.reverse()
		.map(size => {
			return `@media ${device[size]} {
			font-size: ${paragraphFontSizes.variant2[size].fontSize};
			line-height: ${paragraphFontSizes.variant2[size].lineHeight};
		}`;
		})};
`;

export const StyledVariant3Paragraph = styled(StyledParagraph)`
	.line:nth-of-type(1) {
		&::after {
			left: -130%;
		}
	}

	margin-left: -30%;

	${Object.keys(paragraphFontSizes.variant3)
		.reverse()
		.map(size => {
			return `@media ${device[size]} {
		font-size: ${paragraphFontSizes.variant3[size].fontSize};
		line-height: ${paragraphFontSizes.variant3[size].lineHeight};
	}`;
		})};
`;
