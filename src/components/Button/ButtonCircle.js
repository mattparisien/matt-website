import React, { useState, forwardRef } from "react";
import classNames from "classnames";

function ButtonCircle(props, ref) {
	const [scale, setScale] = useState(false);

	const circleStyle = {
		transition: "300ms ease",
		transform: `translate(-50%, -50%)scale(${scale ? 1.3 : 1})`,
	};

	
	const circleClass = classNames("btn-circle__circle -isAbsolute -isAbsolute__centered", {
		[`-isBg${props.bg && props.bg}`]: props.bg
	} )

	const handleMouseEnter = () => {
		setScale(!scale);
	};
	const handleMouseLeave = () => {
		setScale(!scale);
	};

	return (
		<button
			className='btn hasCircle'
			id='contactCta'
			onClick={props.onClick}
			type={props.type}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			ref={ref}
		>
			{props.children}
			<div className='btn-circle' style={circleStyle} className={circleClass}></div>
		</button>
	);
}

export default forwardRef(ButtonCircle);
