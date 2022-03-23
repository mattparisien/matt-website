import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useRef } from "react";
import Section from "../Containers/Section";
import Link from "../Link/Link";
import Wave from "../Wave/Wave";

function Work({ projects }) {
	gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

	// const [location] = useMouseMove();
	// const wave = useRef(null);
	const trigger = useRef(null);
	const list = useRef(null);
	// const waveTl = useRef(gsap.timeline());


	return (
		<Section
			classes='o-work -offset-prev -relative -padding-lg'
			data-theme='banana'
			ref={trigger}
		>
			<Wave
				location={"top"}
				color='deepGreen'
				trigger={trigger.current && trigger.current}
			/>
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
		</Section>
	);
}

export default Work;
