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

		window.addEventListener("mousemove", e => handleMouseMove(e));

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [scroll]);

	return [location];
}
