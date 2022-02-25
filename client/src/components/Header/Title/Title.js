import React, { forwardRef } from "react";
import Logo from "./Logo";
import AnchorLink from "../../AnchorLink/AnchorLink";
import { StyledTitle } from "../styles/StyledTitle";

function Title(props, ref) {
	const { location, titleRef } = props;

	return (
		<StyledTitle className={"title"} isLogo={props.location === '/'}>
			<h1 ref={titleRef}>
				{location === "/" && (
					<AnchorLink to={"/"} isRouterLink target={"_self"}>
						{" "}
						<Logo />{" "}
					</AnchorLink>
				)}
			</h1>
			</StyledTitle>
	);
}

export default forwardRef(Title);