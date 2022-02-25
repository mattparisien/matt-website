import styled from "styled-components";

export const StyledSocialList = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	padding: inherit;
	z-index: 999;

	ul {

		

		li {
			overflow: hidden;

			a {
				transform: ${({ isDefaultHidden }) =>
					isDefaultHidden ? "translateY(100%)" : "none"};
				opacity: ${({ isDefaultHidden }) => (isDefaultHidden ? "0" : "1")};
				display: flex;
				
			}
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
