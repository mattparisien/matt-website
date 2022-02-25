import styled from "styled-components";

export const StyledCursorRing = styled.div`
	position: absolute;
	width: 65px;
	height: 65px;
	top: 0;
	left: 0;
	border: 1px solid black;
	z-index: 9999;
	border-radius: 50%;
	transform: translate(-50%, -50%);
`;

export const StyledCursorDot = styled.div`
	position: absolute;
	width: 15px;
	height: 15px;
	top: 0;
	left: 0;
	background-color: ${({ theme }) => theme.colors.dark};
	z-index: 99999;
	border-radius: 50%;
	transform: translate(-50%, -50%);
`;
