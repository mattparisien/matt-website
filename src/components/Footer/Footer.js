import React from "react";
import Cards from "./Cards";
import { StyledFooter } from "./styles/StyledFooter";

function Footer(props) {
	const footerStyle = {
		backgroundColor: props.backgroundColor,
		color: props.foregroundColor,
	};

	return (
		<StyledFooter className='app-footer' style={footerStyle}>
			<div className='heading-wrapper'>
				<h1>Ok, let's chat.</h1>
				<span>hello@matthewparisien.com</span>
			</div>
			<Cards/>

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

export default Footer;
