import { Box } from "@material-ui/core";
import React, { forwardRef } from "react";
import useHeaderSpacing from "../../helpers/hooks/useHeaderSpacing";
import ContainerFluid from "../Containers/ContainerFluid";
import { StyledHeader } from "./styles/StyledHeader";

function Header(props, ref) {
	const { hidden } = props;
	const [headerHeight] = useHeaderSpacing();

	const brand = {
		color: "black",
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
							<span>Contact me</span>
						</a>
					</Box>
				</Box>
			</ContainerFluid>
		</StyledHeader>
	);
}

export default forwardRef(Header);
