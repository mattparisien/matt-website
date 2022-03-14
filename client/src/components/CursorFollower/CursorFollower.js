import classNames from "classnames";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import useMouseMove from "../../helpers/hooks/useMouseMove";
import $ from "jquery";

function CursorFollower({ cursorState }) {
	const [location] = useMouseMove();
	const follower = useRef(null);
	const classes = classNames("c-follower", {
		"is-hovering": cursorState === "hovering",
	});

	useEffect(() => {
		function lerp(start, end, t) {
			return start * (1 - t) + end * t;
		}

		if (follower.current) {
			if (cursorState === "hovering") {
				$(follower.current).css({
					transform: 'translate(-50%, -50%)scale(3)',
				});
			} else {
				$(follower.current).css({
					transform: 'translate(-50%, -50%)scale(1)',
				});
			}

			setTimeout(() => {
				$(follower.current).css({
					left: location.pageX,
					top: location.pageY,
				});
			}, 200);
		}
	}, [location, follower]);

	return (
		<div className={classes} ref={follower}>
			<div className='c-follower_arrow'>
				<svg
					width='100%'
					height='100%'
					viewBox='0 0 15 15'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M5 0V2H11.59L0 13.59L1.41 15L13 3.41V10H15V0H5Z'
						fill='#101010'
					/>
				</svg>
			</div>
		</div>
	);
}

export default CursorFollower;
