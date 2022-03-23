import React from "react";
import classNames from "classnames";

function Section(props) {
	const classes = classNames("c-section", {
		[props.classes]: props.classes,
	});

	return (
		<>
			<section
				className={classes}
				data-theme-trigger={props["data-theme-trigger"]}
				data-theme={props["data-theme"]}
			>
				{props.children}
			</section>
		</>
	);
}

export default Section;
