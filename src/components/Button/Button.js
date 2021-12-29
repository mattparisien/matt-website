import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import ButtonCircle from "./ButtonCircle";
import ButtonRegular from "./ButtonRegular";
import ButtonLink from "./ButtonLink";


function Button(props) {
	const [scale, setScale] = useState(false);

	const buttonStyle = {
		padding: props.padding,
	};

	const buttonRef = useRef([]);

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
