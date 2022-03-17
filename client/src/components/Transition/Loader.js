import classNames from "classnames";
import gsap from "gsap";
import CSSPlugin from "gsap/CSSPlugin";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import React, { useEffect, useRef, useState } from "react";
import variables from "../../styles/scss/_vars.module.scss";
import $ from "jquery";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(CSSPlugin, SplitText);

function Loader({ isActive, setDone }) {

	const containerRef = useRef(null);
	const bgRef = useRef(null);
	const [firstVisit, setFirstVisit] = useState(true);
	const animation = useRef(gsap.timeline());
	const heading = useRef(null);

	const classes = classNames("o-loader", {
		"is-playing": isActive,
		"is-first-visit": firstVisit,
		"is-transition": !firstVisit,
	});

	const [isSplit, setSplit] = useState(false);
	const split = useRef(null);

	useEffect(() => {
		if (!isSplit && !split.current) {
			const splitText = new SplitText(heading.current, {
				type: "chars",
				charsClass: "loader-char",
			});
			setSplit(true);
			split.current = splitText;
		}
	}, [isSplit]);

	useEffect(() => {
		bgRef.current.addEventListener("animationend", () => {
			setDone();
			setFirstVisit(false);
		});
	}, [setDone]);

	gsap.registerPlugin(MorphSVGPlugin);

	useEffect(() => {
		if (isActive && !firstVisit) {
			animation.current.set(bgRef.current, { scaleY: "0.0001" });

			animation.current.progress(0).play();
			animation.current
				.to(bgRef.current, {
					delay: variables.loaderDelay,
					scaleY: 1,
					ease: "expo.inOut",
					duration: variables.loaderDuration,
				})
				.to($(heading.current).find(".loader-char"), {
					y: 0,
					duration: 1,
					opacity: 1,
					ease: "expo.inOut",
					stagger: 0.03,
				}, 1.1)
				.to($(heading.current).find(".loader-char"), {
					y: '-100%',
					duration: 1,
					opacity: 0,
					ease: "expo.inOut",
					stagger: 0.03,
				})
				.to(
					bgRef.current,
					{
						scaleY: 0.0001,
						delay: variables.loaderDelay,
						ease: "expo.inOut",
						duration: variables.loaderDuration,
						onComplete: () => {
							setDone();
						},
					},
					1.8
				)
				.set(bgRef.current, { clearProps: "all" });
		}
	}, [isActive, firstVisit, setDone]);

	return (
		<div
			className={classes}
			ref={containerRef}
			style={{ display: isActive ? "flex" : "none" }}
		>
			{/* <div className='o-loader_content' ref={content}> */}
			{/* {isActive && <Planet1 isPlaying={isActive} isComplete={!isActive}/>} */}
			<div className='o-loader_background' ref={bgRef}></div>
			<div className='o-loader_text'>
				<h2 className='o-h2' ref={heading}>
					Work hard
				</h2>
			</div>

			{/* </div> */}
			{/* <Box className='o-loader_background' ref={bg}></Box> */}
		</div>
	);
}

export default Loader;
