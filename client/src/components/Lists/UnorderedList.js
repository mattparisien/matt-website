import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
	display: flex;
	flex-direction: row;
`;

function UnorderedList({ listItems }) {
	return (
		<StyledUl className='UnorderedList'>
			{listItems.map(item => {
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
