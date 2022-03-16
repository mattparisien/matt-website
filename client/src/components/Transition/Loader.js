import classNames from "classnames";
import gsap from "gsap";
import CSSPlugin from "gsap/CSSPlugin";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(CSSPlugin);

function Loader({ isActive, setDone }) {
	const containerRef = useRef(null);
	const bgRef = useRef(null);
	const [firstVisit, setFirstVisit] = useState(true);
	const animation = useRef(gsap.timeline());
	const [paused, setPaused] = useState(false);
	const morph = useRef(null);
	const classes = classNames("o-loader", {
		"is-playing": isActive,
		"is-first-visit": firstVisit,
		"is-transition": !firstVisit,
		"is-paused": paused,
	});

	useEffect(() => {
		bgRef.current.addEventListener("animationend", () => {
			setDone();
			setFirstVisit(false);
		});
	}, []);

	gsap.registerPlugin(MorphSVGPlugin);

	useEffect(() => {
		if (isActive && !firstVisit) {
			animation.current.set(bgRef.current, { scaleY: "0.0001" });

			animation.current.progress(0).play();
			animation.current
				.to(bgRef.current, {
					scaleY: 1,
					ease: "expo.inOut",
					duration: 1.3,
				})
				.to(
					bgRef.current,
					{
						scaleY: 0.0001,

						ease: "expo.inOut",
						duration: 1.3,
						onComplete: () => {
							setDone();
						},
					},
					2.3
				)
				.set(bgRef.current, { clearProps: "all" });
		}
	}, [isActive, firstVisit]);

	return (
		<div
			className={classes}
			ref={containerRef}
			style={{ display: isActive ? "block" : "none" }}
		>
			{/* <div className='o-loader_content' ref={content}> */}
			{/* {isActive && <Planet1 isPlaying={isActive} isComplete={!isActive}/>} */}
			<div className='o-loader_background' ref={bgRef}></div>

			{/* </div> */}
			{/* <Box className='o-loader_background' ref={bg}></Box> */}
		</div>
	);
}

export default Loader;
