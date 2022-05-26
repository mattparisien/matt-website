import classNames from "classnames";
import React, { useRef } from "react";
import useMouseMove from "../../helpers/hooks/useMouseMove";


function Cursor({isHovering}) {
	const cursor = useRef(null);

	const [location] = useMouseMove();

	const classes = classNames('c-cursor', { 'is-hover-cursor': isHovering })

	return (
		<div
			className={classes}
			ref={cursor}
			style={{
				top: location.pageY,
				left: location.pageX,
				transform: "translate(-50%, -50%)",
				pointerEvents: "none"
			}}
		>
			<div className="c-cursor_outline"></div>
			<div className='c-cursor_point'></div>
		</div>
	);
}

export default Cursor;
