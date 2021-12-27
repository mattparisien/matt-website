import React from "react";
import classNames from "classnames";

function Section(props) {
	return <section className={props.classes}>{props.children}</section>;
}

export default Section;
