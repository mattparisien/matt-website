import React from "react";
import classNames from "classnames";

function ButtonRegular(props) {
	const buttonClass = classNames("btn btn-regular", {
		[`-isBg${props.bg && props.bg}`]: props.bg,
    [`-isText${props.textColor && props.textColor}`]: props.textColor,
	});

	return <button className={buttonClass}>{props.children}</button>
}

export default ButtonRegular;
