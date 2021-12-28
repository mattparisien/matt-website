import React, { useState } from "react";
import classNames from "classnames";
import ButtonCircle from "./ButtonCircle";

function Button(props) {
	const [scale, setScale] = useState(false);

	const buttonStyle = {
		padding: props.padding,
	};

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const handleMouseEnter = () => {
		setScale(!scale);
	};
	const handleMouseLeave = () => {
		setScale(!scale);
	};

	return props.style === "circle" && <ButtonCircle {...props}/>;
}

export default Button;
