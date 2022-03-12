import React from "react";
import styled from "styled-components";
import classNames from "classnames";

function Button({ children, href, target, selected, number }) {
	const classes = classNames("c-button", { 'selected': selected });

	return (
		<a className={classes} onClick={e => e.preventDefault()}>
			<span className='c-button_label'>{children} <sup className="c-button_number">{number}</sup></span>
		</a>
	);
}

export default Button;
