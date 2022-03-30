import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Section from "../Containers/Section";
import Link from "../Link/Link";
import Wave from "../Wave/Wave";
import Container from "../Containers/Container";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import $ from "jquery";

function Work({ projects }) {
	gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

	// const [location] = useMouseMove();
	// const wave = useRef(null);
	const trigger = useRef(null);
	const list = useRef(null);
	const scroll = useLocomotiveScroll();
	// const waveTl = useRef(gsap.timeline());

	useEffect(() => {
		if (scroll && scroll.scroll) {
			const skewEl = $(".skewElem");

			scroll.scroll.on("scroll", () => {
				return ScrollTrigger.update;
			});


			

			ScrollTrigger.scrollerProxy(".ScrollWrapper", {
				scrollTop(value) {
					return arguments.length
						? scroll.scroll.scrollTo(value, 0, 0)
						: scroll.scroll.scroll.instance.scroll.y;
				},
				getBoundingClientRect() {
					return {
						top: 0,
						left: 0,
						width: window.innerWidth,
						height: window.innerHeight,
					};
				},
			});

			let proxy = { skew: 0 },
				skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
				clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

			ScrollTrigger.create({
				scroller: ".ScrollWrapper",
				trigger: trigger.current,

				onUpdate: self => {
					let skew = clamp(self.getVelocity() / -300);
					// only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
					if (Math.abs(skew) > Math.abs(proxy.skew)) {
						proxy.skew = skew;
						gsap.to(proxy, {
							skew: 0,
							duration: 0.4,
							ease: "power3",
							overwrite: true,
							onUpdate: () => skewSetter(proxy.skew),
						});
					}
				},
			});
		}
	}, [scroll]);

	return (
		<Section
			classes='o-work -offset-prev -relative -padding-lg'
			data-theme='banana'
			ref={trigger}
		>
			<Container>
				<ul className='o-work_list -padding-huge skewElem' ref={list}>
					{projects &&
						projects.slice(0, 4).map(project => {
							return (
								<li
									key={project.id}
									className='o-h2 o-work_list_item'
									// onMouseEnter={() => handleMouseEnter(project.Cover.image.url)}
									// onMouseLeave={handleMouseLeave}
								>
									<Link href={project.Location} target='_blank'>
										<span>{project.Title}</span>
										<span className='o-text -block '>
											{project.PreviewText}
										</span>
									</Link>
								</li>
							);
						})}
				</ul>
				{/* <div
				className='o-work_image -absolute -absolute-center'
				style={{
					// backgroundImage: `url(${currentImage})`,
					opacity: 0,
					left: location.pageX,
					top: location.pageY,
					transform: "translate(-50%, -50%)",
					transformOrigin: "center",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			></div> */}
				{/* <div className='o-work_image'></div> */}
				{/* <Wave
					location={"bottom"}
					color='orange'
					trigger={trigger.current && trigger.current}
				/> */}
			</Container>
		</Section>
	);
}

export default Work;
