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
				"M0,160L60,160C120,160,240,160,360,176C480,192,600,224,720,208C840,192,960,128,1080,101.3C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
				"M0,32L60,69.3C120,107,240,181,360,181.3C480,181,600,107,720,64C840,21,960,11,1080,26.7C1200,43,1320,85,1380,106.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",

				// "M0,192L60,202.7C120,213,240,235,360,218.7C480,203,600,149,720,144C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",

				"M0,160L60,149.3C120,139,240,117,360,96C480,75,600,53,720,53.3C840,53,960,75,1080,96C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
				"M0,288L60,293.3C120,299,240,309,360,288C480,267,600,213,720,202.7C840,192,960,224,1080,202.7C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
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
					fill-opacity='1'
					d='M0,256L60,250.7C120,245,240,235,360,202.7C480,171,600,117,720,117.3C840,117,960,171,1080,176C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
					ref={wave}
				></path>
			</svg>
		</div>
	);
}

export default Wave;
