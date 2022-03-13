import React from "react";
import classNames from "classnames";

function Section(props) {
	const classes = classNames("Section c-section", { [props.classes]: props.classes });

	return (
		<>
			<section className={classes}>{props.children}</section>
		</>
	);
}

export default Section;
