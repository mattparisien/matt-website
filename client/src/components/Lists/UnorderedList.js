import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TransitionTrigger from "../Transition/TransitionTrigger";

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
						<TransitionTrigger to={item.href}>{item.title}</TransitionTrigger>
					</li>
				);
			})}
		</StyledUl>
	);
}

export default UnorderedList;
