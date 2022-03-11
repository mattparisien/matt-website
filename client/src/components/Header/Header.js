import { Box } from "@material-ui/core";
import gsap from "gsap";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import ContainerFluid from "../Containers/ContainerFluid";
import DesktopNav from "./Nav/DesktopNav";
import MobileNav from "./Nav/MobileNav";
import { StyledHeader } from "./styles/StyledHeader";

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
					delay: 1.6,
				});
		}
	}, [links, logo]);

	const logoStyle = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};

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
					<Box className='header-logo' ref={logo} sx={logoStyle}>
						<span className='name'>
							Matt Parisien ─ Web
							developer
						</span>
					</Box>
					<DesktopNav addToLinkRefs={addToLinkRefs} />
					<MobileNav toggleMenu={props.toggleMenu} isBurger={!isMenuActive} />
				</ContainerFluid>
			</Box>
		</StyledHeader>
	);
}

export default forwardRef(Header);
