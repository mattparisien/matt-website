import React, { useRef } from "react";
import { StyledCursor } from "./styles/StyledCursor";
import useMouseMove from "../../helpers/hooks/useMouseMove";

function Cursor() {
	const cursorRing = useRef(null);
	const cursorDot = useRef(null);
	const delay = 18;
	const cursorVisible = useRef(true);
	const cursorEnlarged = useRef(false);
	const endX = useRef(window.innerWidth / 2);
	const endY = useRef(window.innerHeight / 2);
	const _x = useRef(0);
	const _y = useRef(0);
	const requestRef = useRef(null);

	const [location] = useMouseMove();

	return (
		<StyledCursor id='cursor' className='cursor-wrapper'>
			<div className='cursor-inner'>
				<div className='cursor-ring' ref={cursorRing}>
					<div className='cursor-dot' ref={cursorDot}></div>
				</div>
			</div>
		</StyledCursor>
	);
}

export default Cursor;
