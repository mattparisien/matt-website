import React, { useEffect, useRef, useState } from "react";
import useMouseMove from "../../helpers/hooks/useMouseMove";
import gsap from "gsap";

function Eyes() {
	const containerLeft = useRef(null);
	const containerRight = useRef(null);

	return (
		<div className='c-eyes'>
			<div className='c-eyes_inner -relative'>
				<div className='c-eyes_eye-wrapper' ref={containerLeft}>
					<Eye />
				</div>
				<div className='c-eyes_eye-wrapper' ref={containerLeft}>
					<Eye />
				</div>
			</div>
		</div>
	);
}

const Eye = ({ eyeLocation }) => {
	const [location] = useMouseMove();
	const iris = useRef(null);
	const tl = useRef(gsap.timeline());

	useEffect(() => {
		if (location && iris.current) {
			// const container = $(iris.current).parents()[2];
			// const containerOffsetLeft = $(container).offset().left;
			// const containerOffsetTop = $(container).offset().top;
			tl.current
				.to(iris.current, {
					y: "100%",
					duration: 2,
					ease: "power3.out",
				})
				.to(iris.current, {
					y: "0",
					duration: 2,
					ease: "power3.out",
				})
				.to(iris.current, {
					y: "50%",
					x: "-50%",
					duration: 2,
					ease: "power3.out",
				})
				.to(iris.current, {
					y: "0",
					x: "0",
					duration: 2,
					ease: "power3.out",
				});
		}
	}, [location]);

	return (
		<div className='c-eyes_eye'>
			<div className='c-eyes_eye_inner'>
				<div className='c-eyes_iris' ref={iris}></div>
			</div>
			<div className='c-eyes_eye_revealer -accent'></div>
		</div>
	);
};

export default Eyes;
