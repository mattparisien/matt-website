import { Box } from "@material-ui/core";
import { GpsFixed } from "@material-ui/icons";
import React, { forwardRef, useEffect, useState, useRef } from "react";
import ContainerFluid from "../Containers/ContainerFluid";
import TransitionTrigger from "../Transition/TransitionTrigger";
import DesktopNav from "./Nav/DesktopNav";
import MobileNav from "./Nav/MobileNav";
import { StyledHeader } from "./styles/StyledHeader";
import gsap from "gsap";

function Header(props, ref) {
	const { headerOffset, isMenuActive } = props;
	const [innerHeight] = useState(null);
	const [isHeaderHidden] = useState(false);
	const logo = useRef(null);
	const links = useRef([]);
	links.current = [];
	const tl = useRef(gsap.timeline());

	const addToLinkRefs = el => {
		if (el && !links.current.includes(el)) {
			links.current.push(el);
		}
	};

	useEffect(() => {
		if (links.current && logo.current) {
			const navItems = [logo.current, ...links.current];
			tl.current
				.set(navItems, {
					y: "50%",
					opacity: 0,
				})
				.to(navItems, {
					y: 0,
					opacity: 1,
					ease: "power3.out",
					stagger: 0.1,
					duration: 1,
					delay: 1.6
				});
		}
	}, [links, logo]);

	return (
		<StyledHeader
			headerHeight={headerOffset}
			ref={ref}
			height={innerHeight}
			$hidden={isHeaderHidden}
			className='Header'
		>
			<Box className='Header__floater' sx={{ height: "100%" }}>
				<ContainerFluid display='flex'>
					<Box className='header-logo' ref={logo}>
						<TransitionTrigger to='/' noCircle>
							<span className='name'>
								Matt Parisien <span className='copyright-symbol'>©</span>
							</span>
							<span className='role'>Web developer</span>
						</TransitionTrigger>
					</Box>
					<DesktopNav addToLinkRefs={addToLinkRefs} />
					<MobileNav toggleMenu={props.toggleMenu} isBurger={!isMenuActive} />
				</ContainerFluid>
			</Box>
		</StyledHeader>
	);
}

export default forwardRef(Header);
