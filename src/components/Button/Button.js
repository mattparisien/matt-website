import React, { useRef, useState } from "react";
import ButtonCircle from "./ButtonCircle";
import ButtonLink from "./ButtonLink";
import ButtonRegular from "./ButtonRegular";


function Button(props) {
	const [scale, setScale] = useState(false);

	const buttonStyle = {
		padding: props.padding,
	};


	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}


	const inner =
		props.linkTo || props.mailTo ? (
			<ButtonLink linkTo={props.linkTo} mailTo={props.mailTo}>{props.children}</ButtonLink>
		) : (
			props.children
		);


	return (
		<>
			{props.style === "circle" && (
				<ButtonCircle {...props} >{inner}</ButtonCircle>
			)}
			;
			{props.style === "regular" && (
				<ButtonRegular {...props}>{inner}</ButtonRegular>
			)}
			;
		</>
	);
}

export default Button;
