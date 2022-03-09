import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { forwardRef, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function ScrollWrapper(props, ref) {
	const { scroll } = useLocomotiveScroll();

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (ref.current && scroll) {
			scroll.on("scroll", ScrollTrigger.update);
		}

		ScrollTrigger.scrollerProxy(ref.current, {
			scrollTop(value) {
				return arguments.length
					? scroll.scrollTo(value, 0, 0)
					: scroll.scroll.instance.scroll.y;
			},
			getBoundingClientRect() {
				return {
					top: 0,
					left: 0,
					width: window.innerWidth,
					height: window.innerHeight,
				};
			},
			pinType: ref.current.style.transform ? "transform" : "fixed",
		});
	}, [ref, scroll]);

	return (
		<div className='ScrollWrapper' data-scroll-container ref={ref}>
			{props.children}
		</div>
	);
}

export default forwardRef(ScrollWrapper);
