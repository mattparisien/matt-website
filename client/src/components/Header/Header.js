import React, { forwardRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContainerFluid from "../Containers/ContainerFluid";
import Nav from "./Nav";
import { StyledHeader } from "./styles/StyledHeader";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Header(props, ref) {
	const { headerOffset, isMenuActive, isDefaultContentHidden } = props;
	const [innerHeight, setInnerHeight] = useState(null);
	const [isHeaderHidden, setHeaderHidden] = useState(false);
	const { scroll } = useLocomotiveScroll();

	useEffect(() => {
		scroll &&
			scroll.on("scroll", e => {
				if (e.direction === "down" && !isHeaderHidden) {
					setHeaderHidden(true);
				} else if (e.direction === "up") {
					setHeaderHidden(false);
				}
			});
	}, [scroll]);

	return (
		<StyledHeader
			headerHeight={headerOffset}
			ref={ref}
			height={innerHeight}
			$hidden={isHeaderHidden}
		>
			<ContainerFluid flex>
				<div className='header-logo'>
					<Link to='/'>Matt Parisien</Link>
					<span className='copyright-symbol'>©</span>
				</div>
				<Nav />
			</ContainerFluid>
		</StyledHeader>
	);
}

export default forwardRef(Header);
