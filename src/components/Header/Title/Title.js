import React, { forwardRef } from "react";
import Logo from "./Logo";

function Title(props, ref) {

	const { isHomePage, isContentHidden } = props;

	return (
		<div className='title'>
			{isHomePage && <Logo isContentHidden={isContentHidden}/>}
		</div>
	);
}

export default forwardRef(Title);
