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
		if (cursorRing.current) {
			$(cursorRing.current).css({
				top: location.pageY,
				left: location.pageX,
			});
		}

		if (cursorDot.current) {
			$(cursorDot.current).css({
				top: location.pageY,
				left: location.pageX,
			});
		}
	}, [location, cursorRing, cursorDot]);

	return (
		<>
			<StyledCursorDot id="cursor-dot" ref={cursorDot}></StyledCursorDot>
			<StyledCursorRing id="cursor-ring" ref={cursorRing}></StyledCursorRing>
		</>
	);
}

export default Cursor;
