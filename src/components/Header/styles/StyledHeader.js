import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const StyledHeader = styled.header`
	height: 100px;
	box-sizing: initial;
	padding: 2rem;
	z-index: -1;
	color: orange;

	.menu-trigger {
		opacity: 0;
	}
	top: 0;
	z-index: 999;
	width: calc(100vw - 2rem);
	position: relative;
`;
