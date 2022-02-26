import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledUl = styled.ul`
	padding: 0;
	list-style-type: none;
	display: flex;
	flex-direction: ${({ orientation }) =>
		orientation === "vertical" ? "column" : "row"};

	li {
		font-family: "Haas";

		&:not(:last-of-type) {
			margin-right: 4rem;
		}
	}
`;

function UnorderedList(props) {
	return (
		<StyledUl className='UnorderedList' {...props}>
			{props.listItems.map(item => {
				return (
					<li className='UnorderedList__item'>
						<Link to={item.href}>{item.title}</Link>
					</li>
				);
			})}
		</StyledUl>
	);
}

export default UnorderedList;
