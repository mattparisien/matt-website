import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Link from "react-router-dom";
import { StyledMenu } from "./styles/StyledMenu";

function Menu(props) {
	const listInfo = [
		{
			url: "/",
			title: "Work,",
		},
		{
			url: "/about",
			title: "About,",
		},
		{
			url: "/contact",
			title: "Contact,",
		},
	];

	const { isOpen, hideMenu, hideContent, setLoading } = props;

	const menuRef = useRef(null);
	const menuAnim = useRef(gsap.timeline());
	const navItems = useRef([]);

	useEffect(() => {
		if (isOpen) {
			menuAnim.current.play();
			menuAnim.current
				.set(menuRef.current, { display: "block" })
				.to(menuRef.current, {
					y: 0,
					duration: 0.9,
					ease: "expo.inOut",
				})
				.to(
					navItems.current,
					{
						y: 0,
						duration: 0.3,
						stagger: 0.1,
						opacity: 1,
					},
					0.6
				);
		}

		if (!isOpen && menuAnim.current.progress() !== 0) {
			menuAnim.current.reverse(0.93);
		}
	}, [isOpen, menuRef, navItems]);

	return (
		<StyledMenu isOpen={isOpen} ref={menuRef}>
			<ul>
				{listInfo.map(item => {
					return (
						<li>
							<Link>{}</Link>
						</li>
					);
				})}
			</ul>
		</StyledMenu>
	);
}

export default Menu;
