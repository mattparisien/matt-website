import React, { forwardRef } from "react";
import Logo from "./Logo";
import AnchorLink from "../../AnchorLink/AnchorLink";

function Title(props, ref) {
	const { isHomePage, isContentHidden } = props;

	return (
		<div className='title'>
			<AnchorLink to={"/"} isRouterLink target={"_self"}>
				{isHomePage && <Logo isContentHidden={isContentHidden} />}
			</AnchorLink>
		</div>
	);
}

export default forwardRef(Title);
