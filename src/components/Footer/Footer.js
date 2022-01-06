import React, { useState, useRef, forwardRef } from "react";
import Cards from "./Cards";
import { StyledFooter } from "./styles/StyledFooter";
import UnorderedList from "../UnorderedList/UnorderedList";
import { InstagramIcon, LinkedInIcon, GitHubIcon } from "../Vector/Socials";

function Footer(props, ref) {
	const footerStyle = {
		backgroundColor: props.backgroundColor,
		color: props.foregroundColor,
	};

	const footerRef = useRef(null);

	const listInfo = [
		{
			url: "https://instagram.com/parisien.photo",
			title: null,
			vector: <InstagramIcon />,
			openNewTab: true,
		},
		{
			url: "https://www.linkedin.com/in/matthew-parisien-365572130/",
			title: null,
			vector: <LinkedInIcon />,
			openNewTab: true,
		},
		{
			url: "https://github.com/mattparisien?tab=repositories",
			title: null,
			vector: <GitHubIcon />,
			openNewTab: true,
		},
	];

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
			<UnorderedList
				listInfo={listInfo}
				orientation={"vertical"}
				justifyContent={"flex-start"}
				alignItems={"flex-start"}
			/>
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
