import React from "react";
import classNames from "classnames";

function Paragraph(props) {
	const classes = classNames(`c-text -text-${props.size}`, {
		"-indent": props.indent,
		[props.classes]: props.classes,
	});

	return <div className={classes}>{props.children}</div>;
}

export default Paragraph;
