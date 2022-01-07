import React, { useRef, useEffect } from "react";
import { StyledLogo } from "../styles/StyledLogo";
import useSplit from "../../../helpers/hooks/useSplit";


function Logo({ hasVisited }) {
	const logoRef = useRef(null);

	const [isSplit, chars, splitCount] = useSplit([logoRef.current], {
		type: "chars",
		charsClass: "char",
	});

	useEffect(() => {
		console.log(hasVisited)
	}, [])

	return (
		<StyledLogo className='-headingLarge' ref={logoRef} hasVisited={hasVisited}>
			Matt
		</StyledLogo>
	);
}

export default Logo;
