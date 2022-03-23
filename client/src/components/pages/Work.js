import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import useMouseMove from "../../helpers/hooks/useMouseMove";
import Section from "../Containers/Section";
import Link from "../Link/Link";

function Work({ projects }) {
	gsap.registerPlugin(ScrollTrigger);

	const [location] = useMouseMove();
	const trigger = useRef(null);
	const list = useRef(null);

	useEffect(() => {
		if (trigger.current && list.current) {
			let proxy = { skew: 0 };

			let skewSetter = gsap.quickSetter(".o-work_list", "skewY", "deg"); // fast
			let clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

			ScrollTrigger.create({
				trigger: trigger.current,
				onUpdate: self => {
					let skew = clamp(self.getVelocity() / -300);
					if (Math.abs(skew) > Math.abs(proxy.skew)) {
						proxy.skew = skew;
						gsap.to(proxy, {
							skew: 0,
							duration: 0.8,
							ease: "power3",
							overwrite: true,
							onUpdate: () => {
								skewSetter(proxy.skew);
							},
						});
					}
				},
			});
		}
	}, [trigger, list]);

	return (
		<Section classes='o-work -offset-prev' data-theme='fancy' ref={trigger}>
			<ul className='o-work_list -padding-huge' ref={list}>
				{projects &&
					projects.slice(0, 4).map(project => {
						return (
							<li
								key={project.id}
								className='o-h2'
								// onMouseEnter={() => handleMouseEnter(project.Cover.image.url)}
								// onMouseLeave={handleMouseLeave}
							>
								<Link href={project.Location} target='_blank'>
									<span>{project.Title}</span>
									<span className='o-text -block '>{project.PreviewText}</span>
								</Link>
							</li>
						);
					})}
			</ul>
			<div
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
			></div>
		</Section>
	);
}

export default Work;
