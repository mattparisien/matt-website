import classNames from "classnames";
import gsap from "gsap";
import React, { useContext, useState } from "react";
import { CursorContext } from "../../App/App";
import Link from "../Link/Link";

function Nav() {
	const { setHovering } = useContext(CursorContext);
	const [active, setActive] = useState(false);
	const classes = classNames("c-nav -mobile", {
		"is-active": active,
	});

	const handleMouseEnter = () => {
		setHovering("nav-hovering");
	};

	const handleMouseLeave = () => {
		setHovering("following");
	};

	const handleClick = (e, linkName) => {

		setActive(!active)
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
		<div
			className={classes}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Link classes='c-nav_link' onClick={() => setActive(!active)}>
				<div className='c-nav_burger'></div>
			</Link>
			<div className='c-nav_drawer'>
				<div className='c-nav_drawer__inner'>
					<Link
						onClick={e => {
							handleClick(e, "work");
						}}
					>
						Work
					</Link>
					<Link
						onClick={e => {
							handleClick(e, "contact");
						}}
					>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Nav;
