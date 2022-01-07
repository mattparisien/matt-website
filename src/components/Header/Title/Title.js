import React, { forwardRef } from "react";
import Logo from "./Logo";
import AnchorLink from "../../AnchorLink/AnchorLink";

function Title(props, ref) {
	const { isHomePage, isContentHidden } = props;

	return (
		<div className='title'>
			{isHomePage && (
				<AnchorLink to={"/"} isRouterLink target={"_self"}>
					{" "}
					<Logo isContentHidden={isContentHidden} />{" "}
				</AnchorLink>
			)}
		</div>
	);
}

export default forwardRef(Title);
