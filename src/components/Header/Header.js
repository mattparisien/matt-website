import React, { forwardRef, useRef } from "react";
import Section from "../Section";
import { StyledHeader } from "./styles/StyledHeader";
import UnorderedList from "../UnorderedList/UnorderedList";

function Header(props, ref) {
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
		<StyledHeader>
			<UnorderedList listInfo={listInfo}/>
		</StyledHeader>
	);
}

export default forwardRef(Header);
