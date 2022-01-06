import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const StyledHeader = styled.header`
	.title,
	.menu-trigger {
		opacity: 0;
	}

	padding: 2rem;
	top: 0;
	z-index: 999;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;

	.header-title,
	.list-item {
		font-family: "Kobe";
		font-size: 1.3rem;
	}

	.title {
		display: inline-block;
	}

	display: none;
`;
