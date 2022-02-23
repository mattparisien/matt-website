import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const StyledHome = styled.div`
	background-color: ${props => props.colors.backgroundColor};
	color: ${props => props.colors.foregroundColor};

	min-height: 100vh;

	.self-image-container {
		width: 300px;
		height: 300px;
		overflow: hidden;
		object-fit: cover;
		position: absolute;
		top: 0;
		right: 0;
		border-radius: 10px;

		img {
			width: 100%;
			object-fit: cover;
		}
	}

`;
