import React, { useState } from "react";
import classNames from "classnames";

function Button(props) {
	const [scale, setScale] = useState(false);

	const buttonStyle = {
		padding: props.padding,
	};

	const circleStyle = {
		transition: "300ms ease",
		transform: `translate(-50%, -50%)scale(${scale ? 1.3 : 1})`,
	};

	const buttonClass = classNames("btn", {
		"btn-circle": props.style === "circle",
		"btn-regular": props.style === "regular",
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
			onClick={() => props.showModal()}
		>
			{props.style === "circle" && (
				<div
					className='btn__circle -isAbsolute -isAbsolute__centered'
					style={circleStyle}
				></div>
			)}
			<div
				className='btn__circle__inner -isFull -flexCenterAll'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{props.children}
			</div>
		</button>
	);
}

export default Button;
