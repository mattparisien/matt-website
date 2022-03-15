import classNames from "classnames";
import gsap from "gsap";
import CSSPlugin from "gsap/CSSPlugin";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(CSSPlugin);

function Loader({ isActive, setDone }) {
	const containerRef = useRef(null);

	const firstVisit = useRef(true);
	const morph = useRef(null);
	const classes = classNames("o-loader", {
		"is-first-visit": firstVisit.current,
	});
	const introTl = useRef(gsap.timeline({ paused: true }));
	const transitionTl = useRef(gsap.timeline({ paused: true }));

	gsap.registerPlugin(MorphSVGPlugin);

	useEffect(() => {
		if (firstVisit.current) {
			introTl.current.progress(0).play();

			introTl.current
				.to(morph.current, {
					morphSVG: "M1920,1080Q934.24-163,0,1080V0H1920Z",
					duration: 1,
					ease: "power4.in",
				})

				.to(morph.current, {
					morphSVG: "M1920,2.88C1030.43,8.73,771.26-2.88,0,6.43V0H1920Z",
					duration: 0.5,
					onComplete: () => {
						firstVisit.current = false;
						setDone();
					},
					ease: "circ.out",
				})
				.to(
					morph.current,
					{
						opacity: 0,
					},
					1.4
				)
				.set(containerRef.current, { display: "none" })
				.set(morph.current, { clearProps: "all" });
		} else if (!firstVisit.current && isActive) {
			console.log(firstVisit.current);
			console.log("should only be in here once!");

			transitionTl.current.progress(0).play();
			transitionTl.current
				.set(containerRef.current, { display: "block" })
				.set(morph.current, {
					d: "M1920,2.88c-825.48,4-1141.79.33-1920,3.55V0H1920Z",
				})
				.to(morph.current, {
					morphSVG: "M1920,2.88C997.84,911.61,646.32,644.75,0,6.43V0H1920Z",
					duration: 1,
					ease: "power3.in",
					onComplete: () => {
						console.log("has been called!");
					},
				})
				.to(morph.current, {
					morphSVG: "M1920,1081.06c-994.4,6.13-1397.58,7.86-1920-1.06V0H1920Z",
					duration: 1,
					ease: "power3.out",
				})
				.to(morph.current, {
					morphSVG: "M1920,1081.06C1052.82,93.42,621.09,318.13,0,1080V0H1920Z",
					duration: 1,
					ease: "power3.in",
					onComplete: () => {
						setDone();
					},
				})
				.to(morph.current, {
					morphSVG: "M1920,15.33C1268.14,1.25,664.14,5,0,8.83V0H1920Z",
					duration: 1,
					ease: "power3.out",
				})
				.to(
					morph.current,
					{
						opacity: 0,
					},
					3.4
				)
				.set(containerRef.current, { display: "none" });
		}

		//Intro timeline

		//Transition timeline
	}, [isActive, setDone]);

	// useEffect(() => {
	// 	if (isActive && !hasPlayed) {
	// 		setHasPlayed(true);

	// 		const tl = gsap.timeline();

	// 		tl.set(containerRef.current, { display: "flex" })
	// 			.to(bg.current, {
	// 				scaleX: 1,
	// 				duration: 1,
	// 				ease: "circ.inOut",
	// 			})
	// 			.to(
	// 				bg.current,
	// 				{
	// 					scaleY: 0.001,
	// 					duration: 1,
	// 					ease: "circ.inOut",
	// 					transformOrigin: "top",
	// 				},
	// 				1
	// 			)
	// 			.to(
	// 				content.current,
	// 				{
	// 					opacity: 0,
	// 					onComplete: () => {
	// 						setDone();
	// 						setHasPlayed(false)
	// 						setFirstVisit(false);
	// 					},
	// 				},
	// 				1.3
	// 			)
	// 			.set([bg.current, content.current, containerRef.current], {
	// 				clearProps: "all",
	// 			});
	// 	}
	// }, [isActive, setDone, hasPlayed]);

	return (
		<div className={classes} ref={containerRef}>
			{/* <div className='o-loader_content' ref={content}> */}
			{/* {isActive && <Planet1 isPlaying={isActive} isComplete={!isActive}/>} */}
			<svg
				className='o-loader_svg'
				preserveAspectRatio='none'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1920 1080'
			>
				<path ref={morph} d='M1920,1080H0V0H1920Z' />
			</svg>

			{/* </div> */}
			{/* <Box className='o-loader_background' ref={bg}></Box> */}
		</div>
	);
}

export default Loader;
