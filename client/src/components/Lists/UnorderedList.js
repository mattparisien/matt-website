import React from "react";
import styled from "styled-components";

import TransitionTrigger from "../Transition/TransitionTrigger";

const StyledUl = styled.ul`
	padding: 0;
	height: 100%;
	margin: 0;
	list-style-type: none;
	display: flex;
	flex-direction: ${({ orientation }) =>
		orientation === "vertical" ? "column" : "row"};

	li {
		font-family: "Haas";
		width: 10rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
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
