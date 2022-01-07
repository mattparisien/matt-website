import React, { forwardRef } from "react";
import Logo from "./Logo";

function Title(props, ref) {

	const { isHomePage, hasVisited } = props;

	return (
		<div className='title'>
			{isHomePage && <Logo hasVisited={hasVisited}/>}
		</div>
	);
}

export default forwardRef(Title);
