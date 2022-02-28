import React, { useEffect, useRef } from "react";
import { StyledMenu } from "./styles/StyledMenu";
import UnorderedList from "../Lists/UnorderedList";
import gsap from "gsap";
import SocialList from "../Lists/SocialList";

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

	const { currentPath, isOpen, hideMenu, hideContent, setLoading, isLoading } =
		props;

	const menuRef = useRef(null);
	const menuAnim = useRef(gsap.timeline());
	const navItems = useRef([]);

	const addToRefs = el => {
		if (el && !navItems.current.includes(el)) {
			navItems.current.push(el);
		}
	};

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

	const handleClick = () => {
		hideContent();
		hideMenu();
		setLoading();
	};

	return (
		<StyledMenu isOpen={isOpen} ref={menuRef}>
			<UnorderedList
				listItems={listInfo}
				onClick={handleClick}
				
			/>
			<SocialList addToRefs={addToRefs} alignItems={"center"} isDefaultHidden />
		</StyledMenu>
	);
}

export default Menu;
