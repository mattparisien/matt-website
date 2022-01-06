import React, { useRef, useEffect, useState } from "react";
import useSplit from "../../../helpers/hooks/useSplit";
import gsap from "gsap";
import $ from "jquery";

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
			

			tl.current
				.to(openChars, {
					y: "-100%",
					duration: 0.5,
					stagger: 0.1,
					opacity: 0,
					ease: 'power3.in'
				})
				.to(
					closeChars,
					{
						y: "0",
						stagger: 0.1,
						opacity: 1,
						duration: 0.5,
						ease: 'power3.out'
					}
				);
		}
	}, [isMenuActive, openRef, closeRef]);

	return (
		<a className='menu-trigger' onClick={onClickHandler}>
			<div className='menu-trigger__inner'>
				<div id='menu' ref={openRef}>
					Menu
				</div>
				<div id='close' ref={closeRef}>
					Close
				</div>
			</div>
		</a>
	);
}

export default MenuLink;
