import styled from "styled-components";
import { addHeaderSpacing } from "../../../styles/global";

export const StyledContent = styled.main`
	min-height: 100vh;
	${addHeaderSpacing("padding-top")};
	${addHeaderSpacing("padding-bottom")};

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
