import React, { useState } from "react";
import classNames from "classnames";
import { rawPathToString } from "gsap/utils/paths";

function Button(props) {
	const [scale, setScale] = useState(false);

	const buttonStyle = {
		padding: props.padding,
	};

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const circleStyle = {
		transition: "300ms ease",
		transform: `translate(-50%, -50%)scale(${scale ? 1.3 : 1})`,
	};

	const buttonClass = classNames("btn", {
		"btn-circle": props.style === "circle",
		"btn-regular": props.style === "regular",
		[`-isBg${props.bg && capitalizeFirstLetter(props.bg)}`]: props.bg,
		[`-isText${props.textColor && capitalizeFirstLetter(props.textColor)}`]:
			props.textColor,
	});

	const handleMouseEnter = () => {
		setScale(!scale);
	};
	const handleMouseLeave = () => {
		setScale(!scale);
	};

	return (
		<button
			className={buttonClass}
			id={props.id}
			style={buttonStyle}
			type={props.type}
			onClick={() => props.onClick()}
		>
			<div
				className='btn__circle -isAbsolute -isAbsolute__centered'
				style={circleStyle}
			></div>

			<div
				className='btn__content__inner -isFull -flexCenterAll'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{props.children}
			</div>
		</button>
	);
}

export default Button;
