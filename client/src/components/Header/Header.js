import { Box } from "@material-ui/core";
import React, { forwardRef, useState } from "react";
import ContainerFluid from "../Containers/ContainerFluid";
import TransitionTrigger from "../Transition/TransitionTrigger";
import DesktopNav from "./Nav/DesktopNav";
import MobileNav from "./Nav/MobileNav";
import { StyledHeader } from "./styles/StyledHeader";

function Header(props, ref) {
	const { headerOffset, isMenuActive } = props;
	const [innerHeight] = useState(null);
	const [isHeaderHidden] = useState(false);

	return (
		<StyledHeader
			headerHeight={headerOffset}
			ref={ref}
			height={innerHeight}
			$hidden={isHeaderHidden}
			className='Header'
		>
			<Box className='Header__floater' sx={{ height: "100%" }}>
				<ContainerFluid flex={true}>
					<Box className='header-logo'>
						<TransitionTrigger to='/' noCircle>
							<span className='name'>
								Matt Parisien <span className='copyright-symbol'>©</span>
							</span>
							<span className='role'>Web developer</span>
						</TransitionTrigger>
					</Box>
					<DesktopNav />
					<MobileNav toggleMenu={props.toggleMenu} isBurger={!isMenuActive}/>
				</ContainerFluid>
			</Box>
		</StyledHeader>
	);
}

export default forwardRef(Header);
