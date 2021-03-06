import { useState, useEffect } from "react";



export default function useResize() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	const [isResized, setResized] = useState(false);

	useEffect(() => {
		const handleResize = function (e) {
			const innerWidth = window.innerWidth;
			const innerHeight = window.innerHeight;
			setWindowWidth(innerWidth);
			setWindowHeight(innerHeight);
			setResized(true);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			setResized(false);
		};
	}, []);


	useEffect(() => {
		if (isResized) {
			setTimeout(() => {
				setResized(false)
			}, 800);
		}
	}, [isResized])

	return {windowWidth, windowHeight, isResized};
}