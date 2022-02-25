import React, { useRef, useEffect } from "react";
import { StyledCursorRing, StyledCursorDot } from "./styles/StyledCursor";
import useMouseMove from "../../helpers/hooks/useMouseMove";
import $ from "jquery";

function Cursor() {
	const cursorWrapper = useRef(null);
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

	useEffect(() => {
		endX.current = location.pageX;
		endY.current = location.pageY;

		const animateFollower = () => {
			_x.current += (endX.current - _x.current) / delay;
			_y.current += (endY.current - _y.current) / delay;
			console.log(endX.current)

			$(cursorRing.current).css({
				top: `${_y.current}px`,
				left: `${_x.current}px`,
			});
		};

		animateFollower();

		if (cursorDot.current) {
			$(cursorDot.current).css({
				top: `${endY.current}px`,
				left: `${endX.current}px`,
			});
		}

		return () => {
			cancelAnimationFrame(requestRef.current);
		};
	}, [location, cursorRing, cursorDot, requestRef]);

	return (
		<>
			<StyledCursorDot id='cursor-dot' ref={cursorDot}></StyledCursorDot>
			<StyledCursorRing id='cursor-ring' ref={cursorRing}></StyledCursorRing>
		</>
	);
}

export default Cursor;
