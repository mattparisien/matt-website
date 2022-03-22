import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

function WaveSection({ classes, children, dataTheme, waveTop, waveBottom }) {
	const waveClasses = classNames("o-wave-section", { [classes]: classes });
	const waves = useRef([]);
	waves.current = [];
	const tl = useRef(null);
	gsap.registerPlugin(ScrollTrigger);
	const trigger = useRef(null);

	useEffect(() => {
		const morphPaths = [
			"M0,96L60,101.3C120,107,240,117,360,154.7C480,192,600,256,720,272C840,288,960,256,1080,208C1200,160,1320,96,1380,64L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
			"M0,96L40,112C80,128,160,160,240,144C320,128,400,64,480,42.7C560,21,640,43,720,69.3C800,96,880,128,960,149.3C1040,171,1120,181,1200,192C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z",
			"M0,192L80,165.3C160,139,320,85,480,85.3C640,85,800,139,960,154.7C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",
			"M0,224L34.3,208C68.6,192,137,160,206,128C274.3,96,343,64,411,58.7C480,53,549,75,617,96C685.7,117,754,139,823,138.7C891.4,139,960,117,1029,117.3C1097.1,117,1166,139,1234,160C1302.9,181,1371,203,1406,213.3L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z",
			"M0,128L34.3,133.3C68.6,139,137,149,206,138.7C274.3,128,343,96,411,106.7C480,117,549,171,617,170.7C685.7,171,754,117,823,122.7C891.4,128,960,192,1029,192C1097.1,192,1166,128,1234,101.3C1302.9,75,1371,85,1406,90.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z",
		];

		if (trigger.current && waves.current) {
			tl.current = gsap.timeline({
				scrollTrigger: {
					trigger: trigger.current,
					start: "top top",
					scrub: !0,
					invalidateOnResize: true,
				},
			});

			tl.current
				.to(waves.current, {
					morphSVG: morphPaths[0],
				})
				.to(waves.current, {
					morphSVG: morphPaths[1],
				})
				.to(waves.current, {
					morphSVG: morphPaths[2],
				})
				.to(waves.current, {
					morphSVG: morphPaths[3],
				})
				.to(waves.current, {
					morphSVG: morphPaths[4],
				});
		}
	}, [waves, trigger]);

	const addToRefs = el => {
		if (el && !waves.current.includes(el)) {
			waves.current.push(el);
		}
	};

	return (
		<section
			className={waveClasses}
			data-theme={dataTheme ? dataTheme : ""}
			ref={trigger}
		>
			<div className='o-wave-section_wave o-wave-section_wave_top'>
				<div className='o-wave-section_wave_inner'>
					<Wave color={waveTop} addToRefs={addToRefs} />
				</div>
			</div>
			{children}
		</section>
	);
}

function Wave({ color, addToRefs }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 1440 320'
			preserveAspectRatio='none'
			className={`c-wave`}
		>
			<path
				ref={addToRefs}
				className={`-fill-${color}`}
				d='M0,256L60,266.7C120,277,240,299,360,288C480,277,600,235,720,224C840,213,960,235,1080,256C1200,277,1320,299,1380,309.3L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
			></path>
		</svg>
	);
}

export default WaveSection;
