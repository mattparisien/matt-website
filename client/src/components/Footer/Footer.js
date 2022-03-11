import { useMediaQuery } from "@mui/material";
import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "styled-components";
import { deviceSize } from "../../styles/breakpoints";
import Container from "../Containers/Container";
import Star from "../Star/Star";

// const gradientAnim = keyframes`
// 0% {
// 	transform: translateY(0)
// }
// 100% {
// 	transform: translateY(-80%)
// }
// `;

function Footer(props) {
	const [starColor, setStarColor] = useState("light");

	const footerStyle = {
		backgroundColor: props.backgroundColor,
		color: props.foregroundColor,
		width: "100vw",
	};
	const theme = useTheme();
	const laptop = useMediaQuery(`(max-width: ${deviceSize.laptop}px)`);
	const tablet = useMediaQuery(`(max-width: ${deviceSize.tablet}px)`);

	const [ref, inView] = useInView({
		threshold: 0.5,
	});
	const linkRefs = useRef([]);
	linkRefs.current = [];

	const footerLink = {
		textTransform: "none",
		overflow: "hidden",
		"& .char": {
			transform: `translateY(100%)`,
			opacity: 0,
		},
	};

	const fontSize = laptop ? "2rem" : "4rem";

	return (
		<footer className='Footer'>
			
			<Container>
				
				<nav className='footer-nav'>
					<a className='footer-nav--link'>Projects ↗︎</a>
					<a className='footer-nav--link'>Let's talk ↗︎</a>
					<a className='footer-nav--link'>About ↗︎</a>
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
