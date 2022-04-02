import { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function useScrollContext() {
	const [scrollContext, setScrollContext] = useState(null);

	const scroll = useLocomotiveScroll();

	useEffect(() => {
		if (scroll.isReady) {
			setScrollContext({
				name: 'locomotive',
				scroller: scroll.scroll
			})
		} else {
			setScrollContext({
				name: 'window',
				scroller: window
			})
		}
	}, [scroll]);

	return scrollContext;
}

export default useScrollContext;
