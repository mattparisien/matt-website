import React from "react";
import LinkCircle from "./LinkCircle";

function Link(props) {
	return (
		<a
			className={`Link ${props.className ? props.className : ""}`}
			href={props.href}
			target={props.target}
			onClick={props.onClick}
			style={{display: "block"}}
		>
			{props.children}
			{!props.noCircle && <LinkCircle />}
		</a>
	);
}

export default Link;

