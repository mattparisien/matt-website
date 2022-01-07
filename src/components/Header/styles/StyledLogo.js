import styled from "styled-components";

export const StyledLogo = styled.h1`
	line-height: 23vw;
	margin-left: -2vw;
	overflow: hidden;

	${({ isContentHidden }) => {
		return isContentHidden
			? `.char {
				opacity: 0;
				transform: translateY(100%);
			}`
			: "";
	}}
`;
