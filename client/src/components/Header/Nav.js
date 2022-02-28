import React, { forwardRef } from "react";
import UnorderedList from "../Lists/UnorderedList";
import styled from "styled-components";

const NavList = styled(UnorderedList)`
	height: 100%;
`

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
			<NavList height={4} negativeOffset={"right"} listItems={listInfo} />
		</nav>
	);
}

export default forwardRef(Nav);
