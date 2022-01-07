import styled from "styled-components";

export const StyledContent = styled.main`
	padding-top: ${props => props.paddingTop}px;
	margin-bottom: ${props => props.marginBottom}px;

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
