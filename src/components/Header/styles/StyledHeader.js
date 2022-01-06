import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const StyledHeader = styled.header`
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

		svg {
			width: 60vw;
			fill: ${({theme}) => theme.colors.dark};
		}

	}

	.menu-trigger {
		align-self: flex-start;
		font-size: 1.4rem;
		position: fixed;
		top: 0;
		right: 0;
		padding: inherit;
	}


`;
