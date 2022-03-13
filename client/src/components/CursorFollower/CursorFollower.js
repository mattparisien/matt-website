import React, { useEffect, useRef } from "react";
import useMouseMove from "../../helpers/hooks/useMouseMove";

function CursorFollower() {
	const [location] = useMouseMove();
	const follower = useRef(null);

	useEffect(() => {
		// function lerp(start, end, t) {
		// 	return start * (1 - t) + end * t;
		// }

		// if (follower.current) {
		// 	const lerp = (a, b, n) => (1 - n) * a + n * b;
		// }
	}, [location, follower]);

	return (
		<div className='c-follower' ref={follower}>
			<span></span>
		</div>
	);
}

export default CursorFollower;
