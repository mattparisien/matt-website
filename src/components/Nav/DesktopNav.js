import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import React from "react";
import { useLocation } from "react-router-dom";
import Link from "../Link/Link";

function DesktopNav() {
	gsap.registerPlugin(ScrollToPlugin);

	const location = useLocation();

	const links = [
		{
			name: "Work",
			path: "/",
		},
		{
			name: "Contact",
			path: "contact",
		},
	];

	const handleClick = (e, linkName) => {
		if (linkName.toLowerCase() === "contact") {
			gsap.to(window, {
				duration: 3,

				scrollTo: document.body.scrollHeight,
			});
		} else {
			gsap.to(window, {
				duration: 1,

				scrollTo: ".o-work",
			});
		}
	};

	return (
		<nav className={'c-nav -desktop'}>
			<ul>
				{links.map((link, index) => {
					return (
						<li
							key={index}
							className={link.path === location.pathname ? "is-active" : ''}
						>
							<Link onClick={e => handleClick(e, link.name)}>{link.name}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default DesktopNav;
