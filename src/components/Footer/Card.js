import React, { forwardRef, useRef } from "react";
import Arrow from "../Vector/Arrow";
import gsap from "gsap";
import $ from "jquery";

function Card(props, ref) {

	return (
		<div
			className='footer-cards__card'
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.handleMouseLeave}
			ref={ref}
		>
			<div className='card-greeting'>{props.greeting}</div>
			<div className='card-cta'>
				<a href={`mailto:hello@matthewparisien.com?subject=${props.greeting}`}>
					<span className='card-cta__text'>Let's chat</span>
					<Arrow />
				</a>
			</div>
		</div>
	);
}

export default forwardRef(Card);
