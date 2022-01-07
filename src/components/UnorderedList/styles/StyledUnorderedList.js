import styled from "styled-components";

export const StyledUnorderedList = styled.ul`
	list-style-type: none;
	display: flex;
	flex-direction: ${props => (props.flexColumn ? "column" : "row")};
	align-items: ${props => props.alignItems};
	justify-content: ${props => props.justifyContent};
	font-family: "Haas";
	font-size: 1.3rem;

	.list-item {
		color: ${({ theme }) => theme.colors.grey};
		transition: 300ms ease;

		&:nth-of-type(${props => props.activeLink}) {
			color: ${({ theme }) => theme.colors.green};
		}

		&:hover {
			color: ${({ theme }) => theme.colors.green};
		}

		&:not(:last-of-type) {
			${({ flexColumn }) => {
				return flexColumn
					? `
            margin-bottom: 1.5rem;
          `
					: `margin-left: 1.5rem`;
			}}
		}
	}
`;
