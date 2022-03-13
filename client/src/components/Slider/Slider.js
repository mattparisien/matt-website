import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";

function Slider({ items }) {
	gsap.registerPlugin(ScrollTrigger);
	const slider = useRef(null);

	return (
		<div className='c-slider' ref={slider}>
			<ul className='c-slider_list'>
				{items &&
					items.map((item, i) => {
						return (
							<li className='c-slider_item' key={i}>
								<div
									className='c-slider_img'
									style={{ backgroundImage: `url(${item.url})` }}
								></div>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default Slider;
