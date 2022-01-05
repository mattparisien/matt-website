import styled from "styled-components";
import { device, deviceSize } from "../../../styles/breakpoints";

const gutter = {
	desktop: "2rem",
	mobile: "0.8rem",
};

export const StyledGallery = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	width: 100%;
	height: 100%;
  grid-gap: ${gutter.mobile};

	@media only screen and ${device.mobileL} {
		grid-gap: ${gutter.desktop};
	}


	.image-gallery__item {
		overflow: hidden;



		&__image-wrapper {
			background-repeat: no-repeat;
			background-size: cover;

			.image-gallery__item__image {
				width: 100%;
				height: auto;
			}
		}

    @media only screen and (max-width: ${deviceSize.tablet}px) {
			grid-column: 1/5 !important;
			transform: none !important;
		}



		&:nth-of-type(1) {
			grid-column: 1 / span 4;
		}

		&:nth-of-type(2) {
			grid-column: 2 / span 1;
		}

		&:nth-of-type(3) {
			grid-column: 4 / span 1;
		}

		&:nth-of-type(4) {
			grid-column: 1 / span 1;
			transform: translate(10vw, -10vw);
		}

		&:nth-of-type(5) {
			grid-column: 3 / span 2;
		}

		&:nth-of-type(6) {
			grid-column: 1 / span 1;
		}

		&:nth-of-type(7) {
			grid-column: 2 / span 1;
			transform: translate(-8vw, -8vw);
		}

		&:nth-of-type(8) {
			grid-column: 4 / span 1;
		}

		&:nth-of-type(9) {
			grid-column: 3 / span 1;
		}

		&:nth-of-type(11) {
			grid-column: 4 / span 1;
		}

		&:nth-of-type(12) {
			grid-column: 1 / span 2;
		}

		&:nth-of-type(13) {
			grid-column: 2 / span 1;
			transform: translate(20vw, -50vw);
		}

		&:nth-of-type(17) {
			grid-column: 1 / span 1;
		}

		&:nth-of-type(19) {
			grid-column: 4 / span 1;
		}
		&:nth-of-type(21) {
			grid-column: 3 / span 2;
		}
		&:nth-of-type(24) {
			grid-column: 4 / span 1;
		}

		@media only screen and (max-width: ${deviceSize.tablet}) {
			grid-column: 1/5 !important;
			transform: none !important;
		}
	}
`;
