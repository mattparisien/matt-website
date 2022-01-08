import styled from "styled-components";

export const StyledContent = styled.main`
	margin-bottom: 100vh;
	

	${({ hideContentDefault }) => {
		return (
			hideContentDefault ? `
			.gallery-wrapper {
				transform: translateY(100%);
				opacity: 0;
			}
			` : ''
		)
	}}
`;
