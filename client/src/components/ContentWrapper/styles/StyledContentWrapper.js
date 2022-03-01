import styled from "styled-components";
import { addHeaderSpacing } from "../../../styles/global";

export const StyledContent = styled.main`
	position: relative;
	min-height: 100vh;
	
	

	${({ hideContentDefault }) => {
		return hideContentDefault
			? `
			.gallery-wrapper {
				transform: translateY(100%);
				opacity: 0;
			}
			`
			: "";
	}};
`;
