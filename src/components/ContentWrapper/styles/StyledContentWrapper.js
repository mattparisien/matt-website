import styled from "styled-components";

export const StyledContent = styled.main`
	min-height: 100vh;
	margin-top: 100px;

	${({ hideContentDefault }) => {
		return hideContentDefault
			? `
			.gallery-wrapper {
				transform: translateY(100%);
				opacity: 0;
			}
			`
			: "";
	}}
`;
