import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";
import Container from "../Containers/Container";
import useResize from "../../helpers/hooks/useResize";
import classNames from "classnames";

function StickySection({
	children,
	scrub,
	animation,
	els,
	start,
	dataTheme,
	classes,
}) {
	gsap.registerPlugin(ScrollTrigger);
	const tl = useRef(null);
	const trigger = useRef(null);
	const { windowWidth } = useResize();

	const stickyClasses = classNames("o-sticky -fullHeight", {
		[classes]: classes,
	});

	useEffect(() => {
		ScrollTrigger.refresh();
	}, [windowWidth]);

	useEffect(() => {
		if (trigger.current) {
			tl.current = gsap.timeline({
				scrollTrigger: {
					trigger: trigger.current,
					start: start ? start : "top top",
					scrub: scrub ? scrub : !0,
					pin: true,
					pinSpacing: false,
					invalidateOnRefresh: true,
				},
			});
		}

		if (els && animation) {
			tl.current.to(els, animation);
		}
	}, [trigger, tl, els, animation]);

	return (
		<div
			className={stickyClasses}
			ref={trigger}
			data-theme={dataTheme ? dataTheme : "regular"}
		>
			<Container>{children}</Container>
		</div>
	);
}

export default StickySection;
