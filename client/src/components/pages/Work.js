import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Container from "../Containers/Container";
import Section from "../Containers/Section";
import Link from "../Link/Link";

function Work({ projects }) {
	gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

	// const [location] = useMouseMove();
	// const wave = useRef(null);
	const trigger = useRef(null);
	const list = useRef(null);
	const scroll = useLocomotiveScroll();
	const [listImages, setListImages] = useState(null);
	// const waveTl = useRef(gsap.timeline());

	useEffect(() => {
		//Set feature images
		if (!listImages && projects) {
			let images = [];
			for (let project in projects) {
				images.push(projects[project].Cover.image.url);
			}
			setListImages(images);
		}

		if (scroll && scroll.scroll) {
			

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
	}, [scroll, projects, listImages]);

	return (
		<Section
			classes='o-work -relative -padding-lg'
			data-theme='banana'
			ref={trigger}
		>
			<Container>
				<ul className='o-work_list -padding-huge skewElem' ref={list}>
					{projects &&
						projects.slice(0, 5).map(project => {
							return (
								<li
									key={project.id}
									className='o-work_list_item'
									// onMouseEnter={() => handleMouseEnter(project.Cover.image.url)}
									// onMouseLeave={handleMouseLeave}
								>
									<Link
										isRouterLink
										href={`/projects/${project.id}`}
										target='_blank'
									>
										<h2 className='o-h2 -split'>{project.Title}</h2>
										<span className='o-text -block '>
											{project.PreviewText}
										</span>
									</Link>
								</li>
							);
						})}
				</ul>
				<Link classes='-text-center -block'>
					For a complete collection of my work, please get in touch
				</Link>
			</Container>
			{/* <WavyImage
				container={trigger.current && trigger.current}
				images={listImages}
			/> */}
		</Section>
	);
}

export default Work;
