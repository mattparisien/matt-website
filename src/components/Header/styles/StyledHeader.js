import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const StyledHeader = styled.header`
	height: ${(props) => props.height && props.height}px;
	box-sizing: initial;
	padding: 2rem;

	.menu-trigger {
		opacity: 0;
	}
	top: 0;
	z-index: 999;
	width: 100vw;
	position: relative;
`;
