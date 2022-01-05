import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const StyledHome = styled.div`
	background-color: ${props => props.colors.backgroundColor};
	color: ${props => props.colors.foregroundColor};
	padding: 0.8rem;

	@media ${device.mobileL} {
		padding: 2rem;
	}

`;
