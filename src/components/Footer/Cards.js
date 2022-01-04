import React from "react";
import Card from "./Card";

function Cards() {

	const cardData = [
		{
			greeting: 'Let\'\s start a project?',
		},
		{
			greeting: 'Let\'\s have a coffee?',
		},
		{
			greeting: 'Quit talking and being doing.',
		},
		{
			greeting: 'Quit talking and being doing.',
		},
		{
			greeting: 'Quit talking and being doing.',
		},
		{
			greeting: 'Quit talking and being doing.',
		},
		{
			greeting: 'Quit talking and being doing.',
		},
	]

	return (
		<div className={"footer-cards"}>
			<div className='footer-cards__inner'>
				{cardData.map(card => {
					return <Card greeting={card.greeting}/>
				})}
			</div>
		</div>
	);
}

export default Cards;
