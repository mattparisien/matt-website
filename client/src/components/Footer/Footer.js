import React, { useRef } from "react";
import Container from "../Containers/Container";
import TransitionTrigger from "../Transition/TransitionTrigger";


function Footer(props) {

	const linkRefs = useRef([]);
	linkRefs.current = [];

	return (
		<footer className='Footer'>
			<Container>
				<nav className='footer-nav'>
					<TransitionTrigger noCircle to={"/work"} classes='footer-nav--link'>
						Projects ↗︎
					</TransitionTrigger>
					<a
						href="mailto:hello@matthewparisien.com?subject=Let's talk"
						className='footer-nav--link'
					>
						Let's talk ↗︎
					</a>
					<TransitionTrigger noCircle classes='footer-nav--link' to={"/"}>
						About ↗︎
					</TransitionTrigger>
				</nav>

				<div
					className={
						"footer-bottom -fullWidth -flex -align-end -justify-between -text-tiny"
					}
				>
					<div className='year'>©2022</div>
					<ul className='-ul-small'>
						{props.data.socials &&
							props.data.socials.map((link, i) => {
								return (
									<li>
										<a
											href={link.path}
											rel='noreferrer'
											target={link.Title === "Email" ? "_self" : "_blank"}
										>
											{link.Title}
										</a>
									</li>
								);
							})}
					</ul>
					<ul className='-ul-small'>
						<li>Matthew Parisien</li>
						<li>Montreal, Quebec</li>
						<li>Canada ↗︎</li>
					</ul>
					<div className='phone'>
						{props.data.contact && props.data.contact.Phone}↗︎
					</div>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
