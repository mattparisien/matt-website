import React from "react";
import { StyledMenu } from "./styles/StyledMenu";
import UnorderedList from "../UnorderedList/UnorderedList";

function Menu(props) {
	const listInfo = [
		{
			url: "/",
			title: "Work,",
		},
		{
			url: "/about",
			title: "About,",
		},
		{
			url: "/contact",
			title: "Contact,",
		},
	];

	const { currentPath } = props;

	return (
		<StyledMenu>
			
				<UnorderedList listInfo={listInfo} currentPath={currentPath} />
			
		</StyledMenu>
	);
}

export default Menu;
