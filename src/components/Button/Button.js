import classNames from "classnames";
import React from "react";

function Button({ children, href, target, selected, number, onClick }) {
	const classes = classNames("c-button", { selected: selected });

	return (
		<a className={classes} onClick={onClick} href={"/"}>
			<span className='c-button_label'>
				{children} <sup className='c-button_number'>{number}</sup>
			</span>
		</a>
	);
}

export default Button;
