import React, {forwardRef} from "react";
import classNames from "classnames";

function Container(props, ref) {
	const classes = classNames("o-container", { [props.classes]: props.classes });

	return <div className={classes}>{props.children}</div>;
}

export default forwardRef(Container);
