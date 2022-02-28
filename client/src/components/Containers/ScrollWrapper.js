import React, { forwardRef, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Scroll } from "react-locomotive-scroll";
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
			}, // we don't have to define a scrollLeft because we're only scrolling vertically.
			getBoundingClientRect() {
				return {
					top: 0,
					left: 0,
					width: window.innerWidth,
					height: window.innerHeight,
				};
			},
			// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
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
