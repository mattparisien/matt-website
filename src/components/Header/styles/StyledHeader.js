import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const StyledHeader = styled.header`
	padding: 2rem;
	top: 0;
	z-index: 999;
	position: fixed;
	top: 0;
	left: 0;	
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: space-between;


	.header-title, .list-item {
		font-family: 'Kobe';
		font-size: 1.3rem;
	}

	h1 {
		text-align: left;
		margin-left: -2vw;
	}

	.list-item {
		opacity: 0;
	}
	
`;
