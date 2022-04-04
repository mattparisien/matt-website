import classNames from "classnames";
import React from "react";

function Button({ children, href, target, selected, number, onClick }) {
	const classes = classNames("c-button", { selected: selected });

	return (
		<a className={classes} onClick={onClick} href={href}>
			<div className="inner -relative -stretchX -stretchY">
			<div className="button-text">{children}</div>
			<div className="button-circle"></div>
			</div>
		</a>
	);
}

export default Button;
