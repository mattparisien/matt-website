import React, { forwardRef } from "react";
import UnorderedList from "../Lists/UnorderedList";

function Nav(props, ref) {
	const listInfo = [
		{
			title: "Work",
			href: "/",
		},
		{
			title: "About",
			href: "/about",
		},
		{
			title: "Contact",
			href: "/contact",
		},
	];

	return (
		<nav className='header-nav'>
			<UnorderedList listItems={listInfo} />
		</nav>
	);
}

export default forwardRef(Nav);
