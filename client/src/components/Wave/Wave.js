import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useEffect, useRef } from "react";

function Wave(props, ref) {
	gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

	const wave = useRef(null);
	const waveTl = useRef(gsap.timeline());

	useEffect(() => {
		console.log();

		if (props.trigger && wave.current) {
			const morphPaths = [
				"M0,224L80,229.3C160,235,320,245,480,234.7C640,224,800,192,960,186.7C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",

				"M0,160L80,154.7C160,149,320,139,480,165.3C640,192,800,256,960,272C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",
				"M0,128L80,144C160,160,320,192,480,208C640,224,800,224,960,192C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",
				"M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,133.3C672,117,768,107,864,106.7C960,107,1056,117,1152,128C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
			];

			waveTl.current
				.to(wave.current, {
					morphSVG: morphPaths[0],
				})
				.to(wave.current, {
					morphSVG: morphPaths[1],
				})
				.to(wave.current, {
					morphSVG: morphPaths[2],
				})

				.to(wave.current, {
					morphSVG: morphPaths[3],
				})
				.to(wave.current, {
					morphSVG: morphPaths[4],
				})
				.to(wave.current, {
					morphSVG: morphPaths[5],
				});

			ScrollTrigger.create({
				trigger: props.trigger,
				end: "+=3000",
				animation: waveTl.current,
				scrub: !0,

				// onUpdate: self => {
				// 	let skew = clamp(self.getVelocity() / -300);
				// 	if (Math.abs(skew) > Math.abs(proxy.skew)) {
				// 		proxy.skew = skew;
				// 	}
				// },
			});
		}
	}, [props.trigger, wave, waveTl]);

	return (
		<div
			className={`c-wave ${props.location === "top" ? "is-top" : "is-bottom"}`}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'
				className={`-fill-${props.color}`}
			>
				<path
					ref={wave}
					fill-opacity='1'
					d='M0,32L1440,64L1440,320L0,320Z'
				></path>
			</svg>
		</div>
	);
}

export default Wave;
