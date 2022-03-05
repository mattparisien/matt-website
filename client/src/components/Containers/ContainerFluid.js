import React from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledContainer = styled(Container)`
	height: 100%;
	position: relative;
	display: ${({ flex }) => (flex ? "flex" : "block")};
	justify-content: space-between;
	align-items: center;
	${({ fullbleed }) =>
		fullbleed &&
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
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}

	@media ${device.laptop} {
		padding-left: 1.9rem;
		padding-right: 1.9rem;
	}

	@media ${device.laptopL} {
		padding-left: 3rem;
		padding-right: 3rem;
	}
	@media ${device.desktop} {
		padding-left: 3.7rem;
		padding-right: 3.7rem;
	}
	@media ${device.desktopL} {
		padding-left: 3.8rem;
		padding-right: 3.8rem;
	}
`;

function ContainerFluid(props) {
	const containerStyle = {
		position: "relative",
		height: "100%",
		display: props.flex ? "flex" : "block",
		justifyContent: "space-between",
		alignItems: "center",
	};

	return (
		<StyledContainer maxWidth='none' {...props} className="ContainerFluid">
			{props.children}
		</StyledContainer>
	);
}

export default ContainerFluid;
