import React from "react";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

function Accent(props) {
	const { ref, inView } = useInView({
		threshold: 1,
	});

	const classes = classNames(`o-accent`, { "is-in-view": inView });

	return <span className={classes} ref={ref}>{props.children}</span>;
}

export default Accent;
