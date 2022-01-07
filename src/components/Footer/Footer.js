import React, { useState, useRef, forwardRef } from "react";
import Cards from "./Cards";
import { StyledFooter } from "./styles/StyledFooter";
import UnorderedList from "../UnorderedList/UnorderedList";
import { InstagramIcon, LinkedInIcon, GitHubIcon } from "../Vector/Socials";
import SocialList from "../UnorderedList/SocialList";

function Footer(props, ref) {
	const footerStyle = {
		backgroundColor: props.backgroundColor,
		color: props.foregroundColor,
	};

	const footerRef = useRef(null);

	return (
		<StyledFooter
			className='app-footer'
			style={footerStyle}
			ref={(footerRef, ref)}
		>
			<div className='heading-wrapper'>
				<h1>Talk to me.</h1>
			</div>
			<div className='footer-copyright'>© Matthew Parisien</div>
			<SocialList isVertical alignItems={"flex-end"}/>
			<Cards footerRef={footerRef.current} />

			{/* <div className='footer-bottom'>
				<div className="email">
					<a href="mailto:hello@matthewparisien.com">hello@matthewparisien.com</a>
					</div>
				<ul className='footer-ul-socials'>
					<li>
						<a href='https://instagram.com/matt.parisien'>Instagram</a>
					</li>
					<li>
						<a href='/'>LinkedIn</a>
					</li>
					<li>
						<a href='/'>GitHub</a>
					</li>
				</ul>
			</div> */}
		</StyledFooter>
	);
}

export default forwardRef(Footer);
