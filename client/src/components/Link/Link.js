import React from "react";
import LinkCircle from "./LinkCircle";

function Link(props) {
	return (
		<a
			className={`Link ${props.className ? props.className : ""}`}
			href={props.href}
			target={props.target}
			onClick={props.onClick}
			
		>
			{props.children}
			<LinkCircle/>
		</a>
	);
}

export default Link;
