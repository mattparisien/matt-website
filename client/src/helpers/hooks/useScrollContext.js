import React, { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function useScrollContext() {
	const [scrollContext, setScrollContext] = useState(null);

	const scroll = useLocomotiveScroll();

	useEffect(() => {
		if (scroll.isReady) {
			setScrollContext("locomotive");
		} else {
			setScrollContext("window");
		}
	}, [scroll]);

	return scrollContext;
}

export default useScrollContext;
