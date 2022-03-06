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
import useHeaderSpacing from "../../helpers/hooks/useHeaderSpacing";

function Header(props, ref) {
	const { headerOffset, isMenuActive, hidden } = props;
	const [innerHeight, setInnerHeight] = useState(null);
	const [headerHeight] = useHeaderSpacing();

	const brand = {
		color: "white",
		zIndex: 999,
		position: "relative",
		fontFamily: "Neue Mtl",
		fontSize: "0.8rem",
		transition: "300ms ease",

		"& .name, & .brand-line, & .email-cta": {
			opacity: hidden ? 0 : 1,
			transition: "300ms ease",
		},
		"& .brand-line": {
			transitionDelay: "200ms",
		},
		"& .email-cta": {
			transitionDelay: "400ms",
		},
	};

	const inner = {
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	};

	return (
		<StyledHeader
			ref={ref}
			isHidden={hidden}
			className='Header'
			height={headerHeight}
		>
			<ContainerFluid>
				<Box className='header-inner' sx={inner}>
					<Box className='header-logo' sx={brand}>
						<span className='name'>Matthew Parisien</span>
					</Box>
					<Box className='announcement' sx={brand}>
						<span className='brand-line'>Website coming soon</span>
					</Box>
					<Box className='cta' sx={brand}>
						<a href='mailto:hello@matthewparisien.com' className='email-cta'>
							<span >Contact me</span>
						</a>
					</Box>
				</Box>
			</ContainerFluid>
		</StyledHeader>
	);
}

export default forwardRef(Header);
