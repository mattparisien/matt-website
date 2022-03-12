import React, {forwardRef} from "react";
import classNames from "classnames";

function Container(props, ref) {
	const classes = classNames("Container", { [props.classes]: props.classes });

	return <div className={classes}>{props.children}</div>;
}

export default forwardRef(Container);
