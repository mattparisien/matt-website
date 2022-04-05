import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import $ from "jquery";

function TransitionCard({ isActive }) {
	const tl = useRef(gsap.timeline());
	const text = useRef(null);
	const container = useRef(null);
	const background = useRef(null);
	const content = useRef(null);

	useEffect(() => {

		setTimeout(() => {
			tl.current
			// .to($(container.current).find(".line"), {
			// 	scaleX: 1,
			// 	duration: 0.6,
			// 	ease: "power3",
			// 	stagger: 0.1,
			// })
			.to(background.current, {
				scaleY: 0,
				duration: 1,
				ease: "power3.out",
			})
			.to(
				content.current,
				{
					opacity: 0,
				},
				0.9
			)
			.set(container.current, { display: "none" });		
		}, 300);
	
	}, []);

	return (
		<div className='o-transitionCard' ref={container}>
			<div className='o-transitionCard_content' ref={content}>
				<div className='line'></div>
				<div className='line'></div>
				<div className='line'></div>
			</div>
			<div className='o-transitionCard_bg' ref={background}></div>
		</div>
	);
}

export default TransitionCard;
