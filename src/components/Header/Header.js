import React, { forwardRef } from "react";
import Section from "../Section";
import { StyledHeader } from "./styles/StyledHeader";

function Header(props, ref) {
	return (
		<StyledHeader>
			<div className='title -isFull' ref={ref}>
				<h1
					className='title_heading -isRelative -headingLarge -hasPaddingSmall'
					data-scroll
					data-scroll-speed='6'
				>
					Matt
				</h1>
			</div>
		</StyledHeader>
	);
}

export default forwardRef(Header);
