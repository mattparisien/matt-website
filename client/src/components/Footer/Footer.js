import React, { useState, useRef, forwardRef } from "react";
import Cards from "./Cards";
import { StyledFooter } from "./styles/StyledFooter";

import SocialList from "../Lists/SocialList";
import UnorderedList from "../Lists/UnorderedList";
import Layout from "../Containers/Layout";
import Heading from "../Heading/Heading";
import styled from "styled-components";

const FooterHeading = styled(Heading)`
	position: absolute;
	bottom: 100%;
	padding-bottom: 10rem;
`;

function Footer(props, ref) {
	const footerStyle = {
		backgroundColor: props.backgroundColor,
		color: props.foregroundColor,
	};

	const footerRef = useRef(null);

	return (
		<footer className='Footer' data-scroll data-scroll-speed='-8'>
			<Layout
				bg='orange'
				style={footerStyle}
				ref={(footerRef, ref)}
				height='40vh'
			>
				<FooterHeading>Contact</FooterHeading>

				<div className='footer-copyright'>© Matthew Parisien</div>
				<SocialList isVertical alignItems={"flex-end"} />
			</Layout>
		</footer>
	);
}

export default forwardRef(Footer);
