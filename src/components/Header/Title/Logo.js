import React, { useRef, useEffect } from "react";
import { StyledLogo } from "../styles/StyledLogo";
import useSplit from "../../../helpers/hooks/useSplit";


function Logo({ isContentHidden }) {
	const logoRef = useRef(null);

	const [isSplit, chars, splitCount] = useSplit([logoRef.current], {
		type: "chars",
		charsClass: "char",
	});


	return (
		<StyledLogo className='-headingLarge' ref={logoRef} isContentHidden={isContentHidden}>
			Matt
		</StyledLogo>
	);
}

export default Logo;
