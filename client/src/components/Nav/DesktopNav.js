import React from "react";
import Link from "../Link/Link";
import { useLocation } from "react-router-dom";

function DesktopNav() {
	const location = useLocation();

	const links = [
		{
			name: "Work",
			path: "/",
		},
		{
			name: "About",
			path: "/about",
		},
		{
			name: "Contact",
			path: "contact",
		},
	];

	return (
		<nav className='c-nav -desktop'>
			<ul>
				{links.map((link, index) => {
					return (
						<li
							key={index}
							className={link.path === location.pathname && "is-active"}
						>
							<Link href={link.path} isRouterLink>
								{link.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default DesktopNav;
