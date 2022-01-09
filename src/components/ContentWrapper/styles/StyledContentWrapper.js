import styled from "styled-components";

export const StyledContent = styled.main`
	

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
