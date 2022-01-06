import React, { useEffect, useRef } from "react";
import { StyledMenu } from "./styles/StyledMenu";
import UnorderedList from "../UnorderedList/UnorderedList";
import useResize from "../../helpers/hooks/useResize";
import gsap from "gsap";

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

	const { currentPath, isOpen } = props;

	const menuRef = useRef(null);
	const menuAnim = useRef(gsap.timeline());
	const navItems = useRef([]);

	const addToRefs = el => {
		if (el && !navItems.current.includes(el)) {
			navItems.current.push(el);
		}
	};

	useEffect(() => {
		console.log(navItems);
		if (isOpen) {
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
	}, [isOpen, menuRef, navItems]);

	return (
		<StyledMenu isOpen={isOpen} ref={menuRef}>
			<UnorderedList
				listInfo={listInfo}
				currentPath={currentPath}
				addToRefs={addToRefs}
			/>
		</StyledMenu>
	);
}

export default Menu;