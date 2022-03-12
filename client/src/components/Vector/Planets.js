import { DrawSVGPlugin } from "gsap/all";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import $ from "jquery";
import { useInView } from "react-intersection-observer";

export function Planet1() {
	const planet = useRef(null);
	const { ref, inView } = useInView({ threshold: 0.9 });
	gsap.registerPlugin(DrawSVGPlugin);

	useEffect(() => {
		if (planet && inView) {
			console.log($(planet.current).find(".u-gsap-fill-animate"));
			const tl = new gsap.timeline();
			tl.to($(planet.current).find(".u-gsap-stroke-animate"), {
				drawSVG: "100%",

				duration: 1,
				ease: "circ.inOut",
			}).to(
				$(planet.current).find(".u-gsap-fill-animate"),
				{
					opacity: 1,
					ease: "expo.inOut",
					duration: 1,
				},
				0.3
			);
		}
	}, [planet, inView]);

	return (
		<div className='c-planet' ref={planet}>
			<div className='c-planet_label u-gsap-fill-animate'>
				Observe <sup>1</sup>{" "}
			</div>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 306.4 306.4'
				className='c-planet-svg'
				ref={ref}
			>
				<path
					className='c-planet_globe-big u-gsap-stroke-animate'
					d='M508,470.85A100.38,100.38,0,1,1,407.57,370.48,100.38,100.38,0,0,1,508,470.85Z'
					transform='translate(-204.27 -362.54)'
				/>
				<path
					d='M372.89,564.94c-17.66,16.81-35.07,32.09-51.61,45.45'
					transform='translate(-204.27 -362.54)'
					className='u-gsap-stroke-animate'
				/>
				<path
					d='M248.4,659.39c-19.46,9.44-33.74,11.87-40.09,5.52-18-18,34.27-99.3,116.65-181.68S488.68,348.62,506.64,366.58c7.71,7.71,2.47,27.14-12.57,53.33'
					transform='translate(-204.27 -362.54)'
					className='u-gsap-stroke-animate'
				/>
				<path
					className='-fill-blue u-gsap-fill-animate'
					d='M320.91,634.64a33.81,33.81,0,1,1-33.8-33.81A33.8,33.8,0,0,1,320.91,634.64Z'
					transform='translate(-204.27 -362.54)'
				/>
			</svg>
		</div>
	);
}

export function Planet2() {
	const planet = useRef(null);
	const { ref, inView } = useInView({ threshold: 0.9 });
	gsap.registerPlugin(DrawSVGPlugin);

	useEffect(() => {
		if (planet && inView) {
			console.log($(planet.current).find(".u-gsap-fill-animate"));
			const tl = new gsap.timeline();
			tl.to($(planet.current).find(".u-gsap-stroke-animate"), {
				drawSVG: "100%",
				duration: 1,
				stagger: 0.1,
				ease: "circ.inOut",
			}).to(
				$(planet.current).find(".u-gsap-fill-animate"),
				{
					opacity: 1,
					ease: "expo.inOut",
					duration: 1,
				},
				0.3
			);
		}
	}, [planet, inView]);

	return (
		<div className='c-planet' ref={planet}>
			<div className='c-planet_label u-gsap-fill-animate'>
				Experience <sup>2</sup>
			</div>
			<svg
				className='c-planet_svg'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 201.75 201.75'
				ref={ref}
			>
				<path
					d='M689,381.89m0,0a100.34,100.34,0,1,1-40.2,38.38'
					transform='translate(-634.68 -369.98)'
					className='u-gsap-stroke-animate'
				/>
				<path
					d='M814.19,470.85a78.63,78.63,0,1,1-78.63-78.63A78.63,78.63,0,0,1,814.19,470.85Z'
					transform='translate(-634.68 -369.98)'
					className='-fill-dark u-gsap-fill-animate'
				/>
			</svg>
		</div>
	);
}

