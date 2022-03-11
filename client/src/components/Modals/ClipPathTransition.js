import React, { forwardRef, useRef, useEffect } from "react";
import gsap from "gsap";

function ClipPathTransition(props, ref) {
	const { isTransitioning, setIsTransitioning, container, setState } = props;

	const morphPath = useRef(null);
	const morphAnimation = useRef(gsap.timeline());

	useEffect(() => {
		if (isTransitioning && morphPath.current && container) {
			const morphPaths = [
				"M1031.55,588.51c-325.63-357-644.29-358.79-956.39,0V190.8h956.39Z",
				"M1031.55,192.36c-421.94.1-539.14-.26-956.39,1v-2.6h956.39Z",
			];

			morphAnimation.current
				.to(morphPath.current, {
					morphSVG: morphPaths[0],
					duration: 0.5,
					ease: "power3.in",
				})
				.to(morphPath.current, {
					morphSVG: morphPaths[1],
					duration: 0.5,
					ease: "power3.out",
					onComplete: () => {
						setIsTransitioning(false);
					},
				})
				.to(
					container,
					{
						opacity: 0,
					},
					0.6
				)
				.set(container, { display: "none" });
		}
	}, [morphPath, isTransitioning, container]);

	return (
		<>
			{props.children}
			<svg
				className='transition-clipPath'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 956.39 577.3'
			>
				<defs>
					<clipPath
						id='transition-clipPath__clip'
						clipPathUnits={"objectBoundingBox"}
					>
						<path
							className='transition-clipPath__path'
							d='M1031.55,768.1H75.16V190.8h956.39Z'
							transform='translate(-75.16 -190.8)'
							ref={morphPath}
						/>
					</clipPath>
				</defs>
			</svg>
		</>
	);
}

export default forwardRef(ClipPathTransition);
