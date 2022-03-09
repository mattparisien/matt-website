import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledContainer = styled(Container)`
	height: 100%;
	position: relative;
	display: ${({ isFlex }) => (isFlex ? "flex" : "block")};
	justify-content: space-between;
	align-items: center;
	${({ isfull }) =>
		isfull &&
		`padding: 0 !important;
	margin: 0 !important;
	max-width: none;
	`};

	@media ${device.mobileS} {
		padding-left: 1.3rem;
		padding-right: 1.3rem;
	}

	@media ${device.mobileL} {
		padding-left: 2.3rem;
		padding-right: 2.3rem;
	}

	@media ${device.tablet} {
		padding-left: 3rem;
		padding-right: 3rem;
	}

	@media ${device.laptop} {
		padding-left: 8rem;
		padding-right: 8rem;
	}

	@media ${device.laptopL} {
		padding-left: 9rem;
		padding-right: 9rem;
	}
`;

function ContainerFluid(props) {
	return (
		<StyledContainer maxWidth='xl' {...props} className='ContainerFluid'>
			{props.children}
		</StyledContainer>
	);
}

export default ContainerFluid;
