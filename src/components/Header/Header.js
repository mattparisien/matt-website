import React, { forwardRef, useRef, useState } from "react";
import Section from "../Section";
import { StyledHeader } from "./styles/StyledHeader";
import UnorderedList from "../UnorderedList/UnorderedList";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Header(props, ref) {
	const { currentPath, headerHeight } = props;

	return (
		<StyledHeader headerHeight={headerHeight} ref={ref}>
			<div className='header-title'>
				<Link to={"/"}>Matt Parisien</Link>
			</div>
			<Nav currentPath={currentPath} />
		</StyledHeader>
	);
}

export default forwardRef(Header);
