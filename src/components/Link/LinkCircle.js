import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import React, { useRef } from "react";

export default function LinkCircle({ isSelect }) {
	const circleStyle = {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		transform: 'scale(2.5)'
	};

	const lineRef = useRef(null);

	const handleMouseEnter = () => {
		gsap.registerPlugin(DrawSVGPlugin);
		gsap.to(lineRef.current, {
			drawSVG: "100%",
		});
	};

	const handleMouseLeave = () => {
		gsap.registerPlugin(DrawSVGPlugin);
		gsap.to(lineRef.current, {
			drawSVG: "0%",
		});
	};

	return (
		<>
			<svg
				className='LinkCircle'
				data-name='Layer 1'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 118.46 40.88'
				style={circleStyle}
				onMouseEnter={!isSelect && handleMouseEnter}
				onMouseLeave={!isSelect && handleMouseLeave}
			>
				<path
					style={{
						fill: "none",
						strokeWidth: "1px",
						strokeDashoffset: !isSelect && "0.001",
						strokeDasharray: !isSelect && "0px, 999999px",
					}}
					ref={lineRef}
					d='M238.46,192.41c0,11-26.3,20-58.73,20s-58.73-8.93-58.73-20,26.29-19.94,58.73-19.94S238.46,181.4,238.46,192.41Z'
					transform='translate(-120.5 -171.97)'
				/>
			</svg>
		</>
	);
}
