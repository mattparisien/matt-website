import { useState, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function useMouseMove(array) {
	const [location, setLocation] = useState({});
	const scroll = useLocomotiveScroll();

	useEffect(() => {
		const handleMouseMove = (e, index) => {
			setLocation({
				pageX: e.clientX,
				pageY: e.clientY,
			});
		};

		scroll &&
			scroll.scroll &&
			scroll.scroll.el.addEventListener("mousemove", e => handleMouseMove(e));

		return () => {
			scroll &&
				scroll.scroll &&
				scroll.scroll.el.removeEventListener("mousemove", handleMouseMove);
		};
	}, [scroll]);

	return [location];
}
