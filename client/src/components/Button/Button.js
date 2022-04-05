import { positions } from "@mui/system";
import classNames from "classnames";
import React, { useEffect, useRef } from "react";

function Button({ children, href, target, selected, number, onClick }) {
	const classes = classNames("c-button", { selected: selected });
	const isStuck = useRef(false);
	const button = useRef(null);



	return (
		<a className={classes} onClick={onClick} href={href} ref={button}>
			<div className='inner -relative -stretchX -stretchY'>
				{children}
				<div className='button-circle'></div>
			</div>
		</a>
	);
}

export default Button;
