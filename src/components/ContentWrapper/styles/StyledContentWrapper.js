import styled from "styled-components";

export const StyledContent = styled.main`
	padding: 0 2rem;
	


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
