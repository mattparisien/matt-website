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

	useEffect(() => {
		console.log(windowWidth)
		if (title.current) {
			console.log('in here!')
			const titleHeight = title.current.getBoundingClientRect().height;
			setInnerHeight(titleHeight);
		}
	}, [windowWidth, title]);

	return (
		<StyledHeader
			headerHeight={headerOffset}
			ref={ref}
			isMenuActive={isMenuActive}
			height={innerHeight}
		>
			<Title
				location={currentPath}
				isContentHidden={isDefaultContentHidden}
				titleRef={title}
			/>
		</StyledHeader>
	);
}

export default forwardRef(Header);
