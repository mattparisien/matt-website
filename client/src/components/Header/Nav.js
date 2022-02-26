import React, { forwardRef } from "react";
import UnorderedList from "../Lists/UnorderedList";

function Nav(props, ref) {
	const listInfo = [
		{
			title: "Home",
			href: "/",
		},
		{
			title: "Work",
			href: "/work",
		},
		{
			title: "About",
			href: "/about",
		},
	];

	return (
		<nav className='header-nav' style={{height: "100%"}}>
			<UnorderedList listItems={listInfo} />
		</nav>
	);
}

export default forwardRef(Nav);
