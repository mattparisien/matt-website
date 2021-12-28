import React, { useState } from "react";
import classNames from "classnames";
import ButtonCircle from "./ButtonCircle";
import ButtonRegular from "./ButtonRegular";

function Button(props) {
	const [scale, setScale] = useState(false);

	const buttonStyle = {
		padding: props.padding,
	};

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}


	return (
		<>
		{props.style === "circle" && <ButtonCircle {...props}/>};
		{props.style === "regular" && <ButtonRegular {...props}/>};
		</>
		
	)
}

export default Button;
