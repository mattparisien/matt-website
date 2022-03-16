import classNames from "classnames";
import React, { useRef } from "react";
import Link from "../Link/Link";

function CircleButton({ text, href, color, classes }) {
	const btnClasses = classNames("c-circle-button -fade-up-load", {
		[`-bg-${color}`]: color,
		[classes]: classes,
	});

	const button = useRef(null);

	// useEffect(() => {
	// 	const handleMouseMove = e => {
	// 		setLocation({
	// 			mouseX: e.pageX,
	// 			mouseY: e.pageY,
	// 		});
	// 	};

	// 	button.current &&
	// 		button.current.addEventListener("mousemove", handleMouseMove);

	// 	return () => {
	// 		button.current &&
	// 			button.current.removeEventListener("mousemove", handleMouseMove);
	// 	};
	// }, []);

	// useEffect(() => {
	// 	const lerp = (current, target, factor) => {
	// 		return current * (1 - factor) + target * factor;
	// 	};

	// 	const calculateDistance = (x1, y1, x2, y2) => {
	// 		return Math.hypot(x1 - x2, y1 - y2);
	// 	};

	// 	class MagneticObject {
	// 		constructor(domElement) {
	// 			this.domElement = domElement;
	// 			this.boundingClientRect = this.domElement.getBoundingClientRect();
	// 			this.triggerArea = 200;
	// 			this.interpolationFactor = 0.8;

	// 			this.lerpingData = {
	// 				x: { current: 0, target: 0 },
	// 				y: { current: 0, target: 0 },
	// 			};

	// 			this.render();
	// 		}
	// 		render() {
	// 			const distanceFromMouseToCenter = calculateDistance(
	// 				location.mouseX,
	// 				location.mouseY,
	// 				this.boundingClientRect.left + this.boundingClientRect.width / 2,
	// 				this.boundingClientRect.top + this.boundingClientRect.height / 2
	// 			);

	// 			let targetHolder = { x: 0, y: 0 };

	// 			if (distanceFromMouseToCenter < this.triggerArea) {
	// 				this.domElement.classList.add("focus");

	// 				targetHolder.x =
	// 					location.mouseX -
	// 					this.boundingClientRect.left +
	// 					this.boundingClientRect.width / 2;
	// 				targetHolder.y =
	// 					location.mouseY -
	// 					this.boundingClientRect.top +
	// 					this.boundingClientRect.height / 2;
	// 			} else {
	// 				this.domElement.classList.remove("focus");
	// 			}

	// 			this.lerpingData["x"].target = targetHolder.x;
	// 			this.lerpingData["y"].target = targetHolder.y;

	// 			for (const item in this.lerpingData) {
	// 				this.lerpingData[item].current = lerp(
	// 					this.lerpingData[item].current,
	// 					this.lerpingData[item].target,
	// 					this.interpolationFactor
	// 				);
	// 			}

	// 			this.domElement.style.transform = `translate(${this.lerpingData["x"].current}px, ${this.lerpingData["y"].current}px)`;

	// 			window.requestAnimationFrame(() => this.render());
	// 		}
	// 	}

	// 	button.current && location && new MagneticObject(button.current);
	// }, [location]);

	return (
		<Link classes={btnClasses} href={href} ref={button}>
			{text}
		</Link>
	);
}

export default CircleButton;
