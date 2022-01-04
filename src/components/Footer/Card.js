import React from "react";
import Arrow from "../Vector/Arrow";

function Card(props) {
	return (
		<div className='footer-cards__card'>
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

export default Card;
