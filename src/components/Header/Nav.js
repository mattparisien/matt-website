import React, { forwardRef } from "react";
import UnorderedList from "../UnorderedList/UnorderedList";

function Nav(props, ref) {

	const { currentPath } = props;

	const listInfo = [
		{
			title: "Work",
			url: "/",
			openNewTab: false,
		},
		{
			title: "About",
			url: "/about",
			openNewTab: false,
		},
		{
			title: "Contact",
			url: "/contact",
			openNewTab: false,
		},
	];

	return (
		<nav className='header-nav'>
			<UnorderedList
				listInfo={listInfo}
				orientation={"horizontal"}
				justifyContent={"flex-end"}
				alignItems={"center"}
				currentPath={currentPath}
				ref={ref}
			/>
		</nav>
	);
}

export default forwardRef(Nav);