export function Planet3() {
	const planet = useRef(null);
	const { ref, inView } = useInView({ threshold: 0.9 });
	gsap.registerPlugin(DrawSVGPlugin);

	useEffect(() => {
		if (planet && inView) {
			console.log($(planet.current).find(".u-gsap-fill-animate"));
			const tl = new gsap.timeline();
			tl.to($(planet.current).find(".u-gsap-stroke-animate"), {
				drawSVG: "100%",
				duration: 1,
				stagger: 0.1,
				ease: "circ.inOut",
			}).to(
				$(planet.current).find(".u-gsap-fill-animate"),
				{
					opacity: 1,
					ease: "expo.inOut",
					duration: 1,
				},
				0.3
			);
		}
	}, [planet, inView]);

	return (
		<div className='c-planet' ref={planet}>
			<div className='c-planet_label u-gsap-fill-animate'>
				Remember <sup>3</sup>{" "}
			</div>
			<svg
				className='c-planet_svg'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 317.5 318.18'
				ref={ref}
			>
				<path
					d='M1177.88,470.85a100.38,100.38,0,1,1-100.37-100.37A100.38,100.38,0,0,1,1177.88,470.85Z'
					transform='translate(-924.05 -303.26)'
					className='u-gsap-stroke-animate'
				/>
				<path
					d='M1085.19,470.85a7.69,7.69,0,1,1-7.68-7.68A7.68,7.68,0,0,1,1085.19,470.85Z'
					transform='translate(-924.05 -303.26)'
					className='-fill-dark'
				/>
				<path
					d='M1097.46,455.65l131.22-129.12'
					transform='translate(-924.05 -303.26)'
					className='u-gsap-stroke-animate'
				/>
				<path
					d='M1092.85,410.79l48.63-107.32'
					transform='translate(-924.05 -303.26)'
					className='u-gsap-stroke-animate'
				/>
				<path d='M1061,448.1l-76.3-91' transform='translate(-924.05 -303.26)' />
				<path
					d='M924.32,370.48l132.89,85.17'
					transform='translate(-924.05 -303.26)'
					className='u-gsap-stroke-animate'
				/>
				<path
					d='M1134.35,505.54l106.91,77.13'
					transform='translate(-924.05 -303.26)'
					className='u-gsap-stroke-animate'
				/>
				<path
					d='M1088.24,491.7,1144,621.24'
					transform='translate(-924.05 -303.26)'
					className='u-gsap-stroke-animate'
				/>
				<path
					d='M1061,486.67,941.51,596.09'
					transform='translate(-924.05 -303.26)'
					className='u-gsap-stroke-animate'
				/>
			</svg>
		</div>
	);
}

export function Planet4() {
	const planet = useRef(null);
	const { ref, inView } = useInView({ threshold: 0.9 });
	gsap.registerPlugin(DrawSVGPlugin);

	useEffect(() => {
		if (planet && inView) {
			console.log($(planet.current).find(".u-gsap-fill-animate"));
			const tl = new gsap.timeline();
			tl.to($(planet.current).find(".u-gsap-stroke-animate"), {
				drawSVG: "100%",
				duration: 1,
				stagger: 0.1,
				ease: "circ.inOut",
			}).to(
				$(planet.current).find(".u-gsap-fill-animate"),
				{
					opacity: 1,
					ease: "expo.inOut",
					duration: 1,
				},
				0.3
			);
		}
	}, [planet, inView]);

	return (
		<div className='c-planet -absolute -bottom -right' ref={planet}>
			<svg
				className='c-planet_svg'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 254.93 271.71'
				ref={ref}
				style={{ transform: "scaleX(-1)" }}
			>
				<path
					d='M1776.41-612.75c7.71,2.24,9.29,20.11,3.54,39.91s-16.67,34-24.38,31.8-9.29-20.11-3.54-39.91S1768.7-615,1776.41-612.75Z'
					transform='translate(-1528.98 613.48)'
					className='u-gsap-stroke-animate -stroke-light'
				/>
				<path
					d='M1577.07-362.27c-40.42-38.78-57.07-92.24-42.26-137.79,16.36-50.3,64.54-70.88,83.88-79.15,74-31.63,145.84-.55,161.21,6.55'
					transform='translate(-1528.98 613.48)'
					className='u-gsap-stroke-animate -stroke-light'
				/>
				<path
					d='M1594.48-353.4a11.63,11.63,0,0,1-11.63,11.63,11.63,11.63,0,0,1-11.63-11.63A11.63,11.63,0,0,1,1582.85-365,11.63,11.63,0,0,1,1594.48-353.4Z'
					transform='translate(-1528.98 613.48)'
					className='u-gsap-stroke-animate -fill-light'
				/>
			</svg>
		</div>
	);
}
