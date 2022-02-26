import React from "react";

function Link(props) {
	return (
		<a
			className={`Link ${props.className ? props.className : ""}`}
			href={props.href}
			target={props.target}
			onClick={props.onClick}
		>
			{props.children}
		</a>
	);
}

export default Link;
