import React, { useRef, useEffect, useState } from "react";
import useSplit from "../../../helpers/hooks/useSplit";
import gsap from "gsap";
import $ from "jquery";
import { StyledMenuLink } from "../styles/StyledMenuLink";

function MenuLink({ onClickHandler, isMenuActive }) {
	const openRef = useRef(null);
	const closeRef = useRef(null);
	const tl = useRef(gsap.timeline());
	const [isSplit, chars, splitCount] = useSplit(
		[openRef.current, closeRef.current],
		{ type: "chars", charsClass: "char" }
	);

	useEffect(() => {
		if (isMenuActive) {
			const openChars = $(openRef.current).find(".char");
			const closeChars = $(closeRef.current).find(".char");

			tl.current.play();
			tl.current
				.to(openChars, {
					y: "-100%",
					duration: 0.5,
					stagger: 0.1,
					opacity: 0,
					ease: "power3.in",
				})
				.to(closeChars, {
					y: "0",
					stagger: 0.1,
					opacity: 1,
					duration: 0.5,
					ease: "power3.in",
				}, 0);
		}

		if (!isMenuActive && tl.current.progress() === 1) {
			tl.current.reverse();
		}


	}, [isMenuActive, openRef, closeRef]);

	return (
		<StyledMenuLink
			className='menu-trigger'
			onClick={onClickHandler}
			isMenuActive={isMenuActive}
		>
			<div className='menu-trigger__inner'>
				<div id='menu' ref={openRef}>
					Menu
				</div>
				<div id='close' ref={closeRef}>
					Close
				</div>
			</div>
		</StyledMenuLink>
	);
}

export default MenuLink;
