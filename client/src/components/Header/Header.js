import React, { forwardRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContainerFluid from "../Containers/ContainerFluid";
import DesktopNav from "./Nav/DesktopNav";
import { StyledHeader } from "./styles/StyledHeader";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import TransitionTrigger from "../Transition/TransitionTrigger";
import { useLocation } from "react-router-dom";
import { Box } from "@material-ui/core";
import MobileNav from "./Nav/MobileNav";

function Header(props, ref) {
	const { headerOffset, isMenuActive, isDefaultContentHidden } = props;
	const [innerHeight, setInnerHeight] = useState(null);
	const [isHeaderHidden, setHeaderHidden] = useState(false);

	// useEffect(() => {
	// 	scroll &&
	// 		scroll.on("scroll", e => {
	// 			if (e.direction === "down" && !isHeaderHidden) {
	// 				setHeaderHidden(true);
	// 			} else if (e.direction === "up") {
	// 				setHeaderHidden(false);
	// 			}
	// 		});
	// }, [scroll]);

	return (
		<StyledHeader
			headerHeight={headerOffset}
			ref={ref}
			height={innerHeight}
			$hidden={isHeaderHidden}
			className='Header'
		>
			<Box className='Header__floater' sx={{height: "100%"}}>
				<ContainerFluid flex={true}>
					<Box className='header-logo' >
						<TransitionTrigger to='/' noCircle>
							<span className='name'>
								Matt Parisien <span className='copyright-symbol'>©</span>
							</span>
							<span className='role'>Web developer</span>
						</TransitionTrigger>
					</Box>
					<DesktopNav />
					<MobileNav toggleMenu={props.toggleMenu}/>
				</ContainerFluid>
			</Box>
		</StyledHeader>
	);
}

export default forwardRef(Header);
