import React, { forwardRef, useRef, useState, useEffect } from "react";
import Section from "../Section";
import { StyledHeader } from "./styles/StyledHeader";
import UnorderedList from "../UnorderedList/UnorderedList";

import { Link } from "react-router-dom";
import Title from "./Title/Title";
import Nav from "./Nav";
import MenuLink from "./Menu/MenuLink";
import useResize from "../../helpers/hooks/useResize";

function Header(props, ref) {
	const { currentPath, headerOffset, isMenuActive, isDefaultContentHidden } =
		props;
	const [innerHeight, setInnerHeight] = useState(null);
	const [windowWidth] = useResize();

	const title = useRef(null);

	return (
		<StyledHeader
			headerHeight={headerOffset}
			ref={ref}
			height={innerHeight}
		></StyledHeader>
	);
}

export default forwardRef(Header);
