import React, { forwardRef } from "react";
import Logo from "./Logo";

function Title(props, ref) {

	const { isHomePage } = props;

	return (
		<div className='title'>
			{isHomePage && <Logo isDefaultHidden/>}
		</div>
	);
}

export default forwardRef(Title);
