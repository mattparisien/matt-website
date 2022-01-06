import React, { forwardRef, useRef, useState } from "react";
import Section from "../Section";
import { StyledHeader } from "./styles/StyledHeader";
import UnorderedList from "../UnorderedList/UnorderedList";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import Title from "./Title/Title";
import Nav from "./Nav";
import MenuLink from "./Menu/MenuLink";

function Header(props, ref) {
	const { currentPath, headerHeight, menuTriggerHandler, isMenuActive } = props;

	return (
		<StyledHeader headerHeight={headerHeight} ref={ref} isMenuActive={isMenuActive}>
			<Title isHomePage={currentPath === "/"} />
			<MenuLink
				onClickHandler={menuTriggerHandler}
				isMenuActive={isMenuActive}
			/>

			{/* <Nav currentPath={currentPath} /> */}
		</StyledHeader>
	);
}

export default forwardRef(Header);
