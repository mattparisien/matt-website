import React, {forwardRef} from "react";
import Section from "./Section";

function Header(props, ref) {


  const headerStyles = {
    padding: '2rem',
    height: '50vh',
  }

	return (
		<header style={headerStyles}>
			<div className='title -isFull' ref={ref}>
				<h1
					className='title_heading -isRelative -headingLarge -hasPaddingSmall'
					data-scroll
					data-scroll-speed='6'
				>
					Matt
				</h1>
			</div>
		</header>
	);
}

export default forwardRef(Header);
