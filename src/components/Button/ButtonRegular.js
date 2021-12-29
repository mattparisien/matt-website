import React, { useRef } from "react";
import classNames from "classnames";
import $ from "jquery";
import { useEffect } from "react/cjs/react.development";
import gsap from "gsap";

function ButtonRegular(props, ref) {
	const buttonClass = classNames("btn btn-regular", {
		[`-isBg${props.bg && props.bg}`]: props.bg,
		[`-isText${props.textColor && props.textColor}`]: props.textColor,
	});

	const mouseOverCircle = useRef(null);
	const button = useRef(null);





	return (
		<button
			className={buttonClass}
			ref={button}
			
			
		>
			{props.children}
			<div className='mouseOver-circle' ref={mouseOverCircle}></div>
		</button>
	);
}

export default ButtonRegular;
