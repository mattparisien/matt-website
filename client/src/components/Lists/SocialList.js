import { GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

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
	padding: 0;
	color: blue;
	display: flex;
	flex-direction: ${({ orientation }) =>
		orientation === "vertical" ? "column" : "row"};

	li {
		margin-right: 2rem;
		text-decoration: none;
		list-style-type: none;

		&:hover svg {
			opacity: 0.8;
		}

		svg {
			transition: 300ms ease;
			fill: ${({theme}) => theme.colors.dark};
		}
	}
`;

function SocialList(props) {
	return (
		<StyledSocialList className='SocialList' {...props}>
			{SocialItems.map(item => {
				return (
					<li key={item.id} className='SocialList__item'>
						<a href={item.href} target='_blank' rel="noreferrer">
							{React.createElement(item.component, { key: item.id })}
						</a>
					</li>
				);
			})}
		</StyledSocialList>
	);
}

export default SocialList;
