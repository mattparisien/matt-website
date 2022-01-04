import React from "react";
import Arrow from "../Vector/Arrow";

function Card(props) {
	return (
		<div className='footer-cards__card'>
			<div className='card-greeting'>{props.greeting}</div>
			<div className='card-cta'>
				<span className='card-cta__text'>Let's chat</span>
        <Arrow/>
			</div>
		</div>
	);
}

export default Card;
