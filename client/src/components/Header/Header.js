import React, { forwardRef, useRef, useState, useEffect } from "react";
import Section from "../Section";
import { StyledHeader } from "./styles/StyledHeader";
import { Box } from "@mui/system";
import ContainerFluid from "../Containers/ContainerFluid";
import { Link } from "react-router-dom";

function Header(props, ref) {
	const { currentPath, headerOffset, isMenuActive, isDefaultContentHidden } =
		props;
	const [innerHeight, setInnerHeight] = useState(null);

	return (
		<StyledHeader headerHeight={headerOffset} ref={ref} height={innerHeight}>
			<ContainerFluid>
				<div className='header-logo'>
					<Link to='/'>Matt Parisien</Link>
					<span className="copyright-symbol">©</span>
				</div>
			</ContainerFluid>
		</StyledHeader>
	);
}

export default forwardRef(Header);
