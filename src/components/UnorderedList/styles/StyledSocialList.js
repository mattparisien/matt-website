import styled from "styled-components";

export const StyledSocialList = styled.div`
	ul {
		position: absolute;
		bottom: 0;
		left: 0;
		padding: inherit;

		li:not(:last-of-type) {
			margin-bottom: 1rem;
		}

		.SocialIcon {
			height: 20px;
			width: 20px;
			fill: ${({ theme }) => theme.colors.light};
			transition: 300ms ease;

			&:hover {
				opacity: 0.7;
			}
		}
	}
`;
