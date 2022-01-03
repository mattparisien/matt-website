import styled from "styled-components";

export const StyledHome = styled.div`
	.section-hero {
		background-color: ${props => props.colors.heroSection.background};
		color: ${props => props.colors.heroSection.foreground};
	}

	.section-about {
		background-color: ${props => props.colors.aboutSection.background};
		color: ${props => props.colors.aboutSection.foreground};
	}

	.section-featuredWork {
		background-color: ${props => props.colors.featuredWorkSection.background};
		color: ${props => props.colors.featuredWorkSection.foreground};

		.wave path {
			fill: ${props => props.colors.aboutSection.background};
		}
	}
`;
