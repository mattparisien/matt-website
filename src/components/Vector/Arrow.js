import React from "react";

function Arrow(props) {
	return (
		<svg
			className='arrow-svg'
			width={props.width}
			height={props.height}
			viewBox='0 0 345 214'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			onMouseEnter={props.onMouseEnter}
			style={{overflow: "hidden"}}
		>
			<path
				d='M340.388 117.796C346.079 112.162 346.125 102.981 340.492 97.2901L248.683 4.54644C243.049 -1.14476 233.868 -1.19127 228.177 4.44258C222.486 10.0764 222.439 19.2572 228.073 24.9484L309.681 107.387L227.242 188.995C221.551 194.629 221.504 203.81 227.138 209.501C232.772 215.192 241.953 215.239 247.644 209.605L340.388 117.796ZM0.262492 120.32L330.113 121.991L330.26 92.9913L0.409383 91.3205L0.262492 120.32Z'
				fill='#F9F9EA'
			/>
		</svg>
	);
}

export default Arrow;
