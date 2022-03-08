import React from "react";
import styled, { keyframes } from "styled-components";

const lineAnim = keyframes`
	0% {
		transform: scaleX(0);
	} 100% {
		transform: scaleX(1);	
	}
`;

const StyledLine = styled.div`
	margin-bottom: ${({margin}) => margin ? margin: "2rem"};
	
	width: 100%;
	height: 1px;
	background-color: ${({ theme, color }) =>
		color ? theme.colors[color] : theme.colors.light};
	transform: scaleX(0);
	animation: ${lineAnim} 800ms ease forwards;
`;

function Line(props) {
	return <StyledLine {...props}></StyledLine>;
}

export default Line;
