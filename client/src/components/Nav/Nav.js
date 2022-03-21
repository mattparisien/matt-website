import React from "react";
import { useContext, useState } from "react";
import { CursorContext } from "../../App/App";
import classNames from "classnames";
import Link from "../Link/Link";

function Nav() {
	const { setCursorState } = useContext(CursorContext);
	const [active, setActive] = useState(false);
	const classes = classNames("c-nav -fade-up-load -delay-2 -mobile", { "is-active": active });

	const handleMouseEnter = () => {
		setCursorState("nav-hovering");
	};

	const handleMouseLeave = () => {
		setCursorState("following");
	};

	return (
		<div
			className={classes}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Link classes='c-nav_link' onClick={() => setActive(!active)}>
				<div className='c-nav_burger'></div>
				<div className='c-nav_circle'></div>
			</Link>
			<div className='c-nav_drawer'>
				<div className='c-nav_drawer__inner'>
					<Link isRouterLink={true} classes="-fade-up-load -delay-2" href='/' onClick={(e) => 
						{
							e.preventDefault();
							setActive(!active)
						}}>
						Work
					</Link>
					<Link isRouterLink={true} href='/about' onClick={(e) => {
						
						e.preventDefault();
						setActive(!active);
					}}>
						About
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Nav;
