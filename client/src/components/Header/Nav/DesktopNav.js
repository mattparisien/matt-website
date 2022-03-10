import React, { forwardRef } from "react";
import UnorderedList from "../../Lists/UnorderedList";
import styled from "styled-components";

const NavList = styled(UnorderedList)`
	height: 100%;
`;

function DesktopNav(props, ref) {
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
		<nav style={{ height: "100%" }} className='DesktopNav'>
			<NavList
				height={4}
				negativeOffset={"right"}
				listItems={listInfo}
				addToLinkRefs={props.addToLinkRefs}
			/>
		</nav>
	);
}

export default forwardRef(DesktopNav);
