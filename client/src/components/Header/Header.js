import { Box } from "@material-ui/core";
import gsap from "gsap";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ContainerFluid from "../Containers/ContainerFluid";
import DesktopNav from "./Nav/DesktopNav";
import MobileNav from "./Nav/MobileNav";
import { StyledHeader } from "./styles/StyledHeader";

function Header(props, ref) {
	const scroll = useLocomotiveScroll();
	const { headerOffset, isMenuActive } = props;
	const [innerHeight] = useState(null);
	const [isHeaderHidden] = useState(false);
	const logo = useRef(null);
	const links = useRef([]);
	links.current = [];
	const tl = useRef(gsap.timeline());
	const [floaterVisible, setFloaterVisible] = useState(false);

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
					delay: 1.7,
				});
		}
	}, [links, logo]);

	const logoStyle = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};

	useEffect(() => {
		const handleScroll = e => {
			window.scrollY > 400 ? setFloaterVisible(true) : setFloaterVisible(false);
		};

		if (scroll.scroll && scroll.scroll.scroll.context !== "smartphone") {
			scroll.scroll.on("scroll", e => {
				e.delta.y > 400 ? setFloaterVisible(true) : setFloaterVisible(false);
			});
		} else {
			window.addEventListener("scroll", handleScroll);
		}

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scroll]);

	return (
		<StyledHeader
			headerHeight={headerOffset}
			ref={ref}
			height={innerHeight}
			$hidden={isHeaderHidden}
			className='Header'
			floaterVisible={floaterVisible}
		>
			<ContainerFluid display='flex' width='100%'>
				<Box className='header-logo' ref={logo} sx={logoStyle}>
					<span className='name'>Matt Parisien ─ Web developer</span>
				</Box>
				<DesktopNav addToLinkRefs={addToLinkRefs} />
				<MobileNav toggleMenu={props.toggleMenu} isBurger={!isMenuActive} />
			</ContainerFluid>
			<div className='header-floater'></div>
		</StyledHeader>
	);
}

export default forwardRef(Header);
