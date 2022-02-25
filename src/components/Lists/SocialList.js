import React from "react";
import styled from "styled-components";
import { Instagram, LinkedIn, GitHub } from "@material-ui/icons";

const SocialItems = [
	{
		id: 1,
		name: "Instagram",
		component: Instagram,
		href: "https://www.instagram.com/matt.parisien/",
	},
	{
		id: 2,
		name: "LinkedIn",
		component: LinkedIn,
		href: "https://www.linkedin.com/in/matthew-parisien-365572130/",
	},
	{
		id: 3,
		name: "GitHub",
		component: GitHub,
		href: "https://github.com/mattparisien",
	},
];

const StyledSocialList = styled.ul`
	display: block;
	color: blue;
	display: flex;
	flex-direction: ${({ orientation }) =>
		orientation === "vertical" ? "column" : "row"};

	li {
		text-decoration: none;
		list-style-type: none;
	}
`;

function SocialList(props) {
	return (
		<StyledSocialList className='SocialList' {...props}>
			{SocialItems.map(item => {
				return (
					<li key={item.id} className='SocialList__item'>
						<a href={item.href} target='_blank'>
							{React.createElement(item.component, { key: item.id })}
						</a>
					</li>
				);
			})}
		</StyledSocialList>
	);
}

export default SocialList;
