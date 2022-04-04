import gsap from "gsap";
import Draggable from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
import VelocityTracker from "gsap/utils/VelocityTracker";
import $ from "jquery";
import React, { useContext, useEffect, useRef } from "react";
import { CursorContext } from "../../App/App";
import useResize from "../../helpers/hooks/useResize";
import Figure from "../Figure/Figure";
import Link from "../Link/Link";

function Slider({ items }) {
	gsap.registerPlugin(Draggable, VelocityTracker, InertiaPlugin);
	const draggable = useRef(null);
	const container = useRef(null);
	const slider = useRef(null);
	const itemRefs = useRef([]);
	itemRefs.current = [];
	// const { changeCursor } = useContext(CursorContext);
	const { windowWidth } = useResize();

	console.log(items)

	useEffect(() => {
		//Set up slider proxy
		const items = itemRefs.current;
		const length = items.length;
		const itemWidth = $(items[0]).width();
		const gap = (itemWidth / 4) * length;
		const sliderWidth = itemWidth * length + gap;

		$(slider.current).css({ width: sliderWidth });
	}, [windowWidth, slider.current, itemRefs.current]);

	useEffect(() => {
		// let pressedTo;
		const tracker = VelocityTracker.track(slider.current, "x");
		const direction = draggable.current && draggable.current[0].getDirection();

		draggable.current = Draggable.create(slider.current, {
			// edgeResistance: 1,
			// dragResistance: 0.3,
			type: "x",
			bounds: container.current,
			inertia: true,
			throwProps: true,
			onPress: e =>
				gsap.to(slider.current, {
					scale: 0.9,
					ease: "power3.out",
					duration: 1,
					
				}),
			onRelease: () =>
				gsap.to(slider.current, { scale: 1, ease: "power3.out", duration: 1 }),
		});
	}, []);

	// const handleMouseEnter = () => {
	// 	console.log("hello!");
	// 	changeCursor("drag");
	// };
	// const handleMouseLeave = () => {
	// 	changeCursor("normal");
	// };

	const addToRefs = el => {
		if (el && !itemRefs.current.includes(el)) {
			itemRefs.current.push(el);
		}
	};

	return (
		<div className='o-slider -relative' ref={container}>
			<div
				className='o-slider_inner -fadeUpChildren'
				ref={slider}
				// onMouseEnter={handleMouseEnter}
				// onMouseLeave={handleMouseLeave}
			>
				{items &&
					items.map((item, i) => (
						<SliderItem
							addToRefs={addToRefs}
							itemId={item.id}
							key={i}
							title={item.title}
							subtitle={item.subtitle}
							src={item.url}
						/>
					))}
			</div>
		</div>
	);
}

function SliderItem({ title, subtitle, src, alt, itemId, addToRefs }) {
	return (
		<Link
			isRouterLink
			classes='o-slider_item -hover-underline-label'
			href={`/projects/${itemId}`}
			ref={addToRefs}
		>
			<div className='o-slider_image'>
				<Figure src={src} noFrame />
			</div>
			<div className='o-slider_item_info'>
				<h3 className='o-slider_item_title -underline-label -relative'>
					<div className='label'>{title}</div>
				</h3>
				{/* <p className='o-slider_item_description -text-tiny'>{subtitle}</p> */}
			</div>
		</Link>
	);
}

export default Slider;
