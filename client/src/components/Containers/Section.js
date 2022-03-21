import React from "react";
import classNames from "classnames";

function Section(props) {
	const classes = classNames("Section c-section", {
		[props.classes]: props.classes,
	});

	return (
		<>
			<section
				className={classes}
				data-scroll-section={props["data-scroll-section"]}
			>
				{props.children}
			</section>
		</>
	);
}

export default Section;
