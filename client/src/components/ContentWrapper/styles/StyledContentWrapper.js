import styled from "styled-components";

export const StyledContent = styled.main`
	position: relative;
	min-height: 100vh;
	

	padding-bottom: ${({ offsetBottom }) => `${offsetBottom}`};
`;
