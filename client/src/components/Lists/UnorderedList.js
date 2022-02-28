import React from "react";
import styled from "styled-components";

import TransitionTrigger from "../Transition/TransitionTrigger";
import { addHeaderSpacing } from "../../styles/global";
import Link from "../Link/Link";

const StyledUl = styled.ul`
	${({ theme, height }) => theme.spacing(height, "height")};

	top: 0;
	right: 0;
	padding: 0;
	margin: 0;
	list-style-type: none;
	display: flex;
	flex-direction: ${({ orientation }) =>
		orientation === "vertical" ? "column" : "row"};

	li {

		${({theme}) => theme.typography.setSize(1)};

		font-family: "Haas";
		width: 10rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		${({ negativeOffset }) => {
			return negativeOffset === "left"
				? `
					&:nth-of-type(1) {
						margin-left: -3rem;
					}
				`
				: `
				&:last-of-type {
					margin-right: -3rem;
				}
				`;
		}};
	}
`;

function UnorderedList(props) {
	return (
		<StyledUl className='UnorderedList' {...props}>
			{props.listItems.map((item, i) => {
				return (
					<li className='UnorderedList__item'  key={i}>
						{!props.noTransition ? (
							<TransitionTrigger to={item.href}>{item.title}</TransitionTrigger>
						) : (
							<Link
								to={item.href}
								onClick={
									props.onClick || props.clickHandlers[item.title.toLowerCase()]
								}
							>
								{item.title}
							</Link>
						)}
					</li>
				);
			})}
		</StyledUl>
	);
}

export default UnorderedList;
