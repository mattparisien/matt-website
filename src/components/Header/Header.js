import React, { forwardRef, useRef, useState } from "react";
import Section from "../Section";
import { StyledHeader } from "./styles/StyledHeader";
import UnorderedList from "../UnorderedList/UnorderedList";
import { useEffect } from "react/cjs/react.development";

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

	const { currentPath, headerHeight } = props;


	return (
		<StyledHeader headerHeight={headerHeight} ref={ref}>
			<UnorderedList
				listInfo={listInfo}
				orientation={"horizontal"}
				justifyContent={"flex-end"}
				alignItems={"center"}
				currentPath={currentPath}
			/>
		</StyledHeader>
	);
}

export default forwardRef(Header);
