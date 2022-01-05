import { useState, useEffect } from "react";

export default function useMouseMove(array) {
	const [isMouseOut, setMouseOut] = useState(false);
	const [location, setLocation] = useState({});

	useEffect(() => {
		if (!Array.isArray(array)) {
			console.error(
				"You must provide an array of refs to the useMouseMove hook"
			);
			return;
		}

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
	}, [array]);

	return [location];
}