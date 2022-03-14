import classNames from "classnames";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import useMouseMove from "../../helpers/hooks/useMouseMove";

function CursorFollower({ cursorState }) {
	const [location] = useMouseMove();
	
	const follower = useRef(null);
	const classes = classNames("c-follower", {
		"is-hovering": cursorState === "hovering",
		"is-nav-hovering": cursorState === "nav-hovering",
		"is-link-hovering": cursorState === "link-hovering",
	});

	const positionRef = useRef({
		mouseX: 0,
		mouseY: 0,
		destinationX: 0,
		destinationY: 0,
		distanceX: 0,
		distanceY: 0,
		key: -1,
	});

	useEffect(() => {
		if (follower.current) {
			const mouseX = location.pageX;
			const mouseY = location.pageY;

			positionRef.current.mouseX = mouseX - follower.current.clientWidth / 2;
			positionRef.current.mouseY = mouseY - follower.current.clientHeight / 2;
		}
	}, [location, follower, cursorState]);

	useEffect(() => {
		cursorState === "hovering" ||
		cursorState === "nav-hovering" ||
		cursorState === "link-hovering"
			? gsap.to(follower.current, {
					width: "80px",
					height: "80px",
					y: "-50%",
					x: "-50%",
			  })
			: gsap.to(follower.current, {
					width: "20px",
					height: "20px",
			  });
	}, [cursorState]);

	useEffect(() => {
		const followMouse = () => {
			positionRef.current.key = requestAnimationFrame(followMouse);

			const {
				mouseX,
				mouseY,
				destinationX,
				destinationY,
				distanceX,
				distanceY,
			} = positionRef.current;

			if (!destinationX || !destinationY) {
				positionRef.current.destinationX = mouseX;
				positionRef.current.destinationY = mouseY;
			} else {
				positionRef.current.distanceX = (mouseX - destinationX) * 0.01;
				positionRef.current.distanceY = (mouseY - destinationY) * 0.01;

				if (
					Math.abs(positionRef.current.distanceX) +
						Math.abs(positionRef.current.distanceY) <
					0.1
				) {
					positionRef.current.destinationX = mouseX;
					positionRef.current.destinationY = mouseY;
				} else {
					positionRef.current.destinationX += distanceX;
					positionRef.current.destinationY += distanceY;
				}
			}
			follower.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
		};

		followMouse();
	});

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
