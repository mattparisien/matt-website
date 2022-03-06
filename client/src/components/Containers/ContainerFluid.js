import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledContainer = styled(Container)`
	height: 100%;
	position: relative;
	display: ${({ flex }) => (flex ? "flex" : "block")};
	justify-content: space-between;
	align-items: center;

	@media ${device.mobileS} {
		padding: 1.3rem;
	}

	@media ${device.mobileL} {
		padding: 0.4rem;
	}

	@media ${device.tablet} {
		padding: 1rem;
	}

	@media ${device.laptop} {
		padding: 1.9rem;
	}

	@media ${device.laptopL} {
		padding: 2rem;
	}
	@media ${device.desktop} {
		padding: 2rem;
	}
	@media ${device.desktopL} {
		padding: 2rem;
	}

	${({ fullbleed }) =>
		fullbleed &&
		`padding: 0 !important;
margin: 0 !important;
max-width: none;
`};
`;

function ContainerFluid(props) {
	return (
		<StyledContainer maxWidth='none' {...props} className='ContainerFluid'>
			{props.children}
		</StyledContainer>
	);
}

export default ContainerFluid;
